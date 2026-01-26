import React, { useState, useEffect } from "react";
import { Sun, Moon } from "react-feather";

const Header = ({
  user,
  handleLogOut,
  empData,
  adminData,
  toggleTheme,
  isDark
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine the name based on user role
  let displayName = "";
  // console.log(user);
  if (user) {
    if (user.role === "admin" && adminData) {
      displayName = `Admin ${user.username}`;
    } else if (user.role === "employee" && empData) {
      displayName = `Employee ${user.username}`;
    }
  }

  return (
    <header
      className={`p-2 pb-4 px-6 sticky top-2 z-40 w-[90%] mx-auto flex items-center justify-between
        ${scrolled
          ? "p-3 shadow-md rounded-2xl bg-linear-to-b from-white/10 to-white/5 dark:from-black/40 dark:to-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-black/30"
          : "border-b border-gray-300 dark:border-gray-400/50"
        }
      `}
    >
      <div className="flex flex-col leading-tight">
        {!user ? (
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Employee Management System
          </h1>
        ) : (
          <>
            <h2 className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
              Welcome,
            </h2>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {displayName}
            </h1>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTheme()}
          className="
            w-10 h-10 rounded-full
            flex items-center justify-center
            bg-white dark:bg-slate-800
            border border-gray-300 dark:border-slate-700
            shadow-sm hover:shadow-md
            transition active:scale-95
          "
        >
          {isDark ? (
            <Sun
              size={18}
              className="text-yellow-400 rotate-0 transition-transform duration-300"
            />
          ) : (
            <Moon
              size={18}
              className="text-yellow-400 transition-transform duration-300"
            />
          )}
        </button>

        {user ? (
          <button
            className="ml-3 px-2 py-1 font-bold rounded bg-red-500 dark:bg-red-100 text-red-50 dark:text-red-600 hover:bg-red-400 hover:dark:bg-red-300 transition"
            onClick={() => {
              handleLogOut();
            }}
          >
            {" "}
            Log Out
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
