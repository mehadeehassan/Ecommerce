import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "./apiConfig";

const axiosAdmin = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosAdmin.interceptors.request.use((config) => {
  const token = Cookies.get("adminToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosAdmin;
