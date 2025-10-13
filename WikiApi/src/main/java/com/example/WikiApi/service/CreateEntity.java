package com.example.WikiApi.service;

import com.example.WikiApi.entity.LatestPrices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.example.WikiApi.entity.Items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class CreateEntity {

    @Autowired
    CallWikiApi callWikiApi;
    @Autowired
    UpdateItem updateItem;
    public List<Items> createItems() throws JsonProcessingException {
        return callWikiApi.fetchDataList();
    }

    public List<LatestPrices> createLatestPrices() throws JsonProcessingException {
        return updateItem.createLatestPrices();
    }
}
