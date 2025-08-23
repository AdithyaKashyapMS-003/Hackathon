import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
        };
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 px-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
          <p>{t("footer_copyright", { year: new Date().getFullYear() })}</p>
          <p>
            {t("footer_permission")}{" "}
            <a href="mailto:info@agrigrow.com" className="text-blue-600">
              info@agrigrow.com
            </a>
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
