import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 1. Import hook

function MarketPlace() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 2. Initialize hook

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-yellow-700 text-center">
          {t("mp_title")}
        </h1>
        <p className="text-gray-700 mb-8 text-center">{t("mp_description")}</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/marketplace/upload")}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            {t("mp_button_upload")}
          </button>
          <button
            onClick={() => navigate("/marketplace/rent")}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            {t("mp_button_rent")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
