import { jwtDecode } from 'jwt-decode';

/**
 * Checks if the JWT token is expired
 * @param {string} token - The JWT token to check
 * @returns {boolean} - True if token is expired, false otherwise
 */
export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    
    // Check if token has expired
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true; // If there's an error decoding, treat as expired
  }
};

/**
 * Gets the remaining time until token expiration in milliseconds
 * @param {string} token - The JWT token to check
 * @returns {number} - Remaining time in milliseconds, or 0 if expired
 */
export const getTokenRemainingTime = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now(); // Current time in milliseconds
    const expirationTime = decodedToken.exp * 1000; // Convert token exp to milliseconds
    
    // Calculate remaining time
    const remainingTime = expirationTime - currentTime;
    
    return remainingTime > 0 ? remainingTime : 0;
  } catch (error) {
    console.error('Error decoding token:', error);
    return 0;
  }
};