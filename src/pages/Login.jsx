import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const { setUser, setToken } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await loginUser(email, password);
            localStorage.setItem("token", resp.token);
            localStorage.setItem("user", JSON.stringify(resp.user));
            setUser(resp.user);
            setToken(resp.token);

            // Redirect to home page after successful login
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid email or password");
        }
    };

    return (
        <div className="h-full pt-[6%] flex items-center justify-center  px-4">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full max-w-md bg-white dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 p-8 rounded-2xl shadow-xl"
            >
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                    LogIn to your account
                </p>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg
                            bg-white dark:bg-black/40
                            border border-gray-300 dark:border-gray-700
                            text-gray-900 dark:text-white
                            placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                        className="w-full px-4 py-3 rounded-lg
                            bg-white dark:bg-black/40
                            border border-gray-300 dark:border-gray-700
                            text-gray-900 dark:text-white
                            placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {/* Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg
                            bg-gray-900 dark:bg-white
                            text-white dark:text-black
                            font-semibold text-lg
                            hover:bg-gray-800 dark:hover:bg-gray-200
                            transition"
                >
                    LogIn
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <span className="text-gray-900 dark:text-white cursor-pointer hover:underline">
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
