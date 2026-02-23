import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext";

function MyBooking() {
    const { bookings, removeBooking } = useContext(BookingContext);
    const { currentUser } = useContext(AuthContext);

    const userBookings = bookings.filter(
        (booking) => booking.userId === currentUser?.id
    );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-6 text-center">
                My Bookings
            </h1>

            {userBookings.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-400">
                    No bookings yet.
                </p>
            ) : (
                <div className="max-w-2xl mx-auto space-y-4">
                    {userBookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300"
                        >
                            <h2 className="font-semibold text-lg">
                                {booking.barberName}
                            </h2>
                            <p>Service: {booking.service}</p>
                            <p>Date: {booking.date}</p>
                            <p>Time: {booking.time}</p>

                            <button
                                onClick={() => removeBooking(booking.id)}
                                className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                            >
                                Cancel Booking
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyBooking;
