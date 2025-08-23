// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { isSignedIn } = useAuth();
    const { t } = useTranslation();
  const { i18n } = useTranslation();
    const handleLanguageChange = (e) => {
      i18n.changeLanguage(e.target.value);
    };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 leading-none cursor-pointer"
        >
          AgriGrow
        </Link>

        {/* 3. Replace hardcoded text with the t() function */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link
            to="/solutions"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_solutions")}
          </Link>
          <Link
            to="/guides"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_guides")}
          </Link>
          <Link
            to="/community"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_community")}
          </Link>
          <Link
            to="/help"
            className="text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_help")}
          </Link>
        </div>

        {/* Right-side */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div>
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="bg-gray-100 border-2 border-gray-300 rounded-md p-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="te">తెలుగు</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>

          <Link
            to="/dashboard"
            className="hidden sm:inline-block text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_dashboard")}
          </Link>
          <Link
            to="/market-place"
            className="hidden sm:inline-block text-gray-600 font-medium hover:text-gray-900"
          >
            {t("nav_market_place")}
          </Link>

          {/* Show Sign In only if not signed in */}
          {!isSignedIn && (
            <Link
              to="/signin"
              className="py-2 px-4 border border-blue-500 rounded text-blue-500 font-medium hover:bg-blue-50 transition"
            >
              {t("nav_signin")}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
