package org.example.exceptions;

import org.example.entity.Items;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(JsonProcessingException.class)
    public List<Items> ItemNotParsedCorrectly(JsonProcessingException e) {
        return Collections.emptyList();
    }



}
