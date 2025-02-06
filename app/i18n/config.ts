import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en/translation.json";
import translationFi from "./fi/translation.json";
import translationSv from "./sv/translation.json";

const resources: Resource = {
  en: { translation: translationEn },
  fi: { translation: translationFi },
  sv: { translation: translationSv },
};

i18n.use(initReactI18next).init({
  supportedLngs: ["fi", "sv", "en"],
  fallbackLng: "fi",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
