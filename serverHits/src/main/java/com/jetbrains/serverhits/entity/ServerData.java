package com.jetbrains.serverhits.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class ServerData {

    @Id
    private String serverName;
    private int totalHits;
    private int successfulHits;
    private int failedHits;
    private LocalDate date; // Date column
    private String time; // Time column

    // Getters and Setters
    public String getServerName() {
        return serverName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public int getTotalHits() {
        return totalHits;
    }

    public void setTotalHits(int totalHits) {
        this.totalHits = totalHits;
    }

    public int getSuccessfulHits() {
        return successfulHits;
    }

    public void setSuccessfulHits(int successfulHits) {
        this.successfulHits = successfulHits;
    }

    public int getFailedHits() {
        return failedHits;
    }

    public void setFailedHits(int failedHits) {
        this.failedHits = failedHits;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
