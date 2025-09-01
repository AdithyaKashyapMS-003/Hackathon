import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Help() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setSubmittedQuestions([...submittedQuestions, newQuestion.trim()]);
      setNewQuestion("");
    }
  };

  return (
    <div className="bg-gray-100 py-20 sm:py-24 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("help_title")}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("help_description")}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Section: Frequently Asked Questions */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("help_faq_title")}
            </h2>
            <dl className="divide-y divide-gray-200">
              <div className="py-4">
                <dt className="text-base sm:text-lg font-medium text-gray-800">
                  {t("help_faq1_q")}
                </dt>
                <dd className="mt-2 text-sm sm:text-base text-gray-600">
                  {t("help_faq1_a")}
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  {t("help_faq2_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {t("help_faq2_a")}
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  {t("help_faq3_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {t("help_faq3_a")}
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  {t("help_faq4_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {t("help_faq4_a")}
                </dd>
              </div>
            </dl>
          </div>

          {/* New Section: Ask a question and display submitted questions */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("ask_form_title")}
            </h2>
            <form
              onSubmit={handleQuestionSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder={t("ask_form_placeholder")}
                className="flex-grow border-2 border-gray-200 p-2 sm:p-3 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl shadow-md hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                {t("ask_form_submit")}
              </button>
            </form>

            {submittedQuestions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  {t("ask_form_submitted_title")}
                </h3>
                <ul className="space-y-4">
                  {submittedQuestions.map((q, index) => (
                    <li
                      key={index}
                      className="bg-gray-50 p-4 rounded-xl text-gray-700 border border-gray-200"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Section: Getting Started */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("help_getting_started")}
            </h2>
            <ol className="list-decimal list-inside text-sm sm:text-base lg:text-lg text-gray-600 space-y-3 sm:space-y-4">
              <li>{t("help_gs1")}</li>
              <li>{t("help_gs2")}</li>
              <li>{t("help_gs3")}</li>
              <li>{t("help_gs4")}</li>
            </ol>
          </div>

          {/* Section: Contact Support */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("help_contact_title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("help_contact_desc1")}</p>
            <div className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
              <p>
                {t("help_contact_email")}{" "}
                <a
                  href="mailto:support@agrigrow.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  support@agrigrow.com
                </a>
              </p>
              <p>{t("help_contact_desc2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
