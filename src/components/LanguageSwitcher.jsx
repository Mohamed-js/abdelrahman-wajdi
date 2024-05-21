import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
    setCurrentLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
    document.documentElement.setAttribute("dir", storedLanguage === "ar" ? "rtl" : "ltr");
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    i18n.changeLanguage(newLanguage);
    document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
  };

  return (
    <div>
      {currentLanguage === 'en' ? (
        <button onClick={toggleLanguage}>العربية</button>
      ) : (
        <button onClick={toggleLanguage}>English</button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
