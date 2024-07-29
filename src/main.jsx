import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import arTranslations from "./translations/ar.json";
import enTranslations from "./translations/en.json";

const LANG_STORAGE_KEY = "selectedLanguage";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({ 
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
const selectedLanguage = localStorage.getItem(LANG_STORAGE_KEY) || "en";

const updateDocumentDirection = () => {
  const dir = i18n.dir();
  document.documentElement.dir = dir;
};
i18n.changeLanguage(selectedLanguage);

// Subscribe to language change events and update document direction accordingly
i18n.on("languageChanged", (lng) => {
  localStorage.setItem(LANG_STORAGE_KEY, lng);
});
// Initial update of document direction
updateDocumentDirection();

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
    </Router>
  </React.StrictMode>
);
