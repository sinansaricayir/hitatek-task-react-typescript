import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false, // Geliştirme için hata ayıklama modunu etkinleştirin
    backend: {
      loadPath: "/locales/{{lng}}.json", // Doğru JSON dosya yolunu burada belirtin
    },
    interpolation: {
      escapeValue: false, // React zaten değerleri kaçırıyor
    },
  });

export default i18n;
