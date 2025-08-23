import React from "react";

function Guides() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Our Guides
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated guides to master the platform and enhance your farming practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Getting Started with AgriGrow</h3>
            <p className="text-sm text-gray-600">
              A quick and easy guide for new users to get started with our platform.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Best Practices for Sustainable Farming</h3>
            <p className="text-sm text-gray-600">
              Learn about effective and eco-friendly farming techniques.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">How to Join the Community</h3>
            <p className="text-sm text-gray-600">
              Connect with fellow farmers and share your knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guides;