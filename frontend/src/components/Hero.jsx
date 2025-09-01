import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleLanguageChange = (e) => {
  i18n.changeLanguage(e.target.value);
      };
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-white"></div>

        {/* Wavy Animated Grass */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#86efac"
              fillOpacity="0.6"
              d="M0,256L40,245.3C80,235,160,213,240,202.7C320,192,400,192,480,197.3C560,203,640,213,720,224C800,235,880,245,960,229.3C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave-fast opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4ade80"
              fillOpacity="0.5"
              d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,165.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {t("hero_title")}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            {t("hero_subtitle")}
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-md text-gray-500 max-w-xl mx-auto lg:mx-0">
            {t("hero_description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="/dashboard"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition text-sm sm:text-base"
            >
              {t("start_your_journey")}
            </Link>
            <Link
              to="/solutions"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
            >
              {t("explore_features")}
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://media.tenor.com/XGWjg0om0fwAAAAi/kws-kws-tractor.gif"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg"
            alt="Agricultural tractor animation"
          />
        </div>
      </div>
      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes wave-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes wave-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-wave-slow { animation: wave-slow 20s linear infinite; }
          .animate-wave-fast { animation: wave-fast 10s linear infinite; }
        `}
      </style>
    </section>
  );
}

export default Hero;