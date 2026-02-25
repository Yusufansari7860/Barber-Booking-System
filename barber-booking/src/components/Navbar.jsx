import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50
        backdrop-blur-lg bg-white/70 dark:bg-gray-900/70
        border-b border-gray-200 dark:border-gray-800
        shadow-lg px-6 py-4 flex justify-between items-center"
    >
      {/* LOGO */}
      <Link
        to="/"
        className="text-2xl font-extrabold
          bg-gradient-to-r from-blue-600 to-purple-600
          bg-clip-text text-transparent
          hover:scale-105 transition-transform duration-300"
      >
        BarberBook
      </Link>

      <div className="flex items-center space-x-6">

        {currentUser ? (
          <>
            {/* Welcome */}
            <span className="hidden sm:block font-medium text-gray-700 dark:text-gray-300">
              👋 {currentUser.name}
            </span>

            {/* My Bookings */}
            <NavItem to="/my-bookings" label="My Bookings" />

            {/* Admin Dashboard */}
            {currentUser.role === "admin" && (
              <NavItem to="/admin" label="Admin" special />
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center
                rounded-full bg-gray-200 dark:bg-gray-800
                hover:scale-110 transition duration-300"
            >
              {darkMode ? "☀" : "🌙"}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-red-500 to-red-600
                text-white hover:scale-105 transition duration-300 shadow-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavItem to="/login" label="Login" />
            <Link
              to="/register"
              className="px-4 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white hover:scale-105 transition duration-300 shadow-md"
            >
              Register
            </Link>
          </>
        )}

      </div>
    </motion.nav>
  );
}

function NavItem({ to, label, special }) {
  return (
    <Link
      to={to}
      className={`relative font-medium 
        ${special
          ? "text-purple-600 dark:text-purple-400"
          : "text-gray-700 dark:text-gray-300"}
        hover:text-blue-600 dark:hover:text-blue-400
        transition duration-300`}
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5
        bg-blue-600 transition-all duration-300
        group-hover:w-full"></span>
    </Link>
  );
}

export default Navbar;