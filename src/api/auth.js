import { toast } from "react-toastify";
import API from "./api";

// SIGNUP
export const signupUser = async ({ username, email, password, role }) => {
  const res = await API.post("/auth/signup", {
    username,
    email,
    password,
    role,
  });

  return res.data;
};

// LOGIN
export const loginUser = async (email, password) => {
  const res = await API.post("/auth/login", { email, password });
  if (res.success) {
    toast.success("Login successful");
  }
  return res.data;
};
