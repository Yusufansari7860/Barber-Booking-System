import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import successSound from "../assets/success.mp3";

function PaymentPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { addBooking } = useContext(BookingContext);
    const [upiId, setUpiId] = useState(""); 
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    if(!state){
        return <h2 className="text-center mt-10">No booking found</h2>;
    }

    const handlePayment = () => {
        if(!upiId){
            alert("Please enter UPI ID");
            return;
        }

        setProcessing(true);

        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);

            const audio = new Audio(successSound);
            audio.play();
        
        const updateBooking = {
            ...state,
            paymentStatus: "Paid",
        };

        addBooking(updateBooking);
        setTimeout(() => {
            navigate("/my-bookings");
        },1500);

        }, 2000);
        
    };

    return (
  <div className="min-h-screen flex items-center justify-center
bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500
dark:from-purple-900 dark:via-indigo-900 dark:to-gray-900
transition-all duration-500">

    <div className="w-96 p-6 rounded-3xl shadow-2xl
bg-white dark:bg-gray-800
text-black dark:text-white
backdrop-blur-lg">
    <div className="flex items-center justify-center mb-6">
  <div className="px-4 py-1 rounded-full 
  bg-white dark:bg-gray-700 shadow-md">
    <span className="text-purple-600 font-bold text-lg">
      GPay
    </span>
  </div>
</div>

      {!success ? (
        <>
          {/* Profile Circle */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto rounded-full 
            bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center 
            justify-center text-2xl font-bold shadow-lg">
              {state.barberName.charAt(0)}
            </div>

            <h2 className="mt-4 text-lg font-semibold">
              Paying to {state.barberName}
            </h2>

            <p className="text-4xl font-bold mt-2 text-purple-600 dark:text-purple-400">
              ₹ {state.price}
            </p>
          </div>

          {/* UPI Input */}
          <input
            type="text"
            placeholder="Enter UPI ID (example@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full p-3 rounded-xl mb-4 border
            bg-white dark:bg-gray-700
            text-black dark:text-white
            border-gray-300 dark:border-gray-600
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-purple-600 to-indigo-600
  hover:from-purple-700 hover:to-indigo-700
  text-white transition duration-300 shadow-lg"
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </>
      ) : (
        /* Success Screen */
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full 
          bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
          flex items-center justify-center text-3xl">
            ✓
          </div>

          <h2 className="text-xl font-bold mt-4">
            Payment Successful
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            ₹ {state.price} paid to {state.barberName}
          </p>
        </div>
      )}

    </div>

  </div>
);
}

export default PaymentPage;