import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles.module.css";
import landingImg from "../assets/imgs/landing-image.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import lawyerLogo from "../assets/imgs/logo-.png";
import lawyerWork from "../assets/imgs/lawyerWork.jpg";
import shaza from "../assets/imgs/shaza.png";
import futureStar1 from "../assets/imgs/future-star1.jpg";
import futureStar2 from "../assets/imgs/future-star2.jpg";
import healthStep from "../assets/imgs/healthsteps.png";
import healthStep1 from "../assets/imgs/healthsteps1.png";
import superGym1 from "../assets/imgs/super-gym1.jpg";
import superGym3 from "../assets/imgs/super-gym3.jpg";
import { useTranslation } from "react-i18next";
const Page = ({ offset, gradient, title, description, onClick, img, logo }) => {
  const direction =
  localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={handleClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={handleClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer className={`${styles.text}`} offset={offset} speed={0.3}>
        <div className="  ">
          <span className={`md:ml-4 ${direction === "ltr" ? "md:ml-4" : "md:mr-4"} mt-[90px] mb-8 flex justify-center ${direction === "ltr" ? "md:justify-start" : "md:justify-end"} w-full md:w-auto`}>
            <img src={logo} className=" max-w-[120px] rounded-full" />
          </span>
          <div className="flex justify-center items-start h-screen ">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-[600px] mx-12 min-w-[70%] md:min-w-[500px]">
              <div className="relative">
                <img
                  src={img}
                  className="w-full h-auto max-h-[200px] object-contain rounded-t-lg"
                  alt="Card Image"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
              </div>
              <div className="p-4">
                <h1 className="text-white text-base md:text-3xl text-center mb-4">
                  {title}
                </h1>
                <p className="text-gray-300 text-base md:text-lg text-center">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default function OurWorks() {
  const { t } = useTranslation();
 
  const parallax = useRef(null);
  const totalPages = 4; // Update this to the total number of pages

  const scroll = (to) => {
    if (parallax.current) {
      const currentOffset = parallax.current.offset;
      let newOffset;

      if (to === "next") {
        newOffset = currentOffset < totalPages - 1 ? currentOffset + 1 : 0;
      } else if (to === "prev") {
        newOffset = currentOffset > 0 ? currentOffset - 1 : totalPages - 1;
      } else {
        newOffset = to;
      }

      parallax.current.scrollTo(newOffset);
    }
  };

  const ourWorks = [
    {
      title: t("ourWorks.title1"),
      description: t("ourWorks.description1"),
      gradient: "pink",
      img: lawyerWork,
      logo: lawyerLogo,
    },
    {
      title: t("ourWorks.title2"),
      description: t("ourWorks.description2"),
      gradient: "teal",
      img: futureStar2,
      logo: futureStar1,
    },
    {
      title: t("ourWorks.title3"),
      description: t("ourWorks.description3"),
      gradient: "tomato",
      img: healthStep1,
      logo: healthStep,
    },
    {
      title: t("ourWorks.title4"),
      description: t("ourWorks.description4"),
      gradient: "pink",
      img: shaza,
      logo: shaza,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure scroll position is at the top on initial load
  }, []);

  return (
    <div style={{ background: "#dfdfdf" }} dir="ltr">
      <div className="fixed left-2  md:left-4 top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl text-[#fddc15] z-30 cursor-pointer">
        <MdKeyboardArrowLeft onClick={() => scroll("prev")} />
      </div>
      <div className="fixed right-2  md:right-4 top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl text-[#fddc15] z-30 cursor-pointer">
        <MdKeyboardArrowRight onClick={() => scroll("next")} />
      </div>
      <Parallax
        className={styles.container}
        style={{ overflow: "hidden" }}
        ref={parallax}
        pages={4}
        horizontal
      >
        {ourWorks.map((work, index) => (
          <Page
            key={index}
            offset={index}
            title={work.title}
            description={work.description}
            img={work.img}
            logo={work.logo}
            gradient={work.gradient}
            onClick={() => scroll("next")}
          />
        ))}
      </Parallax>
    </div>
  );
}
