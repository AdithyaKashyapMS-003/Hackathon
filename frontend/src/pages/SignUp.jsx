import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import { useTranslation } from "react-i18next"; // 1. Import hook

function SignUp() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // 3. Set message to a key instead of a raw string
        setMessage("signup_success");
        setEmail("");
        setPassword("");
        setName("");
      } else {
        setMessage(data.message ? "signup_failed" : "signup_error_unknown");
      }
    } catch (err) {
      setMessage("signup_error_network");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700">
          {t("signup_title")}
        </h2>
        {message && (
          <div className="mb-4 text-center text-sm text-red-600">
            {t(message)}
          </div>
        )}
        <label className="block mb-2 font-medium">
          {t("signup_label_name")}
        </label>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block mb-2 font-medium">
          {t("signup_label_email")}
        </label>
        <input
          type="email"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2 font-medium">
          {t("signup_label_password")}
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
          {t("signup_button")}
        </button>
        <p className="mt-4 text-sm text-center">
          {t("signup_have_account")}{" "}
          <Link to="/signin" className="text-blue-600 underline">
            {t("signup_signin_link")}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
