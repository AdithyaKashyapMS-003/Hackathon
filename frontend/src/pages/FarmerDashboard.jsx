import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "../config/api"; // 1. Import hook

function FarmerDashboard() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [cropTypes, setCropTypes] = useState([]);
  const [form, setForm] = useState({
    loanAmount: "",
    interest: "",
    tenure: "",
    cropType: "",
    landSize: "",
    location: "",
    expenses: "",
  });
  const [estimatedIncome, setEstimatedIncome] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch crop types from backend
    fetch(`${API_BASE_URL}/api/healthdashboard/crop-types`)
      .then((res) => res.json())
      .then(setCropTypes)
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setEstimatedIncome(null);
    try {
     const res = await fetch(
  `${API_BASE_URL}/api/healthdashboard/farmer-log`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      expenses: form.expenses
        ? [{ description: "General", amount: Number(form.expenses) }]
        : [],
    }),
  }
);

      const data = await res.json();
      if (res.ok) {
        setEstimatedIncome(data.estimatedIncome);
      } else {
        // 3. Set the message to a key, not a raw string
        setMessage(data.message ? "db_error_calculation" : "db_error_unknown");
      }
    } catch {
      setMessage("db_error_network");
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen antialiased pt-20 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("db_header_title")}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("db_header_subtitle")}
          </p>
        </div>

        {/* Key Schemes / Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
              {t("db_scheme1_title")}
            </h2>
            <p className="text-xl font-bold text-green-600">
              {t("db_scheme1_benefit")}
            </p>
            <p className="text-sm text-gray-500 mt-1">{t("db_scheme1_desc")}</p>
            <a
              href="https://pmkisan.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              {t("db_apply_now")}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
              {t("db_scheme2_title")}
            </h2>
            <p className="text-xl font-bold text-blue-600">
              {t("db_scheme2_benefit")}
            </p>
            <p className="text-sm text-gray-500 mt-1">{t("db_scheme2_desc")}</p>
            <a
              href="https://www.kisancreditcard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              {t("db_apply_now")}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
              {t("db_scheme3_title")}
            </h2>
            <p className="text-xl font-bold text-orange-600">
              {t("db_scheme3_benefit")}
            </p>
            <p className="text-sm text-gray-500 mt-1">{t("db_scheme3_desc")}</p>
            <a
              href="https://pmfby.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white bg-orange-600 px-4 py-2 rounded-xl hover:bg-orange-700 transition"
            >
              {t("db_apply_now")}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
              {t("db_scheme4_title")}
            </h2>
            <p className="text-xl font-bold text-gray-800">
              {t("db_scheme4_benefit")}
            </p>
            <p className="text-sm text-gray-500 mt-1">{t("db_scheme4_desc")}</p>
            <a
              href="https://soilhealth.dac.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition"
            >
              {t("db_apply_now")}
            </a>
          </div>
        </div>

        {/* Recent Updates Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t("db_updates_title")}
          </h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">{t("db_update1_text")}</span>
                <span className="font-bold text-green-600">
                  {t("db_update1_value")}
                </span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">{t("db_update2_text")}</span>
                <span className="font-bold text-blue-600">
                  {t("db_update2_value")}
                </span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">{t("db_update3_text")}</span>
                <span className="font-bold text-green-600">
                  {t("db_update3_value")}
                </span>
              </li>
              <li className="flex justify-between items-center py-4 px-6 text-gray-800">
                <span className="font-medium">{t("db_update4_text")}</span>
                <span className="font-bold text-orange-600">
                  {t("db_update4_value")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Estimate Income Form */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
            {t("db_form_title")}
          </h2>
          <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-md border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input
                type="number"
                name="loanAmount"
                placeholder={t("db_form_loan_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.loanAmount}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="interest"
                placeholder={t("db_form_interest_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.interest}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="tenure"
                placeholder={t("db_form_tenure_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.tenure}
                onChange={handleChange}
                required
              />
              <select
                name="cropType"
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.cropType}
                onChange={handleChange}
                required
              >
                <option value="">{t("db_form_select_crop")}</option>
                {cropTypes.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="landSize"
                placeholder={t("db_form_land_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.landSize}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder={t("db_form_location_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.location}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="expenses"
                placeholder={t("db_form_expenses_placeholder")}
                className="w-full border-2 border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                value={form.expenses}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-3 sm:py-4 rounded-xl shadow-md hover:bg-blue-600 transition transform duration-300 hover:scale-105 text-sm sm:text-base"
              >
                {t("db_form_submit_button")}
              </button>
            </form>

            {estimatedIncome !== null && (
              <div className="mt-8 p-4 bg-green-50 rounded-xl text-center">
                <p className="text-xl text-green-700 font-bold">
                  {/* 4. Use interpolation for dynamic values */}
                  {t("db_form_result", { income: estimatedIncome })}
                </p>
              </div>
            )}

            {message && (
              <div className="mt-4 p-4 text-red-600 text-center">
                {t(message)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
