import axios from "axios";

export const API_ADDRESS = "http://localhost:5000/api/";

export const PUBLIC_API = axios.create({
  baseURL: API_ADDRESS,
});

export const API = axios.create({
  baseURL: API_ADDRESS,
});

API.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
