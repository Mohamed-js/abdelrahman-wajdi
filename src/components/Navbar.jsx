import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar({ setHandleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full  z-[200] transition-all duration-700 ${
        isScrolled ? "bg-[#050e16] bg-opacity-30" : "bg-transparent"
      } hover:bg-[#050e16] hover:bg-opacity-30`}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 w-[35%] md:w-[40%] ">
            <div className="main-color cursor-pointer">
              <LanguageSwitcher />
            </div>
            {/* <FaShoppingBag size={20} className="main-color cursor-pointer" /> */}
            <Link to="our-works">
              <div className="main-color text-sm md:text-base cursor-pointer hidden md:block">
                {t("navbar.ourWorks")}
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center w-[30%] md:w-[10%] text-center">
            <Link to="/">
              <div className="text-center w-full text-3xl cursor-pointer text-[#78b6db] ">
                <img src={logo} alt="Logo" className="w-[60px] rounded-lg" />
              </div>
            </Link>
          </div>
          <div className="w-[35%] md:w-[40%] ">
            <CiMenuBurger
              className={`${
                direction === "ltr" ? "ml-auto" : "mr-auto"
              } main-color cursor-pointer`}
              size={25}
              onClick={() => setHandleSidebar((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
