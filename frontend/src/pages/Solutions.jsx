import React from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Solutions() {
  const { t } = useTranslation(); // 2. Initialize hook

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
            {t("solutions_title")}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("solutions_description")}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Solution 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-extralight leading-none">
                01
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                {t("solutions_s1_title")}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("solutions_s1_desc")}</p>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-extralight leading-none">
                02
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                {t("solutions_s2_title")}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("solutions_s2_desc")}</p>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-extralight leading-none">
                03
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                {t("solutions_s3_title")}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("solutions_s3_desc")}</p>
            </div>
          </div>

          {/* Solution 4 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-extralight leading-none">
                04
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                {t("solutions_s4_title")}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("solutions_s4_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
