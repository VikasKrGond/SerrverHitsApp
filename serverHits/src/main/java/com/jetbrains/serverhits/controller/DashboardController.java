package com.jetbrains.serverhits.controller;

import com.jetbrains.serverhits.entity.ServerData;
import com.jetbrains.serverhits.service.ServerDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173") // Replace with your frontend's origin
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final ServerDataService service;

    public DashboardController(ServerDataService service) {
        this.service = service;
    }

    @GetMapping
    public List<ServerData> getServerData(
            @RequestParam(required = false) String startTime,
            @RequestParam(required = false) String endTime,
            @RequestParam(required = false) LocalDate date
    ) {
        if (startTime != null || endTime != null || date != null) {
            return service.getFilteredData(startTime, endTime, date);
        }
        return service.getAllServerData();
    }
}
