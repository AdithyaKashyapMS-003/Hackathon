import React from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Help() {
  const { t } = useTranslation(); // 2. Initialize hook

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
            {t("help_title")}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            {t("help_description")}
          </p>
        </div>

        <div className="space-y-16">
          {/* Section: Frequently Asked Questions */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {t("help_faq_title")}
            </h2>
            <dl className="divide-y divide-gray-200">
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t("help_faq1_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t("help_faq1_a")}
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t("help_faq2_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t("help_faq2_a")}
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t("help_faq3_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t("help_faq3_a")}
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t("help_faq4_q")}
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t("help_faq4_a")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Section: Getting Started */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {t("help_getting_started_title")}
            </h2>
            <ol className="list-decimal list-outside text-lg text-gray-600 space-y-4 leading-relaxed pl-5">
              <li>{t("help_gs1")}</li>
              <li>{t("help_gs2")}</li>
              <li>{t("help_gs3")}</li>
              <li>{t("help_gs4")}</li>
            </ol>
          </div>

          {/* Section: Contact Support */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {t("help_contact_title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("help_contact_desc1")}
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t("help_contact_email")}{" "}
              <a
                href="mailto:support@agrigrow.com"
                className="text-blue-600 underline"
              >
                support@agrigrow.com
              </a>
              <br />
              {t("help_contact_desc2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
