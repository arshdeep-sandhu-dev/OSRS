package org.example.service;

import org.example.entity.Items;
import org.example.entity.LatestPrices;
import org.example.repository.ItemsDao;
import org.example.repository.LatestPricesDao;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class UpdateDatabase {

    private static final Logger logger = LoggerFactory.getLogger(UpdateDatabase.class);

    @Autowired
    CreateEntity createEntity;
    @Autowired
    LatestPricesDao latestPricesDao;
    @Autowired
    ItemsDao itemDao;

    public int AddItemsToDB() throws JsonProcessingException {
        List<Items> allItems = createEntity.createItems();
        List<Items> savedItems = itemDao.saveAll(allItems);
        return savedItems.size();
    }

    public void addLatestPricesToDB() throws JsonProcessingException {
        List<LatestPrices> allPrices = createEntity.createLatestPrices();
        latestPricesDao.saveAll(allPrices);
    }

    public void updateItems() throws JsonProcessingException{
        List<LatestPrices> allPrices = createEntity.createLatestPrices();
        latestPricesDao.saveAll(allPrices);
    }

}
