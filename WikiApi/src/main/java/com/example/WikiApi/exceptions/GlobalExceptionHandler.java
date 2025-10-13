package com.example.WikiApi.exceptions;

import com.example.WikiApi.entity.Items;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(com.fasterxml.jackson.core.JsonProcessingException.class)
    public List<Items> ItemNotParsedCorrectly(JsonProcessingException e) {
        return Collections.emptyList();
    }



}
