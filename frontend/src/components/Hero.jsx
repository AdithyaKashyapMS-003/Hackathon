import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleLanguageChange = (e) => {
  i18n.changeLanguage(e.target.value);
      };
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
              {t("hero_title")}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              {t("hero_subtitle")}
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0">
              {t("hero_description")}
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
               {t("start_your_journey")}
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="/assets/image.png" // 🔹 change path to your actual image
              alt="Farming illustration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
