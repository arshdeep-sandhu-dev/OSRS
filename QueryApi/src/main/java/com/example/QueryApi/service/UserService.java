package com.example.QueryApi.service;

import com.example.QueryApi.dto.UserRecipeCalculations;
import com.example.QueryApi.entity.LatestPrices;
import com.example.QueryApi.entity.Recipe;
import com.example.QueryApi.entity.RecipeInput;
import com.example.QueryApi.repository.RecipeDAO;
import com.example.QueryApi.repository.RecipeInputDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.QueryApi.repository.LatestPricesDAO;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class UserService {
    @Autowired
    RecipeDAO recipeDAO;
    @Autowired
    LatestPricesDAO latestPricesDAO;
    @Autowired
    RecipeInputDAO recipeInputDAO;
    public Recipe addRecipe(Recipe recipe) {
        return recipeDAO.save(recipe);
    }

    public UserRecipeCalculations getRecipes(String owner_uid) {
        List<Recipe> recipes = recipeDAO.findUserRecipes(owner_uid);
        List<UserRecipeCalculations> calculations = new ArrayList<>();
        List<Integer> itemIds = new ArrayList<>();

        for (Recipe recipe : recipes) {
            itemIds.add(recipe.getItemId());
            for (RecipeInput input : recipe.getInputs()) {
                itemIds.add(input.getItemId());
            }
        }
        List<LatestPrices> latestPrices = latestPricesDAO.findLatestPricesByItemIds(itemIds);
        Map<Integer, LatestPrices> priceMap = new HashMap<>();
        for (LatestPrices lp : latestPrices) {
            priceMap.put(lp.getItemId(), lp);
        }
        UserRecipeCalculations userRecipeCalculations = UserRecipeCalculations
                .builder()
                .recipes(recipes)
                .latestPricesMap(priceMap)
                .build();


        return userRecipeCalculations;
    }
    public List<Recipe> deleteRecipe(int index , String owner_uid) {
        recipeDAO.deleteRecipeIdByOwnerUidAndRecipeIndex(owner_uid, index);
        return fixIndex(index,owner_uid);
    }
    @Transactional
    public List<Recipe> fixIndex(int index, String owner_uid) {
        List<Recipe> allUserRecipes = recipeDAO.findRecipesByOwnerUid(owner_uid);
        for (int i=index; i<allUserRecipes.size(); i++) {
            Recipe r = allUserRecipes.get(i);
            r.setRecipeIndex(r.getRecipeIndex()-1);
        }
        return recipeDAO.saveAll(allUserRecipes);

    }

    @Transactional
    public Recipe updateRecipe(String ownerUid, Integer recipeIndex, List<RecipeInput> inputs) {
        Recipe recipe = recipeDAO.findByOwnerUidAndRecipeIndex(ownerUid, recipeIndex);
        recipeInputDAO.deleteByRecipeId(recipe.getRecipeId());
        recipe.setInputs(inputs);
        return recipeDAO.save(recipe);
    }

}
