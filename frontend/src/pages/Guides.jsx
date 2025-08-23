import React from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Guides() {
  const { t } = useTranslation(); // 2. Initialize hook

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {t("guides_title")}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("guides_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("guides_card1_title")}
            </h3>
            <p className="text-sm text-gray-600">{t("guides_card1_desc")}</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("guides_card2_title")}
            </h3>
            <p className="text-sm text-gray-600">{t("guides_card2_desc")}</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("guides_card3_title")}
            </h3>
            <p className="text-sm text-gray-600">{t("guides_card3_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guides;
