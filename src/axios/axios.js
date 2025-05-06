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

// Use a promise to prevent multiple refresh calls
let refreshTokenPromise = null;
// Flag to track if we need to redirect to signin
let redirectRequired = false;

export const refreshAccessTokenFn = async () => {
    try {
        const response = await axiosAuth.post(`${API_URL}/auth/refreshToken`);
        return response.data;
    } catch (error) {
        redirectRequired = true;
        throw error; // Propagate the error
    }
};

// Utility function to check if a token is valid
export const checkTokenValidity = async () => {
    const response = await silentAxios.post(`${API_URL}/auth/validateJWT`);
    return response.status === 200;
};

// Function to handle redirection to signin
const redirectToSignIn = () => {
    // Only redirect once
    if (!redirectRequired) {
        redirectRequired = true;
        window.location.href = "/signin";
    }
};

axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the request failed due to expired/invalid token and we haven't tried to refresh yet
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // If already refreshing, wait for that promise instead of creating a new one
                if (!refreshTokenPromise) {
                    refreshTokenPromise = refreshAccessTokenFn();
                }

                await refreshTokenPromise.finally(() => {
                    // Reset the promise after it resolves or rejects
                    refreshTokenPromise = null;
                });

                // If we successfully refreshed the token, retry the original request
                return axiosAuth(originalRequest);
            } catch (refreshError) {
                // If refresh failed and we need to redirect
                if (redirectRequired) {
                    redirectToSignIn();
                    // Return a never-resolving promise to prevent error propagation
                    return new Promise(() => {});
                }
                return Promise.reject(refreshError);
            }
        }

        // Handle the case where the refresh token itself is invalid/deleted
        if (
            error.response?.status === 401 &&
            (error.config.url === `${API_URL}/auth/refreshToken` ||
                error.response?.data?.message?.includes("refresh token"))
        ) {
            redirectToSignIn();
            // Return a never-resolving promise to prevent error propagation
            return new Promise(() => {});
        }

        // If not a token issue or already retried
        return Promise.reject(error);
    },
);

export default axiosAuth;
