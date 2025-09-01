import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Community() {
  const { t } = useTranslation();
  // Real data for recent successful farmers
  const successfulFarmers = useMemo(
    () =>
      [
        {
          name: t("success1_title"),
          achievement: t("success1_desc"),
          newsLink:
            "https://krishijagran.com/success-story/haryana-farmer-earns-in-lakhs-per-acre-with-sweet-corn-cultivation/",
        },
        {
          name: t("success2_title"),
          achievement: t("success2_desc"),
          newsLink:
            "https://theearthview.in/kiwi-queen-how-sita-devi-changed-her-life/",
        },
        {
          name: t("success3_title"),
          achievement: t("success3_desc"),
          newsLink: "https://www.youtube.com/watch?v=hbYSYNbWuZk",
        },
        {
          name: t("success4_title"),
          achievement: t("success4_desc"),
          newsLink:
            "https://timesofindia.indiatimes.com/city/jaipur/kirori-lal-meena-meets-forest-min/articleshow/123394992.cms",
        },
      ], [t]
  );

  return (
    <div className="bg-gray-100 py-20 sm:py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("community_title")}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("community_description")}
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
              {t("com_card1_title")}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{t("com_card1_desc")}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
              {t("com_card2_title")}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{t("com_card2_desc")}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
              {t("com_card3_title")}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{t("com_card3_desc")}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
              {t("com_card4_title")}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{t("com_card4_desc")}</p>
          </div>
        </div>

        {/* Recent Successful Farmers */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t("com_title")}</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("com_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {successfulFarmers.map((farmer, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-blue-600 mb-2">
                {farmer.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {farmer.achievement}
              </p>
              <a
                href={farmer.newsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                {t("read_more")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
