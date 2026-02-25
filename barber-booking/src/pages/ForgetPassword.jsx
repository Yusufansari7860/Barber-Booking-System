import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

function ForgetPassword() {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleReset = () => {
    if (!email || !newPassword || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = resetPassword(email, newPassword);

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-blue-50 to-white
      dark:from-gray-900 dark:to-gray-800 p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-800
          shadow-2xl rounded-3xl p-10 w-full max-w-md
          backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-8
          text-gray-800 dark:text-white">
          Reset Password
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* New Password */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          className="w-full mb-4 p-3 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="w-full mb-2 p-3 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Show Password Toggle */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>

          <span
            onClick={() => navigate("/login")}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Back to Login
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleReset}
          className="w-full py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Update Password
        </button>
      </motion.div>
    </div>
  );
}

export default ForgetPassword;