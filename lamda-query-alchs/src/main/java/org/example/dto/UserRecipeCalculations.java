package org.example.dto;

import org.example.entity.LatestPrices;
import org.example.entity.Recipe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRecipeCalculations {

    List<Recipe> recipes;
    Map<Integer,LatestPrices> latestPricesMap;

}
