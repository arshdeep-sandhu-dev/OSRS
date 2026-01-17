package org.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "items")
public class Item {
    @Id
    @Column(name = "item_id")
    private Integer itemId;

    @Column(name = "members")
    private Boolean members;

    @Column(name = "high_alch")
    private Integer highAlch;

    @Column(name = "buy_limit")
    private Integer buyLimit;

    @Column(name = "item_name")
    private String itemName;
}

