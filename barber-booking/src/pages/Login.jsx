import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* your same UI here (no change needed visually) */}

      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600"
          alt="Barber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back
          </h1>
          <p className="text-lg text-gray-200">
            Your next perfect haircut is just a login away.
          </p>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center 
        bg-gradient-to-br from-blue-50 to-white 
        dark:from-gray-900 dark:to-gray-800 p-6">

        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 
          shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-8">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg border
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p
            onClick={() => navigate("/forget-password")}
            className="text-sm text-blue-600 hover:underline cursor-pointer mb-6 text-right"
          >
            Forget Password?
          </p>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full text-white font-semibold 
              bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
