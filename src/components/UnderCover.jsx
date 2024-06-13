import React, { useEffect } from "react";
import bgImg from "../assets/imgs/bg-img.jpg";
import AOS from "aos";
import undercover1 from "../assets/imgs/test.jpg";
import undercover2 from "../assets/imgs/undercover2.jpg";
import undercover3 from "../assets/imgs/undercover3.jpg";
import undercover4 from "../assets/imgs/undercover4.png";

import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function UnderCover() {
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
  const marketingConceptsData = [
    {
      title: t("insights.socialMedia"),
      description: t("insights.socialMediaDescription"),
      learnMore: t("insights.learnMore"),
      img: undercover1,
    },
    {
      title: t("insights.seo"),
      description: t("insights.seoDescription"),
      learnMore: t("insights.learnMore"),
      img: undercover2,
    },
    {
      title: t("insights.emailCampaign"),
      description: t("insights.emailCampaignDescription"),
      learnMore: t("insights.learnMore"),
      img: undercover3,
    },
    {
      title: t("insights.dataDriven"),
      description: t("insights.dataDrivenDescription"),
      learnMore: t("insights.learnMore"),
      img: undercover4,
    },
  ];

  return (
    <div
      className="min-h-screen py-10 px-4 md:px-10 bg-[#051118]    relative"
      id="insights"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex items-center justify-center mt-10 md:mt-20  relative">
        <h1
          className="relative w-fit mx-auto  text-4xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
          data-aos="fade"
        >
          <svg
            className={`absolute w-[200px] h-[200px] top-[-82px]  ${
              direction === "ltr" ? "left-[100px]" : "left-[30px]"
            }  opacity-50 z-[-1]`}
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
          {t("insights.title1")}
        </h1>
      </div>
      <p className="text-white text-xl text-center mb-12" data-aos="fade">
        {" "}
        {t("insights.title2")}
      </p>

      <div className="space-y-16 md:space-y-32">
        {marketingConceptsData.map((data, index) => (
          <div
            key={index}
            className="relative h-96 flex items-center justify-center mx-auto w-full max-w-5xl rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${data.img})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              

            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className={`relative z-10 p-6 text-white ${direction === "ltr" ? "mr-auto" : "ml-auto"}`}>
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <p className="mt-2 w=full w-[90%]">{data.description}</p>
            </div>
            <style jsx>{`
              @media (min-width: 768px) {
                div[style] {
                  background-size: cover;
                }
              }
              @media (min-width: 1024px) {
                div[style] {
                  background-size: contain;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
