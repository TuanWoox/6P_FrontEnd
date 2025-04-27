// src/axios/axiosConfig.js
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;
// Create axios instance with default config
const axiosAuth = axios.create({
  withCredentials: true, // For cookies
  headers: {
    "Content-Type": "application/json",
  },
});
export const refreshAccessTokenFn = async () => {
  const response = await axiosAuth.post(`${API_URL}/auth/refreshToken`);
  return response.data;
};
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshAccessTokenFn(); // This should refresh token using cookies
        return axiosAuth(originalRequest); // Retry with new cookie
      } catch (refreshError) {
        // Optional: redirect to login
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosAuth;