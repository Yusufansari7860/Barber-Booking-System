import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id)); 
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking ,removeBooking}}>
      {children}
    </BookingContext.Provider>
  );
};
