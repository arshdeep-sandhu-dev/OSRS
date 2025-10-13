package com.example.WikiApi.service;

import com.example.WikiApi.entity.LatestPrices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@Service
public class UpdateItem {
    @Autowired
    CallWikiApi callWikiApi;
    @Autowired
    ObjectMapper mapper;

    public List<LatestPrices> createLatestPrices() throws JsonProcessingException {

        String json = callWikiApi.fetchLatestString();
        JsonNode root = mapper.readTree(json).get("data");
        List<LatestPrices> prices = new ArrayList<>();
        Iterator<String> fieldNames = root.fieldNames();

        while (fieldNames.hasNext()) {
            String key = fieldNames.next();
            JsonNode node = root.get(key);
            int itemId = Integer.parseInt(key);
            int highPrice = node.get("high").asInt();
            long highTime = node.get("highTime").asLong();
            int lowPrice = node.get("low").asInt();
            long lowTime = node.get("lowTime").asLong();
            long oneMonthAgoUnix = Instant.now().getEpochSecond() - (30L * 24 * 60 * 60);

            if (highTime < oneMonthAgoUnix && lowTime <oneMonthAgoUnix){
                continue;
            }
            LatestPrices price = new LatestPrices().builder()
                    .itemId(itemId)
                    .highPrice(highPrice)
                    .highTime(highTime)
                    .lowPrice(lowPrice)
                    .lowTime(lowTime)
                    .build();

            prices.add(price);
        }
        return prices;
    }
}
