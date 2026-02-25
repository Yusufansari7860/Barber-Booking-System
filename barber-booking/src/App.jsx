import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import BarberList from "./pages/BarberList";
import BarberDetails from "./pages/BarberDetails";
import BookingPage from "./pages/BookingPage";
import MyBooking from "./pages/MyBooking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentPage from "./pages/PaymentPage";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Navbar from "./components/Navbar";
import ForgetPassword from "./pages/ForgetPassword";


function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen 
      bg-white dark:bg-gray-900 
      text-gray-800 dark:text-gray-200 
      transition-colors duration-500"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />

            <Route
              path="/barbers"
              element={
                <AnimatedPage>
                  <BarberList />
                </AnimatedPage>
              }
            />

            <Route
              path="/barbers/:id"
              element={
                <AnimatedPage>
                  <BarberDetails />
                </AnimatedPage>
              }
            />

            <Route
              path="/book/:id"
              element={
                <AnimatedPage>
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                </AnimatedPage>
              }
            />

            <Route
              path="/my-bookings"
              element={
                <AnimatedPage>
                  <ProtectedRoute>
                    <MyBooking />
                  </ProtectedRoute>
                </AnimatedPage>
              }
            />

            <Route
              path="/login"
              element={
                <AnimatedPage>
                  <Login />
                </AnimatedPage>
              }
            />

            <Route
              path="/register"
              element={
                <AnimatedPage>
                  <Register />
                </AnimatedPage>
              }
            />

            <Route
              path="/admin"
              element={
                <AnimatedPage>
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                </AnimatedPage>
              }
            />

            <Route
              path="/payment"
              element={
                <AnimatedPage>
                  <PaymentPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/forget-password"
              element={<ForgetPassword />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;