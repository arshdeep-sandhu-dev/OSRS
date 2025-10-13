package com.example.WikiApi.controller;

import com.example.WikiApi.service.UpdateDatabase;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/osrs")
public class OsrsApi {
    @Autowired
    UpdateDatabase mappings;

    @PostMapping("/addItems")
    public void AddItemsToDB() throws JsonProcessingException {
        mappings.AddItemsToDB();
    }

    @PatchMapping("/updateItems")
    public void updateItems() throws JsonProcessingException {
        mappings.updateItems();
    }

    @PostMapping("/addPrices")
    public void addLatestPricesToDB() throws JsonProcessingException {
        mappings.addLatestPricesToDB();
    }

}
