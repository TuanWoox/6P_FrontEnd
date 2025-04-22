// src/axios/axiosConfig.js
import axios from "axios";

// Create axios instance with default config
const axiosAuth = axios.create({
  withCredentials: true, // For cookies
  headers: {
    "Content-Type": "application/json",
  },
});
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Track if we're refreshing to avoid infinite loops
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Response interceptor for handling token refresh
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is not 401 or request has already been retried, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // If we're already refreshing, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => {
          return axiosAuth(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const response = await axios.post(
        `${API_URL}/auth/refreshToken`,
        {},
        {
          withCredentials: true,
        }
      );
      const { accessToken } = response.data;

      processQueue(null, accessToken);

      return axiosAuth(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError);
      return Promise.reject(refreshError);
    }
  }
);

export default axiosAuth;
