import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE - IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600"
          alt="Barber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            Join Us Today
          </h1>
          <p className="text-lg text-gray-200">
            Create your account and book your next fresh look.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center 
        bg-gradient-to-br from-blue-50 to-white 
        dark:from-gray-900 dark:to-gray-800 p-6">

        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 
          shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-8 
            text-gray-800 dark:text-white">
            Register
          </h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-full text-white font-semibold 
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;