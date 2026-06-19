import axios from "axios";
import Cookies from "js-cookie";

const axiosAdmin = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosAdmin.interceptors.request.use((config) => {
  const token = Cookies.get("adminToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosAdmin;
