import React from "react";

function FarmerDashboard() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
            Financial Health Dashboard
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Get a comprehensive overview of your farm’s financial health, including income, expenses, and net profit.
          </p>
        </div>

        {/* Financial Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
              Total Income
            </h2>
            <p className="text-3xl font-bold text-green-600">
              ₹1,20,000
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
              Total Expenses
            </h2>
            <p className="text-3xl font-bold text-red-600">
              ₹80,000
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
              Subsidies Received
            </h2>
            <p className="text-3xl font-bold text-gray-800">
              ₹15,000
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">
              Net Profit
            </h2>
            <p className="text-3xl font-bold text-green-600">
              ₹55,000
            </p>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Recent Transactions
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex justify-between items-center py-2">
              <span>Sold wheat</span>
              <span className="font-semibold text-green-600">₹40,000</span>
            </li>
            <li className="flex justify-between items-center py-2 border-t border-gray-100">
              <span>Bought fertilizer</span>
              <span className="font-semibold text-red-600">₹5,000</span>
            </li>
            <li className="flex justify-between items-center py-2 border-t border-gray-100">
              <span>Received government subsidy</span>
              <span className="font-semibold text-green-600">₹10,000</span>
            </li>
            <li className="flex justify-between items-center py-2 border-t border-gray-100">
              <span>Purchased seeds</span>
              <span className="font-semibold text-red-600">₹3,000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;