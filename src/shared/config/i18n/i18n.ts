import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import enTranslation from "../../../locales/en/en.json";
import uaTranslation from "../../../locales/ua/ua.json";
import i18next from "i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources: {
      en: {
        translation: enTranslation
      },
      ua: {
        translation: uaTranslation
      }
    }
  });

export default i18next;
