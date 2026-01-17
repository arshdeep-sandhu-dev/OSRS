package com.example.QueryApi.controller;

import com.example.QueryApi.dto.AlchInformation;
import com.example.QueryApi.dto.ItemMappings;
import com.example.QueryApi.dto.UserRecipeCalculations;
import com.example.QueryApi.entity.Recipe;
import com.example.QueryApi.entity.RecipeInput;
import com.example.QueryApi.service.AlchService;
import com.example.QueryApi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class QueryController {
    @Autowired
    AlchService alchService;
    @Autowired
    UserService userService;
    @GetMapping("/alchs")
    public List<AlchInformation> getAlchs(@RequestParam(defaultValue = "0") int pageId) {
        return alchService.getAlchInformation(pageId);
    }

    @PostMapping("/recipe")
    public ResponseEntity<Recipe> getRecipes(@RequestBody Recipe recipe) {
        Recipe recipes =  userService.addRecipe(recipe);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/mappings")
    public List<ItemMappings> getItemMappings() {
        return alchService.getItemMappings();
    }

    @GetMapping("/recipes")
    public UserRecipeCalculations getUserRecipes(@RequestParam String owner_uid) {
        return userService.getRecipes(owner_uid);
    }

    @DeleteMapping("/recipe")
    public ResponseEntity<List<Recipe>> deleteRecipe(@RequestParam String ownerUid, @RequestParam Integer recipeIndex) {

        return ResponseEntity.ok(userService.deleteRecipe(recipeIndex,ownerUid));
    }


    @PutMapping("/recipe/{ownerUid}/index/{recipeIndex}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable String ownerUid, @PathVariable Integer recipeIndex,@RequestBody List<RecipeInput> inputs) {
        return ResponseEntity.ok(userService.updateRecipe(ownerUid, recipeIndex, inputs));
    }


}
