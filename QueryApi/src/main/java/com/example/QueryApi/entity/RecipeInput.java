package com.example.QueryApi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

//@Data
@Entity
@Table(name = "recipe_inputs",
        uniqueConstraints = @UniqueConstraint(name = "uq_recipe_item",
                columnNames = {"recipe_id", "item_id"}))
public class RecipeInput {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "input_id")
    private Long inputId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipe;
    @Column(name = "item_id", nullable = false)
    private Integer itemId;
//    @Column(name = "quantity", nullable = false)
//    private double quantity;
    // getters/setters

    @Column(name = "quantity") // optional but recommended
    private Double quantity;



    // getters/setters
    public Long getInputId() { return inputId; }
    public void setInputId(Long inputId) { this.inputId = inputId; }

    public Integer getItemId() { return itemId; }
    public void setItemId(Integer itemId) { this.itemId = itemId; }

    public Double getQuantity() { return quantity; }
    public void setQuantity(Double quantity) { this.quantity = quantity; }

    public Recipe getRecipe() { return recipe; }
    public void setRecipe(Recipe recipe) { this.recipe = recipe; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RecipeInput)) return false;
        RecipeInput that = (RecipeInput) o;
        return Objects.equals(inputId, that.inputId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inputId);
    }
    @Override
    public String toString() {
        // avoid printing the full Recipe to prevent recursion
        Object recipeRef = (recipe == null) ? null : recipe.getRecipeId();
        return "RecipeInput(inputId=" + inputId
                + ", recipeId=" + recipeRef
                + ", itemId=" + itemId
                + ", quantity=" + quantity + ")";
    }
}
