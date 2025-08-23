
// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaSeedling } from "react-icons/fa";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-100 border-b-2 border-green-300 shadow-lg">
      <div className="flex justify-between items-center py-4 px-6 sm:px-8 lg:px-12">

        {/* Left-side: Logo + Dashboard/Market */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-green-900 leading-none cursor-pointer">
            <FaSeedling className="mr-2 text-green-700 animate-bounce" />
            AgriGrow
          </Link>

          {/* Dashboard & Market */}
          <Link className="text-green-700 font-medium hover:text-green-900 transition" to="/dashboard">Dashboard</Link>
          <Link className="text-green-700 font-medium hover:text-green-900 transition" to="/market-place">Market Place</Link>
        </div>

        {/* Right-side: Main Links + Sign Up */}
        <div className="flex items-center space-x-8 sm:space-x-10">
          <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/solutions">Solutions</Link>
          <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/guides">Guides</Link>
          <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/community">Community</Link>
          <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/help">Help</Link>

          {/* Sign Up button */}
          {!isSignedIn && (
            <Link
              to="/signup"
              className="py-2 px-5 border border-green-600 rounded-full text-green-800 font-semibold hover:bg-green-200 transition flex items-center gap-1"
            >
              <FaLeaf /> Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;