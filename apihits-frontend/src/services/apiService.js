import axios from "axios";

const API_BASE_URL = "https://api.example.com";

export const fetchServerHits = async (filters = {}) => {
  const { startTime, endTime, date } = filters;
  let url = `${API_BASE_URL}/server-hits`;
  if (startTime && endTime && date) {
    url += `?startTime=${startTime}&endTime=${endTime}&date=${date}`;
  }
  return axios.get(url);
};