// src/api/axios.ts
import axios from "axios";

const baseURl = import.meta.env.VITE_CORE_URL

const api = axios.create({
  baseURL: baseURl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
