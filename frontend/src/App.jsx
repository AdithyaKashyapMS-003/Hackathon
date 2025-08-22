import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-sm">
        <div className="text-xl font-bold">AgriGrow</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Solutions</li>
          <li className="hover:text-green-600 cursor-pointer">Guides</li>
          <li className="hover:text-green-600 cursor-pointer">Community</li>
          <li className="hover:text-green-600 cursor-pointer">Help</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Farming Made Simple
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            One place for all your farming problems
          </h2>
          <p className="text-gray-600 text-lg">
            AgriGrow helps farmers find solutions for crop health, market prices, 
            and weather updates — all in one place. No complex terms, just 
            simple and useful guidance.
          </p>
        </div>

        {/* Replace with your own image/illustration */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
            alt="Farmer illustration"
            className="w-80"
          />
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore AgriGrow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Crop Care</h3>
            <p className="text-gray-600 text-sm mt-2">
              Tips and solutions for crop issues.
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Market Prices</h3>
            <p className="text-gray-600 text-sm mt-2">
              Stay updated on mandi prices.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Weather Updates</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get real-time weather info.
            </p>
          </div>

          <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Govt Schemes</h3>
            <p className="text-gray-600 text-sm mt-2">
              Know about subsidies and benefits.
            </p>
          </div>

          <div className="bg-red-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Community</h3>
            <p className="text-gray-600 text-sm mt-2">
              Ask & learn from fellow farmers.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300 py-6 px-8 mt-auto w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left side text */}
          <div className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            <p>AgriGrow © {new Date().getFullYear()}. All rights reserved.</p>
            <p>
              Reproduction of materials is not permitted. For queries, contact{" "}
              <a
                href="mailto:info@agrigrow.com"
                className="text-blue-600"
              >
                info@agrigrow.com
              </a>
            </p>
          </div>

          {/* Right side buttons */}
          <div className="flex space-x-4">
            <a href="#" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


