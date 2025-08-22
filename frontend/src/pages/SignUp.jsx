import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic here
    alert("Sign up submitted!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Sign Up</h2>
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2 font-medium">Password</label>
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
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a href="/signin" className="text-blue-600 underline">Sign In</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;