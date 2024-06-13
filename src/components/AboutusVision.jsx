import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutusVision({ aboutBg, title, description }) {
  const { t } = useTranslation();

  const direction = localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="relative mt-32 lg:h-[400px] flex items-center justify-center mx-auto w-[90%] md:w-[80%] max-w-5xl rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={aboutBg}
        className="absolute z-[-1] inset-0 object-cover w-full h-full transition-transform duration-300 transform scale-x-100"
        style={{ transform: direction === "rtl" ? "scaleX(1)" : "scaleX(-1)" }}
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative p-6 md:p-12 z-10 text-white w-full h-full flex items-center">
        <div
          className={`flex flex-col ${
            direction === "ltr" ? "mr-auto text-left" : "ml-auto text-right"
          } md:w-1/2 w-full`}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
