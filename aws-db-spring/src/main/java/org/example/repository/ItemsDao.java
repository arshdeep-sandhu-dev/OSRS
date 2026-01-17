package org.example.repository;

import org.example.entity.Items;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemsDao extends JpaRepository<Items, Integer> {


}
