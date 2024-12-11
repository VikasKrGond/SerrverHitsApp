package com.jetbrains.serverhits.service;
import com.jetbrains.serverhits.entity.ServerData;
import com.jetbrains.serverhits.repository.ServerDataRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ServerDataService {

    private final ServerDataRepository repository;

    public ServerDataService(ServerDataRepository repository) {
        this.repository = repository;
    }

    public List<ServerData> getFilteredData(String startTime, String endTime, LocalDate date) {
        return repository.findByFilters(startTime, endTime, date);
    }

    public List<ServerData> getAllServerData() {
        return repository.findAll();
    }
}
