import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutusVision({ aboutBg, title, description }) {
  const { t } = useTranslation();

  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="relative mt-32 h-96 flex items-center justify-center mx-auto w-[80%] md:w-[80%] max-w-5xl rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0"></div>
      <div className="relative p-6 md:p-12 z-10 text-white w-full h-full flex items-center">
        <div
          className={`flex flex-col ${
            direction === "ltr" ? " mr-auto text-left" : "ml-auto text-right "
          } md:w-1/2`}
         
        >
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            // data-aos={`${direction === "ltr" ? "fade-right" : "fade-left"}`}
          >
            {title}
          </h2>
          <p
            className="mb-4 text-base md:text-lg"
            // data-aos={`${direction === "ltr" ? "fade-left" : "fade-right"}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
