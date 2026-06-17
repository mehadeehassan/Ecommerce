import axios from "axios";
import Cookies from "js-cookie";

const axiosAdmin = axios.create({
  baseURL: "http://localhost:3000",
});

axiosAdmin.interceptors.request.use((config) => {
  const token = Cookies.get("adminToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosAdmin;
