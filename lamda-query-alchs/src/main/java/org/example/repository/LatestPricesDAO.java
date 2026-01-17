package org.example.repository;

import org.example.entity.LatestPrices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LatestPricesDAO extends JpaRepository<LatestPrices, Integer> {
    @Query(

        value = "SELECT new LatestPrices(lp.itemId, lp.highPrice, lp.highTime, lp.lowPrice, lp.lowTime) " +
                    "FROM LatestPrices lp " +
                    "WHERE lp.itemId IN :itemIds"
    )
    public List<LatestPrices> findLatestPricesByItemIds(List<Integer> itemIds);
}
