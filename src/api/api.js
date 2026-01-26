import axios from "axios";
import { isTokenExpired } from "../utils/tokenUtils";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

// attach token automatically and check for expiration
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Check if token is expired before making the request
      if (isTokenExpired(token)) {
        // Clear the expired token and redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Redirect to login page
        window.location.href = "/login";

        // Return a rejected promise to prevent the request from proceeding
        return Promise.reject(new Error("Token has expired"));
      }

      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle 401 Unauthorized responses
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token might be invalid or expired, clear storage and redirect
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Show a notification about session expiry
      if (typeof window !== 'undefined') {
        alert('Your session has expired. Please log in again.');
      }

      // Redirect to login page
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default API;
