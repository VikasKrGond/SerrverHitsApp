package com.jetbrains.serverhits.repository;


import com.jetbrains.serverhits.entity.ServerData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ServerDataRepository extends JpaRepository<ServerData, String> {

    @Query("SELECT s FROM ServerData s WHERE (:startTime IS NULL OR s.time >= :startTime) " +
            "AND (:endTime IS NULL OR s.time <= :endTime) " +
            "AND (:date IS NULL OR s.date = :date)")
    List<ServerData> findByFilters(
            @Param("startTime") String startTime,
            @Param("endTime") String endTime,
            @Param("date") LocalDate date
    );
}
