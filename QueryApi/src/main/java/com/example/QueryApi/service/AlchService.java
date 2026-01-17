package com.example.QueryApi.service;

import com.example.QueryApi.dto.AlchInformation;
import com.example.QueryApi.dto.ItemMappings;
import com.example.QueryApi.repository.AlchQueryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlchService {

    @Autowired
    AlchQueryDao alchQueryDao;

    public List<AlchInformation> getAlchInformation(int pageId) {
        return alchQueryDao.getTop50AlchProfits(pageId*25).stream()
            .map(row -> AlchInformation.builder()
                .itemId(((Number) row[0]).intValue())
                .members((Boolean) row[1])
                .highAlch(((Number) row[2]).intValue())
                .buyLimit(((Number) row[3]).intValue())
                .itemName((String) row[4])
                .highPrice(((Number) row[5]).intValue())
                .highTime(((Number) row[6]).longValue())
                .lowPrice(((Number) row[7]).intValue())
                .lowTime(((Number) row[8]).longValue())
                .profit(((Number) row[9]).intValue())
                .build())
            .collect(Collectors.toList());
    }

    public List<ItemMappings> getItemMappings() {
        return alchQueryDao.getItemIdAndNames().stream()
            .map(row -> ItemMappings.builder()
                .id(((Number) row[0]).intValue())
                .name((String) row[1])
                .build())
            .collect(Collectors.toList());
    }

}
