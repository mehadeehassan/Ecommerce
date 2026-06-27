import { API_BASE_URL } from "./apiConfig";

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}/uploads/${imagePath}`;
};
