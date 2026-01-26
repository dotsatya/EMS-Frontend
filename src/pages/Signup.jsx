import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await signupUser({
        username,
        email,
        password,
        role,
      });

      alert(data.message); 
      // console.log("signupUser: ", data); // "Signup successful"
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };


  return (
    <div className="h-full pt-[2%] flex items-center justify-center px-4">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-md bg-white dark:bg-white/10 backdrop-blur-xl
                   border border-gray-200 dark:border-white/20
                   p-8 rounded-2xl shadow-xl"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Sign up for your account
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-white dark:bg-black/40
                       border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-white dark:bg-black/40
                       border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-white dark:bg-black/40
                       border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2"
          >
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-white dark:bg-black/40
                       border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter Password"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-white dark:bg-black/40
                       border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg
                     bg-gray-900 dark:bg-white
                     text-white dark:text-black
                     font-semibold text-lg
                     hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <span className="text-gray-900 dark:text-white cursor-pointer hover:underline">
            <Link to="/login">Log In</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
