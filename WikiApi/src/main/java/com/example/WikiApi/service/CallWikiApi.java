package com.example.WikiApi.service;

import com.example.WikiApi.entity.Items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

import static com.example.WikiApi.constants.Constants.LATEST_URL;
import static com.example.WikiApi.constants.Constants.MAPPINGS_URL;

@Service
public class CallWikiApi {
    @Autowired
    WebClient webClient;

    public List<Items> fetchDataList() {
        return webClient.get()
                .uri(MAPPINGS_URL)
                .retrieve()
                .bodyToFlux(Items.class)
                .collectList()
                .block();
    }

    public String fetchLatestString() {
        return webClient.get().uri(LATEST_URL)
                .retrieve()
                .bodyToMono(String.class)
                .block();      // whole array as one String

    }

}
