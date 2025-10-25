import { useEffect, useState } from "react";
import FlippingContext from "./FlippingContext";
import { ApiClient } from "../../ApiCall/ApiClient";
import { useAuth } from "../auth/AuthState";
import useItemMapping from "../../hooks/useItemMapping.js";
import { useMemo } from "react";
export default function FlippingState({ children }) {
  const auth = useAuth();
  const currentUser = auth?.currentUser || null;
  const [successMessage, setSuccessMessage] = useState("");
  const [addingRecipe, setAddingRecipe] = useState(false);
  
  const [recipes, setRecipes] = useState([]);
  const [updatingRecipeIndex, setUpdatingRecipeIndex] = useState(null);
  const nameMappings = useItemMapping().options;
  const mappingsLoading = useItemMapping().loading;
  const nameMappingsMap = useMemo(
          () => new Map((nameMappings || []).map(item => [item.id, item.label])),
          [nameMappings]
      );
  const findPrifittability = (recipe) => {
    let totalInputCost = 0;
    recipe.inputs.forEach((input) => {
      console.log("Input lowPrice:", input.lowPrice);
      const lowPrice = parseInt(input.lowPrice?.replace(/,/g, '')) || 0;
      totalInputCost += lowPrice * input.qty;
    });
    const sellPrice = parseInt(recipe.buyPrice?.replace(/,/g, '')) || 0;
    const profit = Math.floor(sellPrice - totalInputCost - Math.min(Math.floor(sellPrice * 0.02), 5000000));
    const profitDisplay = profit >= 0 ? `+${profit.toLocaleString()}` : profit.toLocaleString();
    return `${profitDisplay}`;
  }

  const DeleteRecipe = (recipeIndex) => {
    ApiClient().DELETE(`recipe?ownerUid=${currentUser.uid}&recipeIndex=${recipeIndex}`)
      .then((response) => {
        console.log("Delete response:", response);
        fetchRecipes();
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });

  }
  const UpdateRecipe = (recipeIndex, updatedData) => {
    ApiClient().PUT(`recipe?ownerUid=${currentUser.uid}&recipeIndex=${recipeIndex}`, updatedData)
      .then((response) => {
        console.log("Update response:", response);
        fetchRecipes();
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
      });
  }

  const UnixToDate = (unixTimestamp) => {

    if (!unixTimestamp) {
      return "N/A";
    }
    const currentUnix = Math.floor(Date.now() / 1000);
    const minutesDifference = Math.round((currentUnix - unixTimestamp) / 60);
    if (minutesDifference === 0) {
      return "just now";
    }
    if (minutesDifference >= 60) {
      const hoursDifference = Math.floor(minutesDifference / 60);
      if (hoursDifference >= 24) {
        const daysDifference = Math.floor(hoursDifference / 24);
        return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-daysDifference, 'day');
      }
      return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-hoursDifference, 'hour');
    }
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-minutesDifference, 'minute');
  }
  const PriceFormatting = (price) => {
    if (price === null || price === undefined) return null;

    return price.toLocaleString('en-US'); // "1,234,567.89"
  }
  const fetchRecipes = async () => {
    try {
      const api = ApiClient();
      const data = await api.GET(`recipes?owner_uid=${currentUser.uid}`);
      console.log("Fetched recipes:", data);
      handleData(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  const handleData = (data) => {
    const tempRecipes = data.recipes;
    const mapping = data.latestPricesMap;
    if (!mapping || Object.keys(mapping).length === 0) {
      console.error("Latest prices mapping is empty or undefined.");
    }
    tempRecipes.forEach((recipe) => {

      recipe.inputs.forEach((input) => {
        input.name = nameMappingsMap.get(input.itemId) || "Unknown Item";
        input.highPrice = PriceFormatting(mapping[input.itemId]?.highPrice || null);
        input.lowPrice = PriceFormatting(mapping[input.itemId]?.lowPrice || null);
        input.highTime = UnixToDate(mapping[input.itemId]?.highTime || null);
        input.lowTime = UnixToDate(mapping[input.itemId]?.lowTime || null);
        input.qty = input.quantity ? input.quantity : null;
        input.item= { id: input.itemId, label: input.name}
        input.quantity = input.qty;

      });
      recipe.buyPrice = PriceFormatting(mapping[recipe.itemId]?.highPrice || null);
      recipe.sellPrice = PriceFormatting(mapping[recipe.itemId]?.lowPrice || null);
      recipe.buyTime = UnixToDate(mapping[recipe.itemId]?.highTime || null);
      recipe.sellTime = UnixToDate(mapping[recipe.itemId]?.lowTime || null);
      recipe.name = nameMappingsMap.get(recipe.itemId) || "Unknown Item";
      recipe.profitability = findPrifittability(recipe);

    });
    console.log("Processed recipes with latest prices:", tempRecipes);
    setRecipes(tempRecipes);
  };

  useEffect(() => {
    if (!currentUser || mappingsLoading || nameMappingsMap.size === 0) {
      setRecipes([]);
      return;
    }

    fetchRecipes();
  }, [currentUser, mappingsLoading, nameMappingsMap]);

  useEffect(() => {
    if (recipes.length === 0) {
      setAddingRecipe(true);
    }
  }, [recipes]);

  const postUserRecipes = async (recipe) => {
    try {
      const api = ApiClient();
      const result = await api.POST(recipe, "recipe");
      await fetchRecipes();
      return result;
    } catch (error) {
      console.error("Error posting recipe data:", error);
      throw error;
    }
  };

  const value = {
    successMessage,
    setSuccessMessage,
    addingRecipe,
    setAddingRecipe,
    postUserRecipes,
    recipes,
    setRecipes,
    DeleteRecipe,
    UpdateRecipe,
    updatingRecipeIndex,
    setUpdatingRecipeIndex,
    nameMappingsMap,
  };

  return (
    <FlippingContext.Provider value={value}>
      {children}
    </FlippingContext.Provider>
  );
}