package com.example.WikiApi.controller;

import com.example.WikiApi.entity.Items;
import com.example.WikiApi.entity.LatestPrices;
import com.example.WikiApi.service.UpdateDatabase;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class OsrsApi {
    @Autowired
    UpdateDatabase mappings;

    @PostMapping("/addItems")
    public ResponseEntity<List<Items>> AddItemsToDB() throws JsonProcessingException {
        return ResponseEntity.ok(mappings.AddItemsToDB());
    }

    @PatchMapping("/updateItems")
    public ResponseEntity<List<LatestPrices>> updateItems() throws JsonProcessingException {
        return ResponseEntity.ok(mappings.updateItems());
    }

    @PostMapping("/addPrices")
    public ResponseEntity<List<LatestPrices>> addLatestPricesToDB() throws JsonProcessingException {
        return ResponseEntity.ok(mappings.addLatestPricesToDB());
    }

}
