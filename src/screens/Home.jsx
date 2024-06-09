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
import Services from "./Services";
import bgImg from "../assets/imgs/bg-img.jpg";
import DownloadPdf from "../components/DownloadPdf";
import { FaWhatsapp } from "react-icons/fa";
import CustomWhatsApp from "../components/CustomWhatsApp";
import ClientLogo01 from "../assets/imgs/company1-removebg-preview.png";
import ClientLogo02 from "../assets/imgs/company2-removebg-preview.png";
import ClientLogo03 from "../assets/imgs/company3-removebg-preview.png";
import ClientLogo04 from "../assets/imgs/company4-removebg-preview.png";
import ClientLogo05 from "../assets/imgs/company5-removebg-preview.png";
import ClientLogo06 from "../assets/imgs/company6-removebg-preview.png";
import ClientLogo07 from "../assets/imgs/company7-removebg-preview.png";
import ClientLogo08 from "../assets/imgs/company8-removebg-preview.png";
import ClientLogo09 from "../assets/imgs/company9-removebg-preview.png";
import ClientLogo010 from "../assets/imgs/company10-removebg-preview.png";

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
  const firstSliderImages = [
    ClientLogo01,
    ClientLogo02,
    ClientLogo03,
    ClientLogo04,
    ClientLogo05,
  ];

  const secondSliderImages = [
    ClientLogo06,
    ClientLogo07,
    ClientLogo08,
    ClientLogo09,
    ClientLogo010,
  ];

  return (
    <>
    <CustomWhatsApp />
      <div className="container " id="cover">
        <div className="h-screen p-4 w-screen overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full z-40">
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#103743] to-[#000000] opacity-75 md:opacity-75"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <Cover />
          <Header />
        </div>
      </div>
      
     <div className="block md:hidden">

      <UnderCoverMobile />
      </div> 
      <div className="hidden md:block ">
        <UnderCover />
        
      </div>
      
      <ClientSlider rtl={true} mt={true} images={firstSliderImages} />
      <div
      className="h-2  relative"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
           <div className="absolute inset-0 w-full h-full z-40">
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#103743] to-[#000000] opacity-75 md:opacity-75"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
      </div>
      <ClientSlider rtl={false} mt={false} images={secondSliderImages} />
      <div
      className="h-2  relative"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
           <div className="absolute inset-0 w-full h-full z-40">
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#103743] to-[#000000] opacity-75 md:opacity-75"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
      </div>
      <DownloadPdf />
      <Contact />
      <Footer />
      
    </>
  );
}
