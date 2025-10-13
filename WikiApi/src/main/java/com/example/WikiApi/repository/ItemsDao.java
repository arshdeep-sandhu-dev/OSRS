package com.example.WikiApi.repository;

import com.example.WikiApi.entity.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ItemsDao extends JpaRepository<Items, Integer> {


}
