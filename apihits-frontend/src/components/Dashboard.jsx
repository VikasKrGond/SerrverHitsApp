import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterForm from "./FilterForm";

const Dashboard = () => {
  const [serverData, setServerData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (filters = {}) => {
    try {
      setLoading(true);
      let url = "http://localhost:8080/api/dashboard"; // Replace with your Spring Boot API endpoint
      const { startTime, endTime, date } = filters;
      if (startTime || endTime || date) {
        const params = new URLSearchParams();
        if (startTime) params.append("startTime", startTime);
        if (endTime) params.append("endTime", endTime);
        if (date) params.append("date", date);
        url += `?${params.toString()}`;
      }
      const response = await axios.get(url);
      setServerData(response.data); // API response
    } catch (error) {
      console.error("Error fetching data:", error);
      setServerData([]); // Clear data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
          * {
          text-align: center;
            color: black; /* Set all text color to black */
          }
          .dashboard {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .dashboard h1 {
            text-align: center;
          }
          .dashboard button {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .dashboard button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
          }
          .dashboard-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .dashboard-table th {
            background-color: #007bff;
            color: white;
            padding: 12px 15px;
            text-align: left;
            border: 1px solid #ddd;
          }
          .dashboard-table td {
            padding: 12px 15px;
            text-align: left;
            border: 1px solid #ddd;
          }
          .dashboard-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          .dashboard-table tr:hover {
            background-color: #f1f1f1;
          }
        `}
      </style>
      <div className="dashboard">
        <h1>Server API Hits Dashboard</h1>
        <button onClick={() => fetchData()} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
        <FilterForm onFilter={fetchData} />
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Server Name</th>
              <th>Total Hits</th>
              <th>Successful Hits</th>
              <th>Failed Hits</th>
            </tr>
          </thead>
          <tbody>
            {serverData.length > 0 ? (
              serverData.map((server, index) => (
                <tr key={index}>
                  <td>{server.serverName}</td>
                  <td>{server.totalHits}</td>
                  <td>{server.successfulHits}</td>
                  <td>{server.failedHits}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;