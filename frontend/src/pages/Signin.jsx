import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Signin() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();
  const { setIsSignedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    try {
      const res = await fetch("https://agrigrow-znib.onrender.com/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSignedIn(true);
        setMessage("signin_success");
        setMessageType("success");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.message ? "signin_failed" : "signin_error_unknown");
        setMessageType("error");
      }
    } catch (err) {
      setMessage("signin_error_network");
      setMessageType("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans antialiased py-20 px-4">
      <div className="w-full max-w-md">
        <div className="p-10 rounded-2xl shadow-xl bg-white border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center tracking-tight">
            {/* Using component-specific key */}
            {t("signin_title")}
          </h2>

          {message && (
            <div
              className={`p-4 rounded-lg text-sm text-center mb-6 font-medium ${
                messageType === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {t(message)}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                {/* Using component-specific key */}
                {t("signin_label_email")}
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-2">
                {/* Using component-specific key */}
                {t("signin_label_password")}
              </label>
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
              {/* Using component-specific key */}
              {t("signin_button")}
            </button>
          </form>

          <p className="mt-8 text-sm text-center text-gray-500">
            {t("signin_no_account")}{" "}
            <Link to="/signup" className="text-black font-bold hover:underline">
              {/* Using the key from the SignUp page for consistency */}
              {t("signup_title")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
