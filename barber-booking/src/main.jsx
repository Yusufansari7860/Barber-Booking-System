import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookingProvider } from "./context/BookingContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";   

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   
      <AuthProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);