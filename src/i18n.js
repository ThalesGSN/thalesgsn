import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import resources from "./I18n";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: [
            'en',
            'fr',
            'pt-BR'
        ],
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;