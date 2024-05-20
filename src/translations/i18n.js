import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslations from './ar.json';
import enTranslations from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
