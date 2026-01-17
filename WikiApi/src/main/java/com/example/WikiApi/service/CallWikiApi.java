package com.example.WikiApi.service;

import com.example.WikiApi.entity.Items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

import static com.example.WikiApi.constants.Constants.LATEST_URL;
import static com.example.WikiApi.constants.Constants.MAPPINGS_URL;

@Service
public class CallWikiApi {
    @Autowired
    RestClient restClient;
    public List<Items> fetchDataList() {
        return restClient.get()
                .uri(MAPPINGS_URL)
                .retrieve()
                .body(new ParameterizedTypeReference<List<Items>>() {});

    }

    public String fetchLatestString() {
        return restClient.get()
                .uri(LATEST_URL)
                .retrieve()
                .body(String.class);

    }

}
