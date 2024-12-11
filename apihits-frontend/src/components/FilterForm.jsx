import React, { useState } from "react";
import "../styles/FilterForm.css";

const FilterForm = ({ onFilter }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startTime || !endTime || !date) {
      alert("Please fill all fields");
      return;
    }
    onFilter({ startTime, endTime, date });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Start Time:
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </label>
      <label>
        End Time:
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;