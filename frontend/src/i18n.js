import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Loads translations from your server/public folder
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    supportedLngs: ["en", "hi", "kn", "te", "ta"],
    fallbackLng: "en", // Use English if the detected language is not available
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // Cache the selected language in localStorage
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to your translation files
    },
    react: {
      useSuspense: true, // Recommended for loading translations
    },
  });

export default i18n;
