import { useEffect, useState } from "react";
import FlippingContext from "./FlippingContext";
import { ApiClient } from "../../ApiCall/ApiClient";
import { useAuth } from "../auth/AuthState";
import useItemMapping from "../../hooks/useItemMapping.js";
import { useMemo } from "react";
import { Button, Grid } from "@mui/material";
import UpdateButtons from "../../componants/UpdateButtons.js"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { nonOutlineButtonSx, nonOutlineButtonNoHoverSx } from "../../constants/NeedAccountStyles.js";
import { hover } from "framer-motion";
export default function FlippingState({ children }) {
  const [metrics, setMetrics] = useState([]);
  const tableType = "flips";
  const [totalPage, setTotalPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [editItemName, setEditItemName] = useState("");
  const [editItems, setEditItems] = useState([{ item: null, qty: null }]);

  const formatNumber = (num) => {
    if (num == null || isNaN(num)) return num;
    return Math.round(num).toLocaleString('en-US');
  };

  const auth = useAuth();
  const currentUser = auth?.currentUser || null;
  const [successMessage, setSuccessMessage] = useState("");
  const [addingRecipe, setAddingRecipe] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [updatingRecipeIndex, setUpdatingRecipeIndex] = useState(null);
  const { options: nameMappings = [], loading: mappingsLoading } = useItemMapping();
  const nameMappingsMap = useMemo(
    () => new Map((nameMappings || []).map(item => [item.id, item.label])),
    [nameMappings]
  );
  const findPrifittability = (recipe) => {
    let totalInputCost = 0;
    recipe.inputs.forEach((input) => {
      const lowPrice = parseInt(input.lowPrice?.replace(/,/g, '')) || 0;
      totalInputCost += lowPrice * input.qty;
    });
    const sellPrice = parseInt(recipe.buyPrice?.replace(/,/g, '')) || 0;
    const profit = Math.floor(sellPrice - totalInputCost - Math.min(Math.floor(sellPrice * 0.02), 5000000));
    const profitDisplay = profit >= 0 ? `+${profit.toLocaleString()}` : profit.toLocaleString();
    return `${profit.toLocaleString()}`;
  }

  const DeleteRecipe = (recipeIndex) => {
    ApiClient().DELETE(`recipe?ownerUid=${currentUser.uid}&recipeIndex=${recipeIndex}`)
      .then((response) => {
        fetchRecipes();
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });

  }
  const UpdateRecipe = async (user_uid, recipe) => {
    ApiClient().PUT(`recipe`, recipe)
      .then((response) => {
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
        input.item = { id: input.itemId, label: input.name }
        input.quantity = input.qty;
        input.qtyTable = "Qty - " + input.qty;


      });
      recipe.buyPrice = PriceFormatting(mapping[recipe.itemId]?.highPrice || null);
      recipe.sellPrice = PriceFormatting(mapping[recipe.itemId]?.lowPrice || null);
      recipe.buyTime = UnixToDate(mapping[recipe.itemId]?.highTime || null);
      recipe.sellTime = UnixToDate(mapping[recipe.itemId]?.lowTime || null);
      recipe.name = nameMappingsMap.get(recipe.itemId) || "Unknown Item";
      recipe.profitability = findPrifittability(recipe);
      const buttonEl = <UpdateButtons
        recipe={recipe}
        DeleteRecipe={DeleteRecipe}
        setUpdatingRecipeIndex={setUpdatingRecipeIndex}
        setItemName={setEditItemName}
        itemName={editItemName}
        nameMappingsMap={nameMappingsMap}
        setItems={setEditItems}
        table={true}
      />;
      const tableName = 
      <Grid sx={{display: "flex", alignItems: "center", flexDirection: "row"}}>
        <Grid>
            <ArrowDropDownIcon sx={{...nonOutlineButtonNoHoverSx, borderRadius: "4px", py: 0, px: 0, marginRight: "1rem"}}/>
        </Grid>
        <Grid>
          {recipe.name}
        </Grid>
      </Grid>;
      recipe.tableName = tableName;
      recipe.edit = buttonEl; // React element in a variable
      // recipe.profitability = recipe.profitability.startsWith('+') ? recipe.profitability.substring(1) : recipe.profitability;

    });
    setRecipes(tempRecipes);
    setMetrics(tempRecipes);
    setTotalPage(Math.ceil(tempRecipes.length / itemsPerPage)); // Assuming all data fits on one page for simplicity
  };


  const PutRecipe = async (owner_uid, recipeIndex, inputs) => {
    try {
      const api = ApiClient();
      const result = await api.PUT(`recipe/${owner_uid}/index/${recipeIndex}`, inputs);
      await fetchRecipes();
      return result;
    } catch (error) {
      console.error("Error updating recipe data:", error);
      throw error;
    }
  };

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




  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };
  const changePage = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalPage)) return;
    setCurrentPage(newPage);
  };


  const sortedMetrics = useMemo(() => {
    if (!sortColumn || !metrics) return metrics;


    return [...metrics].sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];

      // Handle null/undefined values
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      // For numeric columns (profit, cost, buyLimit), parse the formatted strings
      if (sortColumn === "profit" || sortColumn === "profitability" || sortColumn === "sellPrice" || sortColumn === "cost" || sortColumn === "buyLimit") {
        // Remove commas, plus signs, and parse as number
        aVal = typeof aVal === 'string' ? parseFloat(aVal.replace(/[,+]/g, '')) : aVal;
        bVal = typeof bVal === 'string' ? parseFloat(bVal.replace(/[,+]/g, '')) : bVal;


        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      // For string columns (itemName)
      return sortDirection === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [metrics, sortColumn, sortDirection]);

  useEffect(() => {
    if (!currentUser || mappingsLoading || nameMappings.length === 0) {
      if (recipes.length !== 0) setRecipes([]); // avoid unnecessary state churn
      return;
    }
    fetchRecipes();
  }, [currentUser, mappingsLoading, nameMappings.length]);

  useEffect(() => {
    if (recipes.length === 0) {
      setAddingRecipe(true);
    } else {
      setAddingRecipe(false);
    }
  }, [recipes]);

  useEffect(() => {
    const id = setInterval(() => {
      if (currentUser && !mappingsLoading && nameMappings.length > 0) {
        fetchRecipes();
      }
    }, 20000);

    return () => clearInterval(id); // cleanup on unmount
  }, [fetchRecipes]);

  useEffect(() => {
    setSortColumn("profit");
    setSortDirection("desc");
  }, [window.onload]);



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
    PutRecipe,


    metrics,
    handleSort,
    sortedMetrics,
    sortColumn,
    sortDirection,
    setMetrics,
    setSortColumn,
    setSortDirection,
    tableType,
    totalPage,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    changePage,
    setEditItemName,
    editItemName,
    editItems,
    setEditItems,
    fetchRecipes
  };

  return (
    <FlippingContext.Provider value={value}>
      {children}
    </FlippingContext.Provider>
  );
}