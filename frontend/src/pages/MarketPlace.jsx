import React from "react";
import { useNavigate } from "react-router-dom";

function MarketPlace() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-yellow-700 text-center">Market Place</h1>
        <p className="text-gray-700 mb-8 text-center">
          Welcome to the Market Place! Choose an option below to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/marketplace/upload")}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Upload Product for Rental
          </button>
          <button
            onClick={() => navigate("/marketplace/rent")}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Rent Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;