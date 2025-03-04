import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import about1 from "../assets/imgs/about-1.png";
import about2 from "../assets/imgs/about-2.png";
import about3 from "../assets/imgs/about-3.png";
import ourGoals from "../assets/imgs/ourgoals.jpg";
import ourVision from "../assets/imgs/ourvision.jpg";
import ourMessage from "../assets/imgs/ourmessage.jpg";
import reflect from "../assets/imgs/reflect.jpg";
import bgImg from "../assets/imgs/bg-img.jpg";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import AboutusVision from "../components/AboutusVision";
{
  /* https://cdn.pixabay.com/photo/2018/09/29/10/22/vision-3711143_640.jpg */
}
{
  /* https://cdn.pixabay.com/photo/2017/02/07/13/46/target-2045924_640.jpg */
}
{
  /* https://cdn.pixabay.com/photo/2021/08/27/15/26/email-6578913_640.jpg */
}
{
  /* https://cdn.pixabay.com/photo/2024/04/27/07/00/ai-generated-8723233_640.jpg */
}
export default function AboutUs() {
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure scroll position is at the top on initial load
  }, []);
  return (
    <div
      className="relative z-[1] py-5 bg-[#051118] "
      id="team-members"
      dir="ltr"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div className="my-32">
        <h2 className="component-heading text-gray-600 ">
          {" "}
          {t("aboutUs.about")}
        </h2>
      </div>

      <AboutusVision
        aboutBg={ourVision}
        title={t("aboutUs.ourVisionTitle")}
        description={t("aboutUs.ourVision")}
      />
      <AboutusVision
        aboutBg={ourGoals}
        title={t("aboutUs.ourGoalsTitle")}
        description={t("aboutUs.ourGoals")}
      />
      <AboutusVision
        aboutBg={ourMessage}
        title={t("aboutUs.ourMessageTitle")}
        description={t("aboutUs.ourMessage")}
      />
      <AboutusVision
        aboutBg={reflect}
        title={t("aboutUs.additionCardTitle")}
        description={t("aboutUs.additionCard")}
      />
      <h4 className="w-fit mx-auto text-xs tracking-[4px] leading-10 uppercase text-[#b7e4ea] text-center mt-12">
        {t("aboutUs.about")}
      </h4>
      <div className="mb-14 text-center mx-auto">
        <p className="relative leading-[1.1] text-3xl max-w-[300px] md:max-w-[500px] md:text-[50px] w-fit mx-auto text-3xl font-semibold leading-10 text-[#b7e4ea] text-center">
          <svg
            className="absolute -translate-x-2/4 -translate-y-2/4 text-[50px] w-[300px] md:w-[500px] h-[400px] left-2/4 top-2/4 opacity-50 z-[-1]"
            xmlns="http://www.w3.org/2000/svg"
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
          {t("aboutUs.title1")}
        </p>
        <p className="w-fit mx-auto text-[10px] md:text-xs leading-10 capitalize main-color text-center">
          {t("aboutUs.title2")}
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={60}
        slidesPerView={3}
        centeredSlides={true}
        className="px-10"
        effect={"coverflow"}
        // loop={true}
        grabCursor={true}
        slideActiveClass="swiper-slide-active" // Class for the active slide
        slidePrevClass="swiper-slide-prev" // Class for the slide to the left of the active slide
        slideNextClass="swiper-slide-next" // Class for the slide to the right of the active slide
        initialSlide={1}
        keyboard
        speed={800}
        breakpoints={{
          // When window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // When window width is >= 768px
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div
            className={`mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] ${
              direction === "ltr"
                ? " before:bg-gradient-to-tr"
                : "before:bg-gradient-to-tl"
            }  before:from-[#051118] before:to-[#103743] before:w-full`}
          >
            <div className="p-2">
              <img src={about1} alt="Custom SEO Services" className="" />
            </div>
            <div
              className={`relative w-full bg-[#103743] text-[#b7e4ea] text-xs ${
                direction === "ltr" ? "pl-5" : "pr-5"
              } py-1 z-10`}
            >
              <div
                className={`absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] ${
                  direction === "ltr" ? "right-[15px]" : "left-[15px]"
                } top-[-22px] `}
              >
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">
                  {t("aboutUs.masterAdds")}
                </div>
              </div>
              <span className={`${direction === "rtl" && "ml-4"}`}>01</span>
            </div>
            <div
              className={`${
                direction === "ltr" ? "text-left" : "text-right"
              } px-5`}
            >
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                {t("aboutUs.cardOneTitle")}
              </h3>
              <p className="mb-3.5 text-[10px] text-[#b7e4ea] pb-4 mb-6">
                {t("aboutUs.cardOneDescription")}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] ${
              direction === "ltr"
                ? "before:bg-gradient-to-tr"
                : "before:bg-gradient-to-tl"
            }  before:from-[#051118] before:to-[#103743] before:w-full`}
          >
            <div className="p-2">
              <img src={about2} alt="SEO Website Design" className="" />
            </div>
            <div
              className={`relative w-full bg-[#103743] text-[#b7e4ea] text-xs ${
                direction === "ltr" ? "pl-5" : "pr-5"
              } py-0.5 z-10`}
            >
              <div
                className={`absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] ${
                  direction === "ltr" ? "right-[15px]" : "left-[15px]"
                } top-[-22px]`}
              >
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">
                  {" "}
                  {t("aboutUs.masterAdds")}
                </div>
              </div>
              <span className={`${direction === "rtl" && "ml-4"}`}>02</span>
            </div>
            <div
              className={`${
                direction === "ltr" ? "text-left" : "text-right"
              } px-5`}
            >
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                {t("aboutUs.cardTwoTitle")}
              </h3>
              <p className="mb-3.5 text-[10px] text-[#b7e4ea] pb-4 mb-6">
                {t("aboutUs.cardTwoDescription")}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] ${
              direction === "ltr"
                ? "before:bg-gradient-to-tr"
                : "before:bg-gradient-to-tl"
            }  before:from-[#051118] before:to-[#103743] before:w-full`}
          >
            <div className="p-2">
              <img src={about3} alt="SEO Consulting" className="" />
            </div>
            <div
              className={`relative w-full bg-[#103743] text-[#b7e4ea] text-xs ${
                direction === "ltr" ? "pl-5" : "pr-5"
              } py-0.5 z-10`}
            >
              <div
                className={`absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] ${
                  direction === "ltr" ? "right-[15px]" : "left-[15px]"
                } top-[-22px]`}
              >
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">
                  {" "}
                  {t("aboutUs.masterAdds")}
                </div>
              </div>
              <span className={`${direction === "rtl" && "ml-4"}`}>03</span>
            </div>
            <div
              className={`${
                direction === "ltr" ? "text-left" : "text-right"
              } px-5`}
            >
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                {t("aboutUs.cardThreeTitle")}
              </h3>
              <p className="text-[10px] text-[#b7e4ea] pb-4 mb-6">
                {t("aboutUs.cardThreeDescription")}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
