package org.example.controller;

import org.example.service.UpdateDatabase;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@RestController
@EnableWebMvc
@RequestMapping("/api")
public class OsrsApi {
    @Autowired
    UpdateDatabase mappings;

    @PostMapping("/addItems")
    public int AddItemsToDB() throws JsonProcessingException {
        return mappings.AddItemsToDB();
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
