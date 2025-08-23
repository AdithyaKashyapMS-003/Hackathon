import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  // Initialize the translation hook
  const { t, i18n } = useTranslation();

  // Function to handle language changes
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-sm">
        <div className="text-xl font-bold">AgriGrow</div>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li className="hover:text-green-600 cursor-pointer">
            {t("nav_home")}
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            {t("nav_solutions")}
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            {t("nav_guides")}
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            {t("nav_community")}
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            {t("nav_help")}
          </li>
          <li>
            {/* Language Selector Dropdown */}
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
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {t("hero_title")}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            {t("hero_subtitle")}
          </h2>
          <p className="text-gray-600 text-lg">{t("hero_description")}</p>
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
          {t("explore_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{t("card1_title")}</h3>
            <p className="text-gray-600 text-sm mt-2">{t("card1_desc")}</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{t("card2_title")}</h3>
            <p className="text-gray-600 text-sm mt-2">{t("card2_desc")}</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{t("card3_title")}</h3>
            <p className="text-gray-600 text-sm mt-2">{t("card3_desc")}</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{t("card4_title")}</h3>
            <p className="text-gray-600 text-sm mt-2">{t("card4_desc")}</p>
          </div>

          <div className="bg-red-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{t("card5_title")}</h3>
            <p className="text-gray-600 text-sm mt-2">{t("card5_desc")}</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300 py-6 px-8 mt-auto w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left side text */}
          <div className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            <p>{t("footer_copyright", { year: new Date().getFullYear() })}</p>
            <p>
              {t("footer_permission")}
              <a href="mailto:info@agrigrow.com" className="text-blue-600">
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
