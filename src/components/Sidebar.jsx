import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import logo from "../assets/imgs/adslogo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Sidebar({ handleSidebar, setHandleSidebar }) {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    const handleBodyClass = () => {
      if (handleSidebar) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleBodyClass();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [handleSidebar]);

  const isSamePage = (link) => {
    return location.pathname === link;
  };

  const handleLinkClick = () => {
    setHandleSidebar((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 z-[300] bg-gradient-to-r from-[#05121e] to-[#091921] w-full h-full text-white overflow-y-auto">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setHandleSidebar((prev) => !prev)}
          className="text-[#e6953e] text-2xl font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className="text-center mt-12 mb-8 flex justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-[#78b6db]">
          <img src={logo} alt="Logo" className="w-[90px] rounded-lg" />
        </h1>
      </div>
      <ul className="space-y-4 text-center">
        <li
          className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isSamePage("/") ? (
            <Link
              to="cover"
              smooth={true}
              duration={1500}
              onClick={handleLinkClick}
            >
              {t("sidebar.home")}
            </Link>
          ) : (
            <LinkRouter to="/#cover" onClick={handleLinkClick}>
              {t("sidebar.home")}
            </LinkRouter>
          )}
        </li>
        <li
          className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer mt-0"
          style={{marginTop: "0px"}}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isSamePage("/") ? (
            <Link
              to="insights"
              smooth={true}
              duration={1500}
              onClick={handleLinkClick}
            >
              {t("sidebar.insights")}
            </Link>
          ) : (
            <LinkRouter to="/#insights" onClick={handleLinkClick}>
              {t("sidebar.insights")}
            </LinkRouter>
          )}
        </li>
        <LinkRouter
          to="/about-us"
          onClick={() => setHandleSidebar((prev) => !prev)}
        >
          <li
            className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer mt-none"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{marginTop: "0px"}}

          >
            {t("sidebar.aboutUs")}
          </li>
        </LinkRouter>
        <LinkRouter
          to="/our-works"
          onClick={() => setHandleSidebar((prev) => !prev)}
        >
          <li
            className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer mt-none"
            data-aos="fade-up"
            data-aos-delay="500"
            style={{marginTop: "0px"}}

          >
            {t("sidebar.ourWorks")}
          </li>
        </LinkRouter>
        <li
          className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer mt-none"
          data-aos="fade-up"
          style={{marginTop: "0px"}}

          data-aos-delay="600"
        >
          {isSamePage("/") ? (
            <Link
              to="services"
              smooth={true}
              duration={1500}
              onClick={handleLinkClick}
            >
              {t("sidebar.services")}
            </Link>
          ) : (
            <LinkRouter to="/#services" onClick={handleLinkClick}>
              {t("sidebar.services")}
            </LinkRouter>
          )}
        </li>
        <li
                  style={{marginTop: "0px"}}

          className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer mt-none"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {isSamePage("/") ? (
            <Link
              to="contact-us"
              smooth={true}
              duration={1500}
              onClick={handleLinkClick}
            >
              {t("sidebar.contactUs")}
            </Link>
          ) : (
            <LinkRouter to="/#contact-us" onClick={handleLinkClick}>
              {t("sidebar.contactUs")}
            </LinkRouter>
          )}
        </li>
        {/* <li
          className="p-4 hover:text-[#e6953e] transition-colors duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="800"
          onClick={handleLinkClick}
        >
          <LanguageSwitcher />
        </li> */}
      </ul>
      {/* <div className="absolute bottom-4 left-4 text-xs text-gray-400">
        © 2024 Company. All Rights Reserved.
      </div> */}
    </div>
  );
}
