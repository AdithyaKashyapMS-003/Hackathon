import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Explore() {
  const features = [
    {
      title: "Farmer Financial Health Dashboard",
      desc: "Get a complete overview of your farm's income, expenses, and profit.",
      link: "/dashboard",
    },
    {
      title: "AI Chat Bot",
      desc: "Interact with AI to get personalized farming advice instantly.",
      link: "/ai-chat",
    },
    {
      title: "Weather Updates",
      desc: "Get real-time, hyper-local weather information to plan your day.",
      link: "#",
    },
    {
      title: "Market Place",
      desc: "A Marketplace for farmers to rent and use products.",
      link: "/market-place",
    },
    {
      title: "Community",
      desc: "Ask and learn from a network of fellow farmers and experts.",
      link: "/community",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("explore_title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("explore_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group block p-6 border border-gray-200 rounded-lg transition-colors duration-200 hover:bg-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
