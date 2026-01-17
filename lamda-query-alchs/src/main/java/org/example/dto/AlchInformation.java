package org.example.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlchInformation {
    @Column(name = "item_id")
    private int itemId;
    @Column(name = "members")
    private boolean members;
    @Column(name = "high_alch")
    private int highAlch;
    @Column(name = "buy_limit")
    private int buyLimit;
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "high_price")
    private int highPrice;
    @Column(name = "high_time")
    private long highTime;
    @Column(name = "low_price")
    private int lowPrice;
    @Column(name = "low_time")
    private long lowTime;
    @Column(name = "profit")
    private int profit;
}
