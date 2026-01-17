package org.example.repository;

import org.example.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlchQueryDao extends JpaRepository<Item, Integer> {


    @Query(
            value = "SELECT " +
                    "i.item_id, " +
                    "i.members, " +
                    "i.high_alch, " +
                    "i.buy_limit, " +
                    "i.item_name, " +
                    "lp.high_price, " +
                    "lp.high_time, " +
                    "lp.low_price, " +
                    "lp.low_time, " +
                    "(i.high_alch - lp.high_price - nature_rune.high_price) AS profit " +
                    "FROM items i " +
                    "JOIN latest_prices lp ON i.item_id = lp.item_id " +
                    "JOIN latest_prices nature_rune ON nature_rune.item_id = 561 " +
                    "WHERE i.high_alch > (lp.high_price + nature_rune.high_price) " +
                    "AND lp.high_time >= (UNIX_TIMESTAMP() - 600) " +
                    "ORDER BY profit DESC ",
            nativeQuery = true
    )
    List<Object[]> getTop50AlchProfits(int offset);
    @Query(
            value ="select i.item_id, i.item_name from latest_prices lp " +
                    "join items i on i.item_id = lp.item_id",
            nativeQuery = true

    )
    List<Object[]> getItemIdAndNames();
}