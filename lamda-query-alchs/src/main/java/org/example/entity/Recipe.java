package org.example.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "recipes",
        uniqueConstraints = @UniqueConstraint(name = "uq_owner_idx",
                columnNames = {"owner_uid", "recipe_index"}))
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "recipe_id")
    private Long recipeId;
    @Column (name = "owner_uid")
    private String ownerUid;
    @Column(name = "item_id")
    private Integer itemId;
    @Column(name = "recipe_index")
    private Integer recipeIndex;
    @JsonManagedReference
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecipeInput> inputs = new ArrayList<>();


    public void setInputs(List<RecipeInput> inputs) {
        this.inputs.clear();
        if (inputs != null) {
            for (RecipeInput input : inputs) {
                input.setRecipe(this);
                this.inputs.add(input);
            }
        }
    }

    public Long getRecipeId() { return recipeId; }
    public void setRecipeId(Long recipeId) { this.recipeId = recipeId; }

    public String getOwnerUid() { return ownerUid; }
    public void setOwnerUid(String ownerUid) { this.ownerUid = ownerUid; }

    public Integer getRecipeIndex() { return recipeIndex; }
    public void setRecipeIndex(Integer recipeIndex) { this.recipeIndex = recipeIndex; }

    public Integer getItemId() { return itemId; }
    public void setItemId(Integer itemId) { this.itemId = itemId; }

    public List<RecipeInput> getInputs() { return inputs; }

    // IMPORTANT: don't replace the list object; operate on the managed list
    // public void setInputs(List<RecipeInput> inputs) { this.inputs = inputs; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Recipe)) return false;
        Recipe recipe = (Recipe) o;
        return Objects.equals(recipeId, recipe.recipeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(recipeId);
    }
}