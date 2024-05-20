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
import bgImg from "../assets/imgs/bg-img.jpg";
import Footer from "../components/Footer";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure scroll position is at the top on initial load
  }, []);
  return (
    <div className="relative z-[1] py-5 bg-[#051118] " id="team-members">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div className="mb-14 text-center mx-auto">
        <h4 className="w-fit mx-auto text-xs tracking-[4px] leading-10 uppercase text-[#b7e4ea] text-center mt-12">
          About
        </h4>
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
          The dream team of digital marketing.
        </p>
        <p className="w-fit mx-auto text-[10px] md:text-xs leading-10 capitalize main-color text-center">
          We grow businesses online.
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
        Keyboard
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
          <div className="mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] before:bg-gradient-to-tr before:from-[#051118] before:to-[#103743] before:w-full">
            <div className="p-2">
              <img src={about1} alt="Custom SEO Services" className="" />
            </div>
            <div className="relative w-full bg-[#103743] text-[#b7e4ea] text-xs pl-5 py-1 z-10">
              <div className="absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] right-[15px] top-[-22px]">
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">Master Adds</div>
              </div>
              <span>01</span>
            </div>
            <div className="px-5">
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                Master Adds - Your Marketing Partner
              </h3>
              <p className="mb-3.5 text-[10px] text-[#b7e4ea] pb-4 mb-6">
                We specialize in software development, website design, digital
                marketing, and web services. Our mission is to help our clients
                enhance their visibility and achieve success through innovative
                solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] before:bg-gradient-to-tr before:from-[#051118] before:to-[#103743] before:w-full">
            <div className="p-2">
              <img src={about2} alt="SEO Website Design" className="" />
            </div>
            <div className="relative w-full bg-[#103743] text-[#b7e4ea] text-xs pl-5 py-0.5 z-10">
              <div className="absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] right-[15px] top-[-22px]">
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">Master Adds</div>
              </div>
              <span>02</span>
            </div>
            <div className="px-5">
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                Why Master Adds?{" "}
              </h3>
              <p className="mb-3.5 text-[10px] text-[#b7e4ea] pb-4 mb-6">
                Choose Master Adds for your marketing needs. With over 300
                successful projects launched, we're dedicated to your success in
                the Middle East and beyond.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-16 relative before:absolute before:h-[calc(100%_-_50px)] before:bottom-0 before:rounded-xl before:z-[-1] before:bg-gradient-to-tr before:from-[#051118] before:to-[#103743] before:w-full">
            <div className="p-2">
              <img src={about3} alt="SEO Consulting" className="" />
            </div>
            <div className="relative w-full bg-[#103743] text-[#b7e4ea] text-xs pl-5 py-0.5 z-10">
              <div className="absolute px-2.5 flex w-[100px] items-center justify-between border border-[#103743] bg-[#051118] rounded-[60px] right-[15px] top-[-22px]">
                <span className="w-[7px] h-[7px] rounded-[50%] bg-[#b7e4ea]"></span>
                <div className="text-[10px] text-[#b7e4ea]">Master Adds</div>
              </div>
              <span>03</span>
            </div>
            <div className="px-5">
              <h3 className="mt-3.5 mb-2.5 font-black text-[#b7e4ea] text-l mb-0">
                Master Adds - Your First Choice
              </h3>
              <p className="text-[10px] text-[#b7e4ea] pb-4 mb-6">
                At Master Adds, we aim to be your top choice for digital
                marketing solutions in the Arab world. Let us help you achieve
                your goals today and beyond.
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
