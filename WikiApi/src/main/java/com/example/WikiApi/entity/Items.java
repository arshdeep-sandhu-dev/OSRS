package com.example.WikiApi.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {

    private String examine;
    @Id
    @JsonProperty("id")
    @Column(name = "item_id")
    private int itemId;
    private boolean members;
    @JsonProperty("lowalch")
    @Column(name = "low_alch")
    private int lowAlch;
    @JsonProperty("highalch")
    @Column(name = "high_alch")
    private int highAlch;
    @JsonProperty("limit")
    @Column(name = "buy_limit")
    private int buyLimit;
    @JsonProperty("name")
    @Column(name = "item_name")
    private String itemName;



}
