import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// The component should be defined only once.
const Explore = () => {
  const { t } = useTranslation();

  // Wrap your array definition in useMemo
  const features = useMemo(
    () => [
      {
        title: t("card1_title"),
        desc: t("card1_desc"),
        link: "/solutions",
      },
      {
        title: t("card2_title"),
        desc: t("card2_desc"),
        link: "/ai-chat",
      },
      {
        title: t("card3_title"),
        desc: t("card3_desc"),
        link: "/guides",
      },
      {
        title: t("card4_title"),
        desc: t("card4_desc"),
        link: "/community",
      },
      {
        title: t("card5_title"),
        desc: t("card5_desc"),
        link: "/help",
      },
    ],
    [t]
  ); // Add 't' as a dependency to the hook

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
