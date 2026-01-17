package org.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.client.RestClient;
//import org.springframework.web.reactive.function.client.WebClient;

import java.net.http.HttpClient;
import java.time.Duration;

import static org.example.constants.Constants.OSRS_BASE_URL;

@Configuration
public class WebClientConfig {
//    @Bean
//    public WebClient webClient(WebClient.Builder builder) {
//        return builder.baseUrl(OSRS_BASE_URL)
//                .defaultHeader(
//                        "User-Agent",
//                        "OsrsTracker/1.0 (+arsh.sandhu.dev@gmail.com; personal-learning; item-flip-tracker)"
//                )
//                .build();
//    }
//    @Bean
//    public WebClient webClient(WebClient.Builder builder) {
//        return builder
//                .baseUrl(OSRS_BASE_URL)
//                .build();
//    }

    @Bean
    public RestClient restClient(RestClient.Builder b) {
        return b.baseUrl(OSRS_BASE_URL)
                .defaultHeader(
                        "User-Agent",
                        "OsrsTracker/1.0 (+arsh.sandhu.dev@gmail.com; personal-learning; item-flip-tracker)"
                )
                .build();
    }
}
