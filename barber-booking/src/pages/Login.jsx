import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        if (!email || !password){
            alert("Please fill in all fields!");
            return;
        }

        const success = login(email,password);
        if (success){
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white p-2 rounded "
                >
                    Login
                </button>

            </div>

        </div>
    );
}


export default Login;