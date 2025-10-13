package com.example.WikiApi.repository;

import com.example.WikiApi.entity.LatestPrices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LatestPricesDao extends JpaRepository<LatestPrices, Integer> {
}
