import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { RxDoubleArrowDown } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "../components/Cover";
import UnderCover from "../components/UnderCover";
import Contact from "../components/Contact";
import OurWokrs from "../components/OurWokrs";
import Footer from "../components/Footer";
import UnderCoverMobile from "../components/UnderCoverMobile";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <div className="container " id="cover">
        <div className="h-screen p-4 w-screen overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full z-40">
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#103743] opacity-90"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <Cover />
          <Header />
        </div>
      </div>
      <div className="block md:hidden">

      <UnderCoverMobile />
      </div>
      <div className="hidden md:block">

      <UnderCover />
      </div>
      <OurWokrs />
      <Contact />
      <Footer />
    </>
  );
}
