import React, { useEffect } from "react";
import service1 from "../assets/imgs/service1.jpg";
import service2 from "../assets/imgs/service2.jpg";
import service3 from "../assets/imgs/service3.jpg";
import service4 from "../assets/imgs/service4.jpg";
import service5 from "../assets/imgs/service5.jpg";
import service6 from "../assets/imgs/service6.png";
import service7 from "../assets/imgs/service7.jpg";
import service8 from "../assets/imgs/service8.png";
import service9 from "../assets/imgs/service9.jpg";
import service10 from "../assets/imgs/service10.jpg";
import service11 from "../assets/imgs/service11.jpg";
import service12 from "../assets/imgs/service12.jpg";

import bgImg from "../assets/imgs/bg-img.jpg";
import {
  FaCoffee,
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaStar,
  FaRegClock,
  FaTasks,
} from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

export default function Services() {
  const { t } = useTranslation();

  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  // https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg
  const servicesCard = [
    {
      name: t("services.marketingPlan"),
      description: t("services.marketingPlanDescription"),
      img: service1,
    },
    {
      name: t("services.digitalMarketing"),
      description: t("services.digitalMarketingDescription"),
      img: service2,
    },
    {
      name: t("services.socialMedia"),
      description: t("services.socialMediaDescription"),
      img: service3,
    },
    {
      name: t("services.creativeDesign"),
      description: t("services.creativeDesignDescription"),
      img: service4,
    },
    {
      name: t("services.seo"),
      description: t("services.seoDescription"),
      img: service5,
    },
    {
      name: t("services.contentWriting"),
      description: t("services.contentWritingDescription"),
      img: service6,
    },
    {
      name: t("services.developeSites"),
      description: t("services.developeSitesDescriptiion"),
      img: service7,
    },
    {
      name: t("services.emailMarketing"),
      description: t("services.emailMarketingDescription"),
      img: service8,
    },
    {
      name: t("services.marketingConsulting"),
      description: t("services.marketingConsultingDescription"),
      img: service9,
    },
    {
      name: t("services.dataAnalyisis"),
      description: t("services.dataAnalyisisDescription"),
      img: service10,
    },
    {
      name: t("services.mobileApps"),
      description: t("services.mobileAppsDescription"),
      img: service11,
    },
    {
      name: t("services.hosting"),
      description: t("services.hostingDescription"),
      img: service12,
    },
  ];
  return (
    <div
      className={`relative z-[1] pt-[140px]  bg-[#051118] p-2`}
      id="services"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <h2
        className="relative w-fit mx-auto  text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
        data-aos="fade-left"
      >
        <svg
          className={`absolute w-[200px] h-[200px] top-[-82px] left-[-35px]  opacity-50 z-[-1]	`}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 2000 2000"
        >
          <g>
            <g fill="hsl(194, 45%, 50%)" id="star">
              <path
                d="M 500 500 C 1000 1000 1000 1000 1300 750 C 1000 1000 1000 1000 2000 2000 C 1000 1000 1000 1000 750 1300 C 1000 1000 1000 1000 500 500"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
        {t("services.title")}
      </h2>
      <p
        className="text-white text-center mb-12 max-w-[80%] md:max-w-[50%] mx-auto"
        data-aos="fade-left"
      >
        {t("services.description")}
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mx-auto px-[15px] mb-16">
        {servicesCard.map((card, i) => {
          return (
            <div
              data-aos="fade-up"
              key={i}
              className={`group relative before:${
                direction === "ltr" ? "bg-gradient-to-tr" : "bg-gradient-to-tl"
              }
              } before:from-[#051118] before:to-[#103743] before:content-[''] before:absolute before:h-full before:transition-[0.3s] before:rounded-lg before:w-[calc(100%_-_60px)] before:z-[-2] ${
                direction === "ltr" ? "before:right-0" : "before:left-0"
              } before:top-0 after:content-[''] after:absolute after:h-full after:transition-[0.3s] after:rounded-lg ${
                direction === "ltr" ? "after:right-0" : "after:left-0"
              } after:top-0 after:z-[-1] after:bg-[#11333d] after:w-0 hover:after:w-[calc(100%_-_60px)]`}
            >
              <div className="flex items-center pt-[60px]">
                <img
                  src={card.img}
                  alt=""
                  className="group-hover:grayscale	 w-[calc(100%_-_60px)] transition-[0.3s] rounded-[15px]"
                />
                <div className="flex flex-col items-center gap-5">
                  <div className="w-[60px] h-[30px] flex justify-center items-center">
                    <FaChartLine className="text-[#b7e4ea] transition-[0.3s] group-hover:z-10 icon" />
                  </div>
                  <div className="w-[60px] h-[30px] flex justify-center items-center">
                    <FaLightbulb className="text-[#b7e4ea] transition-[0.3s] group-hover:z-10 icon" />
                  </div>
                  <div className="w-[60px] h-[30px] flex justify-center items-center">
                    <FaTasks className="text-[#b7e4ea] transition-[0.3s] group-hover:z-10 icon" />
                  </div>
                  <div className="w-[60px] h-[30px] flex justify-center items-center">
                    <FaRegClock className="text-[#b7e4ea] transition-[0.3s] group-hover:z-10 icon" />
                  </div>
                </div>
              </div>
              <div className={`${direction === "ltr" ? "pl-20" : "pr-20"}`}>
                {/* Title */}
                <h3 className="mt-3.5 font-black py-3 mx-2 text-[#b7e4ea] text-[18px] mb-0">
                  {card.name}
                </h3>
                {/* Description */}
                <p className="mb-3.5 text-[#fffffc] text-[15px] mx-2">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
