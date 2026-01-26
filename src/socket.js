import { io } from "socket.io-client";

const backendUrl = import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:6969";

export const socket = io(backendUrl, {
  autoConnect: false,
  auth: {
    token: localStorage.getItem("token")
  }
});
