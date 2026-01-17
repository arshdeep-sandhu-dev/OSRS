package com.example.QueryApi.dto;

import com.example.QueryApi.entity.LatestPrices;
import com.example.QueryApi.entity.Recipe;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
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
