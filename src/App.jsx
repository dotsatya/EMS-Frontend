import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/others/Header";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';

function App() {
  const { user, logout, loading } = useAuth();
  const [isDark, setDark] = useState(false);

  // console.log(user);
  const toggleTheme = () => {
    setDark(prev => !prev);
  };
  if (loading) return null;

  return (
    <div className={isDark ? "dark" : ""}>
      <ToastContainer />
      <div className="min-h-screen bg-gray-200 dark:bg-[#0b0b0b]">

        <Header
          user={user}
          handleLogOut={logout}
          empData={user?.role === 'employee' ? user : null}
          adminData={user?.role === 'admin' ? user : null}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />

        <Routes>

          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />


          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;