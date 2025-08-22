import React from "react";

function FarmerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Farmer Financial Health Dashboard</h1>
      <p className="mb-6 text-lg">
        Get a comprehensive overview of your farm’s financial health, including income, expenses, subsidies, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-xl mb-2">Total Income</h2>
          <p className="text-2xl font-bold">₹1,20,000</p>
        </div>
        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-xl mb-2">Total Expenses</h2>
          <p className="text-2xl font-bold">₹80,000</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-xl mb-2">Subsidies Received</h2>
          <p className="text-2xl font-bold">₹15,000</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-xl mb-2">Net Profit</h2>
          <p className="text-2xl font-bold">₹55,000</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2">Recent Transactions</h2>
        <ul className="list-disc ml-6 text-base text-gray-700">
          <li>Sold wheat - ₹40,000</li>
          <li>Bought fertilizer - ₹5,000</li>
          <li>Received government subsidy - ₹10,000</li>
          <li>Purchased seeds - ₹3,000</li>
        </ul>
      </div>
    </div>
  );
}

export default FarmerDashboard;