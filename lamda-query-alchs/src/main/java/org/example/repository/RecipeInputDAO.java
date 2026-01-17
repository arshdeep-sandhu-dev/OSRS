package org.example.repository;

import org.example.entity.RecipeInput;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface RecipeInputDAO extends JpaRepository<RecipeInput, Long> {
    @Modifying
    @Query("Delete from RecipeInput ri where ri.recipe.recipeId = :recipeId")
    void deleteByRecipeId(Long recipeId);
}
