package org.example.repository;

import org.example.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RecipeDAO extends JpaRepository<Recipe, Integer> {
    @Query("select distinct r from Recipe r join fetch r.inputs i where r.ownerUid = :ownerUid")
    List<Recipe> findUserRecipes(@Param("ownerUid") String ownerUid);
    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM recipes WHERE owner_uid =:ownerUid AND recipe_index =:recipeIndex",
            nativeQuery = true)
    void deleteRecipeIdByOwnerUidAndRecipeIndex(@Param("ownerUid") String ownerUid, @Param("recipeIndex") Integer recipeIndex);

    @Query(
            value = "SELECT * FROM recipes WHERE owner_uid =:ownerUid ORDER BY recipe_index ASC",
            nativeQuery = true)
    List<Recipe> findRecipesByOwnerUid(@Param("ownerUid") String ownerUid);

    @Query(
            value = "Select r from Recipe r where ownerUid = :ownerUid and recipeIndex = :recipeIndex")
    Recipe findByOwnerUidAndRecipeIndex(String ownerUid, Integer recipeIndex);
}
