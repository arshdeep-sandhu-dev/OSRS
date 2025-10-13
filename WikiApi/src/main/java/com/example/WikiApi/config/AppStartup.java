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

    @Scheduled(fixedDelay = 60_000, initialDelay = 60_000) // waits 60s after the previous run FINISHES
    public void updatePrices() throws JsonProcessingException {
        mappings.updateItems();
        System.out.println("Data update complete.");
    }

}

