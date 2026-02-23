import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ darkMode, setDarkMode }) {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-950 
                    shadow-md 
                    px-6 py-4 
                    flex justify-between items-center 
                    transition-colors duration-500 
                    border-b dark:border-gray-800">

      {/* LOGO */}
      <Link
        to="/"
        className="text-xl font-bold 
                   text-blue-600 dark:text-blue-400"
      >
        BarberBook
      </Link>

      <div className="flex items-center">

        {currentUser ? (
          <>
            {/* Welcome */}
            <span className="mr-4 font-medium 
                             text-gray-800 dark:text-gray-200">
              Welcome, {currentUser.name}
            </span>

            {/* My Bookings */}
            <Link
              to="/my-bookings"
              className="mr-4 
                         text-gray-700 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400"
            >
              My Bookings
            </Link>

            {/* Admin */}
            {currentUser?.role === "admin" && (
              <Link
                to="/admin"
                className="mr-4 
                           text-purple-600 dark:text-purple-400
                           font-semibold 
                           hover:text-purple-800 dark:hover:text-purple-300"
              >
                Admin Dashboard
              </Link>
            )}

            {/* Dark Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mr-4 px-3 py-1 rounded 
                         bg-gray-200 dark:bg-gray-800
                         text-gray-800 dark:text-gray-200
                         transition"
            >
              {darkMode ? "☀" : "🌙"}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded 
                         hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <Link
              to="/login"
              className="mr-4 
                         text-gray-700 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400"
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-1 rounded 
                         hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
