import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import SliderComponent from "../components/ServicesSlider";

export default function Services() {
  const { t } = useTranslation();
  // "description": "اختيارك الاوحد للاحترافية أحدث الحلول لتقديم الخدمات التسويقية من جميع الجوانب بطريقة احترفية تعكس صورتك لزيادة فرص نجاحك ونسبة مبيعاتك",


  const direction = localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    return () => {
      AOS.refresh();
    };
  }, []);

  const servicesCard = [
    { name: t("services.marketingPlan"), description: t("services.marketingPlanDescription"), img: service1 },
    { name: t("services.digitalMarketing"), description: t("services.digitalMarketingDescription"), img: service2 },
    { name: t("services.socialMedia"), description: t("services.socialMediaDescription"), img: service3 },
    { name: t("services.creativeDesign"), description: t("services.creativeDesignDescription"), img: service4 },
    { name: t("services.seo"), description: t("services.seoDescription"), img: service5 },
    { name: t("services.contentWriting"), description: t("services.contentWritingDescription"), img: service6 },
    { name: t("services.developeSites"), description: t("services.developeSitesDescriptiion"), img: service7 },
    { name: t("services.emailMarketing"), description: t("services.emailMarketingDescription"), img: service8 },
    { name: t("services.marketingConsulting"), description: t("services.marketingConsultingDescription"), img: service9 },
    { name: t("services.dataAnalyisis"), description: t("services.dataAnalyisisDescription"), img: service10 },
    { name: t("services.mobileApps"), description: t("services.mobileAppsDescription"), img: service11 },
    { name: t("services.hosting"), description: t("services.hostingDescription"), img: service12 },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative z-[1] pt-[140px] bg-[#051118] p-2" id="services">
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="mt-10 mb-20">

      <SliderComponent />
      </div>

      {/* <h2
        className={`relative mx-auto text-3xl font-semibold leading-10 drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center ${
          direction === "rtl" ? "right-0" : "left-0"
        } w-[50%]`}
        data-aos="fade-left"
      >
        {t("services.title")}
      </h2>
      <p className="text-white text-center mb-12 max-w-[80%] md:max-w-[50%] mx-auto" data-aos="fade-left">
        {t("services.description")}
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto px-[15px] mb-16 md:max-w-[90%] lg:max-w-[70%] cursor-pointer">
        {servicesCard.map((card, i) => (
          <div
            key={i}
            className={`relative rounded-lg bg-cover bg-center group h-36 md:h-64 flex items-center justify-center overflow-hidden`}
            style={{ backgroundImage: `url(${card.img})` }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-[#051118] to-[#103743] opacity-50 transition-opacity duration-300`}
            ></div>
            <Transition in={hoveredCard === i} timeout={300} mountOnEnter unmountOnExit>
              {(state) => (
                <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-500 ${state === "entered" ? "opacity-100" : "opacity-0"}`}>
                  <p className={`absolute left-4 ${
                    direction === "ltr" ? "left-4" : "right-4"
                  } w-[90%] md:w-[60%] text-sm md:text-lg`} 
                  data-aos="fade-right"
                  >{card.description}</p>
                </div>
              )}
            </Transition>
            <Transition in={hoveredCard !== i} timeout={300} mountOnEnter unmountOnExit>
              {(state) => (
                <h3
                  className={`absolute transition-opacity duration-500 ${
                    direction === "ltr" ? "left-4" : "right-4"
                  } w-[50%] ${
                    state === "entered" ? "opacity-100" : "opacity-0"
                  } text-xl md:text-3xl text-white`}
                  data-aos="fade-left"
                >
                  {card.name}
                </h3>
              )}
            </Transition>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
