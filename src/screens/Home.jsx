import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { RxDoubleArrowDown } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "../components/Cover";
import UnderCover from "../components/UnderCover";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import UnderCoverMobile from "../components/UnderCoverMobile";
import ClientSlider from "../components/ClientSlider";
import Services from "../components/Services";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#103743] to-[#000000] opacity-90"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <Cover />
          <Header />
        </div>
      </div>
      {/* <div className="block md:hidden">

      <UnderCoverMobile />
      </div> */}
      <div className="">
        <UnderCover />
      </div>
      <Services />
      <ClientSlider />
      <Contact />
      <Footer />
    </>
  );
}
