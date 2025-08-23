import React, { useEffect, useState } from "react";

function FarmerDashboard() {
  const [cropTypes, setCropTypes] = useState([]);
  const [form, setForm] = useState({
    loanAmount: "",
    interest: "",
    tenure: "",
    cropType: "",
    landSize: "",
    location: "",
    expenses: "",
  });
  const [estimatedIncome, setEstimatedIncome] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch crop types from backend
    fetch("http://localhost:3000/api/healthdashboard/crop-types")
      .then((res) => res.json())
      .then(setCropTypes)
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setEstimatedIncome(null);
    try {
      const res = await fetch(
        "http://localhost:3000/api/healthdashboard/farmer-log",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            ...form,
            expenses: form.expenses
              ? [{ description: "General", amount: Number(form.expenses) }]
              : [],
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setEstimatedIncome(data.estimatedIncome);
      } else {
        setMessage(data.message || "Error calculating income.");
      }
    } catch {
      setMessage("Network error.");
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Hello, Farmer! 👋
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your friendly guide to government schemes, financial support, and more, all designed to help you thrive.
          </p>
        </div>

        {/* Key Schemes / Metrics */}
       {/* Key Schemes / Metrics */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
      PM-KISAN Samman Nidhi
    </h2>
    <p className="text-xl font-bold text-green-600">₹6,000 yearly</p>
    <p className="text-sm text-gray-500 mt-1">Direct support in 3 installments</p>
    <a
      href="https://pmkisan.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition"
    >
      Apply Now
    </a>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
      Kisan Credit Card (KCC)
    </h2>
    <p className="text-xl font-bold text-blue-600">Low-interest loans</p>
    <p className="text-sm text-gray-500 mt-1">Get up to ₹3 lakhs for crops</p>
    <a
      href="https://www.kisancreditcard.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition"
    >
      Apply Now
    </a>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
      PM Fasal Bima Yojana
    </h2>
    <p className="text-xl font-bold text-orange-600">Crop insurance</p>
    <p className="text-sm text-gray-500 mt-1">Protect your harvest with low premiums</p>
    <a
      href="https://pmfby.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-white bg-orange-600 px-4 py-2 rounded-xl hover:bg-orange-700 transition"
    >
      Apply Now
    </a>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
      Soil Health Card Scheme
    </h2>
    <p className="text-xl font-bold text-gray-800">Free soil testing</p>
    <p className="text-sm text-gray-500 mt-1">Unlock better yields with data</p>
    <a
      href="https://soilhealth.dac.gov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-white bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition"
    >
      Apply Now
    </a>
  </div>
</div>


        {/* Recent Updates Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Latest Updates
          </h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">PM-KISAN installment released (August 2025)</span>
                <span className="font-bold text-green-600">₹2,000 credited</span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">New subsidy on solar-powered pumps announced</span>
                <span className="font-bold text-blue-600">Up to 60% subsidy</span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">Crop insurance claim settlement update</span>
                <span className="font-bold text-green-600">₹12,000 approved</span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">Fertilizer subsidy increased for Kharif season</span>
                <span className="font-bold text-orange-600">Extra 15% support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Estimate Income Form */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Estimate Your Potential Income
          </h2>
          <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="number"
                name="loanAmount"
                placeholder="Loan Amount (₹)"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.loanAmount}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="interest"
                placeholder="Interest Rate (%)"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.interest}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="tenure"
                placeholder="Tenure (months)"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.tenure}
                onChange={handleChange}
                required
              />
              <select
                name="cropType"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.cropType}
                onChange={handleChange}
                required
              >
                <option value="">Select Crop Type</option>
                {cropTypes.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="landSize"
                placeholder="Land Size (acres)"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.landSize}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.location}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="expenses"
                placeholder="Total Expenses (optional)"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
                value={form.expenses}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-blue-600 transition transform duration-300 hover:scale-105"
              >
                Estimate Income
              </button>
            </form>
            {estimatedIncome !== null && (
              <div className="mt-8 p-4 bg-green-50 rounded-xl text-center">
                <p className="text-xl text-green-700 font-bold">
                  Estimated Income: ₹{estimatedIncome}
                </p>
              </div>
            )}
            {message && (
              <div className="mt-4 p-4 text-red-600 text-center">{message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;