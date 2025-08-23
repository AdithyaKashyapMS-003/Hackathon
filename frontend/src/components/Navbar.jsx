// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 leading-none cursor-pointer">
          AgriGrow
        </Link>

        {/* Main Navbar Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/solutions" className="text-gray-600 font-medium hover:text-gray-900">Solutions</Link>
          <Link to="/guides" className="text-gray-600 font-medium hover:text-gray-900">Guides</Link>
          <Link to="/community" className="text-gray-600 font-medium hover:text-gray-900">Community</Link>
          <Link to="/help" className="text-gray-600 font-medium hover:text-gray-900">Help</Link>
        </div>

        {/* Right-side */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/dashboard" className="hidden sm:inline-block text-gray-600 font-medium hover:text-gray-900">
            Dashboard
          </Link>
          <Link to="/market-prices" className="hidden sm:inline-block text-gray-600 font-medium hover:text-gray-900">
            Market Prices
          </Link>

          {/* Show Sign In only if not signed in */}
          {!isSignedIn && (
            <Link
              to="/signin"
              className="py-2 px-4 border border-blue-500 rounded text-blue-500 font-medium hover:bg-blue-50 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
