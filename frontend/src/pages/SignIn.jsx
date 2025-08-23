import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("https://agrigrow-znib.onrender.com/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Sign in successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.message || "Sign in failed.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans antialiased py-20 px-4">
      <div className="w-full max-w-md">
        <div className="p-10 rounded-2xl shadow-xl bg-white border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center tracking-tight">
            Sign In
          </h2>

          {message && (
            <div
              className={`p-4 rounded-lg text-sm text-center mb-6 font-medium ${
                message.includes("successful")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold text-lg py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-black font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
