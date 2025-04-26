import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files (will be bundled by esbuild)
import en from "@shared/locales/en.json";
import fa from "@shared/locales/fa.json";

i18next
  .use(initReactI18next) // Integrates with React
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    fallbackLng: "en", // Default language
    debug: process.env.NODE_ENV === "development", // Debug in dev mode
    interpolation: {
      escapeValue: false, // React handles XSS safety
    },
  });

export default i18next;
