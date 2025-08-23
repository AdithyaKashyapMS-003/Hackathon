import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Signin() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setIsSignedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSignedIn(true);
        // 3. Set message to a key instead of a raw string
        setMessage("signin_success");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.message ? "signin_failed" : "signin_error_unknown");
      }
    } catch (err) {
      setMessage("signin_error_network");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700">
          {t("signin_title")}
        </h2>
        {message && (
          <div className="mb-4 text-center text-sm text-red-600">
            {t(message)}
          </div>
        )}
        <label className="block mb-2 font-medium">
          {t("signin_label_email")}
        </label>
        <input
          type="email"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2 font-medium">
          {t("signin_label_password")}
        </label>
        <input
          type="password"
          className="w-full mb-6 px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {t("signin_button")}
        </button>
      </form>
    </div>
  );
}

export default Signin;
