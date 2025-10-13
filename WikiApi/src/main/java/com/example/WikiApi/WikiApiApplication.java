package com.example.WikiApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class WikiApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WikiApiApplication.class, args);
	}



}
