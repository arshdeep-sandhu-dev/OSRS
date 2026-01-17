package org.example.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "latest_prices")
public class LatestPrices {
    @Id
    @Column(name = "item_id")
    private int itemId;
    @Column(name = "high_price")
    @JsonProperty("high")
    private int highPrice;
    @Column(name = "high_time")
    private long highTime;
    @JsonProperty("low")
    @Column(name = "low_price")
    private int lowPrice;
    @Column(name = "low_time")
    private long lowTime;
}
