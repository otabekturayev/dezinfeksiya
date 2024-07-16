import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import uzTranslation from "../public/locale/uz.json";
import ruTranslation from "../public/locale/ru.json";

const language = localStorage.getItem('i18nextLng') || 'ru'

i18n
.use(Backend)
.use(languageDetector)
.use(initReactI18next)
.init({
    fallbackLng : 'ru',
    lng: language,
    debug: true,
    resources: {
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation}
    }
})

export default i18n