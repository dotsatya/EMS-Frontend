import React, { createContext, useContext, useState, useEffect } from 'react';
import { socket } from '../socket';
import { isTokenExpired, getTokenRemainingTime } from '../utils/tokenUtils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle logout
  const logout = () => {
    socket.disconnect();
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    const handleUserUpdate = () => {
      if (savedUser && savedToken) {
        // Check if token is expired before setting user state
        if (isTokenExpired(savedToken)) {
          // Token is expired, clear storage and reset state
          localStorage.clear();
          setUser(null);
          setToken(null);
        } else {
          // Token is valid, set user state
          setUser(JSON.parse(savedUser));
          setToken(savedToken);
        }
      }
      setLoading(false);
    };

    handleUserUpdate();
  }, []);

  // Effect to handle token expiration check periodically
  useEffect(() => {
    let timeoutId;

    const scheduleLogout = () => {
      if (token) {
        // Clear any existing timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        const remainingTime = getTokenRemainingTime(token);

        // If token is already expired, logout immediately
        if (remainingTime <= 0) {
          logout();
          return;
        }

        // Schedule logout for when the token expires
        timeoutId = setTimeout(() => {
          logout();
          // Optionally show a notification that the session expired
          if (typeof window !== 'undefined') {
            alert('Your session has expired. Please log in again.');
          }
        }, remainingTime);
      }
    };

    scheduleLogout();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [token]);

  useEffect(() => {
    if (user?.id) {
      socket.connect();
      socket.on("connect", () => console.log("✅ Socket Connected:", socket.id));
      socket.emit("join", user.id)
      socket.on("connect_error", (err) => console.error("❌ Socket Error:", err.message));
    }
    return () => {
      socket.disconnect();
    };
  }, [user]);

  const login = (savedUser, savedToken) => {
    setUser(savedUser);
    setToken(savedToken);
  };


  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Easy Access Tool
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};