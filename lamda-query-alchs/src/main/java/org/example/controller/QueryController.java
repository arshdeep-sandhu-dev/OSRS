package org.example.controller;

import org.example.dto.AlchInformation;
import org.example.dto.UserRecipeCalculations;
import org.example.entity.Recipe;
import org.example.entity.RecipeInput;
import org.example.service.AlchService;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.dto.ItemMappings;
import java.util.List;

@RestController
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

