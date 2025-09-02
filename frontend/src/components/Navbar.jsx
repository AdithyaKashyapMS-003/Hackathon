// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaSeedling, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { isSignedIn } = useAuth();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-100 border-b-2 border-green-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-lg sm:text-2xl font-bold text-green-900 leading-none cursor-pointer"
          >
            <FaSeedling className="mr-2 text-green-700 animate-bounce" />
            <span>AgriGrow</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link className="text-green-700 font-medium hover:text-green-900 transition" to="/dashboard">
              {t("nav_dashboard")}
            </Link>
            <Link className="text-green-700 font-medium hover:text-green-900 transition" to="/market-place">
              {t("nav_market_place")}
            </Link>
            <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/solutions">
              {t("nav_solutions")}
            </Link>
            <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/guides">
              {t("nav_guides")}
            </Link>
            <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/community">
              {t("nav_community")}
            </Link>
            <Link className="text-green-800 font-medium hover:text-green-900 transition" to="/help">
              {t("nav_help")}
            </Link>
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="bg-gray-100 border-2 border-gray-300 rounded-md p-1 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 min-w-[80px] sm:min-w-[100px]"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="te">తెలుగు</option>
              <option value="ta">தமிழ்</option>
            </select>

            {/* Sign Up Button - Desktop */}
            {!isSignedIn && (
              <Link
                to="/signup"
                className="hidden lg:flex py-2 px-4 border border-green-600 rounded-full text-green-800 font-semibold hover:bg-green-200 transition items-center gap-1"
              >
                <FaLeaf /> {t("signup_button")}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-green-700 hover:text-green-900 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-green-50 border-t border-green-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link
                className="text-green-700 font-medium hover:text-green-900 transition px-4 py-2"
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_dashboard")}
              </Link>
              <Link
                className="text-green-700 font-medium hover:text-green-900 transition px-4 py-2"
                to="/market-place"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_market_place")}
              </Link>
              <Link
                className="text-green-800 font-medium hover:text-green-900 transition px-4 py-2"
                to="/solutions"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_solutions")}
              </Link>
              <Link
                className="text-green-800 font-medium hover:text-green-900 transition px-4 py-2"
                to="/guides"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_guides")}
              </Link>
              <Link
                className="text-green-800 font-medium hover:text-green-900 transition px-4 py-2"
                to="/community"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_community")}
              </Link>
              <Link
                className="text-green-800 font-medium hover:text-green-900 transition px-4 py-2"
                to="/help"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav_help")}
              </Link>
              {!isSignedIn && (
                <Link
                  to="/signup"
                  className="mx-4 mt-2 py-2 px-4 border border-green-600 rounded-full text-green-800 font-semibold hover:bg-green-200 transition flex items-center justify-center gap-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaLeaf /> {t("signup_button")}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;