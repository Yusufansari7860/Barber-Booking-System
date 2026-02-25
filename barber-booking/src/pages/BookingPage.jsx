import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext";

const barbers = [
    {
        id: 1,
        name: "Yusuf",
        shop: "Elite Cuts",
        services: [
            { name: "Haircut", price: "60" },
            { name: "Beard Trim", price: "30" },
            { name: "Shave", price: "40" },
        ]
    },
    {
        id: 2,
        name: "Aisha",
        shop: "Style Studio",
        services: [
            { name: "Haircut", price: "55" },
            { name: "Beard Trim", price: "25" },
            { name: "Shave", price: "35" },
        ]
    },
    {
        id: 3,
        name: "Omar",
        shop: "Barber's Den",
        services: [
            { name: "Haircut", price: "50" },
            { name: "Beard Trim", price: "20" },
            { name: "Shave", price: "30" },
        ]
    }
];

const timeslots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];


function BookingPage() {
    const { bookings,addBooking } = useContext(BookingContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    
    const barber = barbers.find((b) => b.id === parseInt(id));

    const [selectedService, setSelectedService] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    if (!barber) {
        return <h2 className="text-center mt-10">Barber not found</h2>
    }

    const handleBooking = () => {
        if (!selectedService || !selectedDate || !selectedTime) {
            alert("Please select all fields");
            return;
        }

        const alreadyBooked = bookings.find(
            (booking) =>
                booking.barberName === barber.name &&
                booking.date === selectedDate &&
                booking.time === selectedTime
        );

        if (alreadyBooked){
            alert("This time slot is already booked!");
            return;
        }

        if(!currentUser){
            alert("Please login first");
            navigate("/login");
            return;
        }
        
        const serviceDetails = barber.services.find((service) => service.name === selectedService);

        const newBooking = {
            id: Date.now(),
            userId: currentUser.id,
            barberName: barber.name,
            service: selectedService,
            price: serviceDetails.price,
            date: selectedDate,
            time: selectedTime,
            paymentStatus: "Pending",
        };
        
        navigate("/payment", { state: newBooking });
    };

    return (
        <div className="py-8">
            <div className="max-w-xl mx-auto 
  bg-white dark:bg-gray-800 
  p-8 rounded-2xl shadow-lg 
  transition-colors duration-300">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Book an Appointment with {barber.name}
                </h1>

                {/* Service Selection */}
                <label className="block mb-2 font-medium">Select Service</label>
                <select
                 className="w-full p-3 border rounded-lg mb-4
                   bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                 value={selectedService}
                 onChange={(e) => setSelectedService(e.target.value)}>
                    <option value="">
                        Choose Service
                    </option>
                    {barber.services.map((service, index) => (
                        <option key={index} value={service.name}>
                            {service.name} - ₹ {service.price}
                        </option>
                    ))}
                </select>
                {/* select Date */}
                <label className="block mb-2 font-medium">Select Date</label>
                <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full p-2 border rounded mb-4
                   bg-white dark:bg-gray-700 text-black border-gray-300 dark:border-gray-600 dark:text-white"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                {/* select Time */}
                <label className="block mb-2 font-medium">Select Time</label>
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {timeslots.map((time, index) => {

                        const isBooked = bookings.find(
                            (booking) => 
                                booking.barberName === barber.name &&
                                booking.date === selectedDate &&
                                booking.time === time
                        );
                    
                        return (
                        <button
                         key={index}
                         onClick={() => setSelectedTime(time)}
                         disabled={isBooked}
                         className={`p-2 rounded-lg border transition duration-200 
                            ${
                              isBooked
                                ? "bg-red-500 text-white cursor-not-allowed"
                                :selectedTime === time 
                                ? "bg-blue-600 text-white " 
                                : "bg-gray-100 dark:bg-gray-700 dark:text-white dark:text-gray-300"
                            }
                         `}
                        >
                            {time}
                        </button>
                    );
                })}
                </div>
                <button
                 onClick={handleBooking}
                 className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                 Confirm Booking
                </button>

            </div>

        </div>
    );
}

export default BookingPage;