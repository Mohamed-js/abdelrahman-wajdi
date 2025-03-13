import React from "react";
import bgImg from "../assets/imgs/bgbg.webp";
import { useTranslation } from "react-i18next";

export default function DownloadPdf() {
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";
  const { t } = useTranslation();

  return (
    <div className="relative bg-[#051118] py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="relative h-48 md:h-96 flex items-center justify-center mx-auto w-[90%] max-w-5xl rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className={`relative p-6 md:p-12 ${
            direction === "ltr" ? "text-left" : "text-right"
          } z-10 text-white`}
        >
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            data-aos={`${direction === "ltr" ? "fade-right" : "fade-left"}`}
          ></h2>
          <div className="text-center">
            <a
              className="relative inline-block px-8 py-3 bg-[#00d6f3] text-black font-semibold text-sm md:text-base rounded-full transition transform-positive duration-300 ease-in-out shadow-lg hover:bg-[#d58435] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
              href="https://docs.google.com/document/d/1KK5kAl83SJZHjoIJqLREPW2CtFKlnQi22DWMDuK0bjw/edit?usp=sharing"
              data-aos="fade-bottom"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
