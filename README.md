# SerrverHitsApp
# Server API Hits Dashboard Project

This project is a full-stack web application that displays API hits for two different servers (`112` and `113`). It provides a user-friendly dashboard with filtering options, a refresh button, and the ability to handle data from both live APIs and fallback dummy data. Below is the detailed documentation for the project.

---

## **Frontend**

The frontend is built using **React.js** and styled using inline CSS. It fetches data from a Spring Boot API and displays it in a tabular format.

### **Features**
- Displays server hits with total hits, successful hits, and failed hits.
- Dynamic filtering options based on date and time.
- Refresh button to reload the data.
- Fallback mechanism to display dummy data in case the API fails.


API Endpoints

	1.	GET /api/dashboard
-Fetches server data with optional filtering by date and time.
-Query Parameters:
	-• startTime: Start time for filtering.
	-• endTime: End time for filtering.
	-• date: Specific date for filtering.
-Important Files

ServerData.java
-Defines the entity for ServerData mapped to the database table.
```
@Entity
public class ServerData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serverName;
    private Integer totalHits;
    private Integer successfulHits;
    private Integer failedHits;
    private LocalDate date;
    private LocalTime time;
    // Getters and Setters
}
```
ServerDataRepository.java
-Defines a custom query with optional filtering.
```
@Repository
public interface ServerDataRepository extends JpaRepository<ServerData, Long> {
    @Query("SELECT s FROM ServerData s WHERE (:startTime IS NULL OR s.time >= :startTime) " +
            "AND (:endTime IS NULL OR s.time <= :endTime) " +
            "AND (:date IS NULL OR s.date = :date)")
    List<ServerData> findFilteredData(@Param("startTime") LocalTime startTime, 
                                      @Param("endTime") LocalTime endTime, 
                                      @Param("date") LocalDate date);
}
```

ServerDataController.java
-Handles API requests and calls the repository for data.
```
@RestController
@RequestMapping("/api")
public class ServerDataController {
    @Autowired
    private ServerDataRepository repository;
    @GetMapping("/dashboard")
    public List<ServerData> getDashboardData(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime startTime,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime endTime,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return repository.findFilteredData(startTime, endTime, date);
    }
}
```
## **How to Run Backend**
	-1.Navigate to the apihits-backend directory.
	-2.Set up a MySQL database and configure application.properties:
```
spring.datasource.url=jdbc:mysql://localhost:3306/apihits_db
spring.datasource.username=<DB_USERNAME>
spring.datasource.password=<DB_PASSWORD>
```
-3.Build and run the application:
    `mvn spring-boot:run`
-4.The API will be available at `http://localhost:8080`

## **Integration**
-To integrate the frontend with the backend:
	-1.	Update the API endpoint in Dashboard.jsx:
    `let url = "http://localhost:8080/api/dashboard" `
    	-2.	Ensure the backend is running `(http://localhost:8080)` before starting the frontend.
	-3.	Use the Refresh button or filtering form to interact with the backend API.
