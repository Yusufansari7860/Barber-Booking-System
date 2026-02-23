import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import BarberList from './pages/BarberList';
import BarberDetails from './pages/BarberDetails';
import BookingPage from './pages/BookingPage';
import MyBooking from './pages/MyBooking';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  const [count, setCount] = useState(0)
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
    <BrowserRouter>
      <div className="min-h-screen 
                bg-white dark:bg-gray-900 
                text-gray-800 dark:text-gray-200 
                transition-colors duration-500">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barbers" element={<BarberList />} />
        <Route path="/barbers/:id" element={<BarberDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route
         path="/my-bookings"
         element={
          <ProtectedRoute>
            <MyBooking />
          </ProtectedRoute>
         }
        />

        <Route
          path="/booking/:id"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
