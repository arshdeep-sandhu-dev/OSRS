package com.example.WikiApi.config;

import com.example.WikiApi.service.UpdateDatabase;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class AppStartup {
    @Autowired
    UpdateDatabase mappings;
    @EventListener(ApplicationReadyEvent.class)
    public void onReady() throws JsonProcessingException {
        mappings.AddItemsToDB();
        mappings.addLatestPricesToDB();
        System.out.println("Data initialization complete.");
    }

    @Scheduled(fixedDelay = 86_400_000, initialDelay = 86_400_000) // waits 24 hours after the previous run FINISHES
    public void addLatestPrices() throws JsonProcessingException {
        mappings.AddItemsToDB();
        System.out.println("Item addition complete.(24hr)");
        mappings.addLatestPricesToDB();
        System.out.println("Price update complete.(24hr)");

    }
    @Scheduled(fixedDelay = 29_000, initialDelay = 29_000) // waits 60s after the previous run FINISHES
    public void updatePrices() throws JsonProcessingException {
        mappings.updateItems();
        System.out.println("Data update complete.");
    }

}

