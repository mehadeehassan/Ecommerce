const DEFAULT_API_URL = "https://react-backend-62sn.onrender.com";

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || DEFAULT_API_URL
).replace(/\/$/, "");
