import React from "react";
import { useTranslation } from "react-i18next";

function Community() {
     const { t } = useTranslation();
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {t("community_title")}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("community_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {t("com_card1_title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("com_card1_desc")}
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {(t("com_card2_title"))}
            </h3>
            <p className="text-sm text-gray-600">
              {t("com_card2_desc")}
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {t("com_card3_title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("com_card3_desc")}
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {t("com_card4_title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("com_card4_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;