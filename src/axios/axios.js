import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Create axios instance with default config
const axiosAuth = axios.create({
    withCredentials: true, // For cookies
    headers: {
        "Content-Type": "application/json",
    },
});

// Silent axios instance for token validation that doesn't trigger browser errors
const silentAxios = axios.create({
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    // Setting validateStatus to always return true prevents axios from treating
    // any status code as an error, so it won't show up as red in dev tools
    validateStatus: () => true,
});

export const refreshAccessTokenFn = async () => {
    const response = await axiosAuth.post(`${API_URL}/auth/refreshToken`);
    return response.data;
};

// Utility function to check if a token is valid
export const checkTokenValidity = async () => {
    const response = await silentAxios.post(`${API_URL}/auth/validateJWT`);
    return response.status === 200;
};

// Flag to prevent multiple redirects
let isRedirecting = false;

axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the request failed due to expired/invalid token
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await refreshAccessTokenFn(); // Refresh token using cookie
                return axiosAuth(originalRequest); // Retry original request silently
            } catch (refreshError) {
                // Prevent multiple redirects and errors
                if (!isRedirecting) {
                    isRedirecting = true;
                    window.location.href = "/signin";

                    // Return a resolved promise to prevent the error from propagating
                    return new Promise(() => {});
                }
                return Promise.reject(refreshError);
            }
        }

        // If not a token issue or already retried
        return Promise.reject(error);
    },
);

export default axiosAuth;
