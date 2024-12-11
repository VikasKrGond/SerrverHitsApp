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

---

### **Folder Structure**

API Endpoints

	1.	GET /api/dashboard
Fetches server data with optional filtering by date and time.
Query Parameters:
	•	startTime: Start time for filtering.
	•	endTime: End time for filtering.
	•	date: Specific date for filtering.

Important Files

ServerData.java

Defines the entity for ServerData mapped to the database table.