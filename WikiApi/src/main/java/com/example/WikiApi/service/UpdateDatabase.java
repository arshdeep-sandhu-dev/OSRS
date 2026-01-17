package com.example.WikiApi.service;

import com.example.WikiApi.entity.LatestPrices;
import com.example.WikiApi.repository.ItemsDao;
import com.example.WikiApi.entity.Items;
import com.example.WikiApi.repository.LatestPricesDao;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UpdateDatabase {

    @Autowired
    CreateEntity createEntity;
    @Autowired
    LatestPricesDao latestPricesDao;
    @Autowired
    ItemsDao itemDao;
    public List<Items> AddItemsToDB() throws JsonProcessingException {
        List<Items> allItems = createEntity.createItems();
        return itemDao.saveAll(allItems);
    }

    public List<LatestPrices> addLatestPricesToDB() throws JsonProcessingException {
        List<LatestPrices> allPrices = createEntity.createLatestPrices();
        return latestPricesDao.saveAll(allPrices);
    }

    public List<LatestPrices> updateItems() throws JsonProcessingException{
        List<LatestPrices> allPrices = createEntity.createLatestPrices();
        return latestPricesDao.saveAll(allPrices);
    }

}
