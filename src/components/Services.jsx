import React, { useEffect } from "react";
import service1 from "../assets/imgs/service1.jpg";
import service2 from "../assets/imgs/service2.jpg";
import service3 from "../assets/imgs/service3.jpg";
import service4 from "../assets/imgs/service4.jpg";
import service5 from "../assets/imgs/service5.jpg";
import service6 from "../assets/imgs/service6.png";
import service7 from "../assets/imgs/service7.jpg";
import service8 from "../assets/imgs/service8.png";
import service9 from "../assets/imgs/service9.jpg";

import bgImg from "../assets/imgs/bg-img.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  // https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg
  const teamCard = [
    {
      name: "Creating the marketing plan",
      description: "Description",
      img: service1,
    },
    {
      name: "Digital marketing and marketing campaigns",
      description: "Description",
      img: service2,
    },
    {
      name: "Managing social media accounts",
      description: "Description",
      img: service3,
    },
    { name: "Creative design", description: "Description", img: service4 },
    {
      name: "Search engine optimization",
      description: "Description",
      img: service5,
    },
    {
      name: "Content writing of all types",
      description: "Description",
      img: service6,
    },
    {
      name: "Creating and developing websites",
      description: "Description",
      img: service7,
    },
    { name: "Email marketing", description: "Description", img: service8 },
    { name: "Marketing consulting", description: "Description", img: service9 },
  ];
  return (
    <div
      className="relative z-[1] py-[100px] bg-gradient-to-r bg-[#051118] p-2"
      id="services"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <h2
        className="relative w-fit mx-auto  text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
        data-aos="fade-left"
      >
        <svg
          className="absolute w-[200px] h-[200px] top-[-82px] left-[-35px]  opacity-50 z-[-1]	"
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
        Services
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mx-auto px-[15px]">
        {teamCard.map((card, i) => {
          return (
            <div
              data-aos="fade-up"
              key={i}
              className=" group  relative before:bg-gradient-to-tr	before:from-[#051118] before:to-[#103743] before:content-[''] before:absolute  before:h-full 
      before:transition-[0.3s] before:rounded-lg before:w-[calc(100%_-_60px)] 
      before:z-[-2] before:right-0 before:top-0 after:content-[''] after:absolute 
      after:h-full after:transition-[0.3s] 
      after:rounded-lg after:right-0 after:top-0  after:z-[-1] after:bg-[#11333d] 
      after:w-0 hover:after:w-[calc(100%_-_60px)]"
            >
              <div className="flex items-center pt-[60px]">
                <img
                  src={card.img}
                  alt=""
                  className="group-hover:grayscale	 w-[calc(100%_-_60px)] transition-[0.3s] rounded-[15px]"
                />
                <div className="flex flex-col items-center gap-5 ">
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaFacebookF className="text-[#b7e4ea] transition-[0.3s]  group-hover:z-10 icon " />
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaXTwitter className="text-[#b7e4ea] transition-[0.3s]  group-hover:z-10 icon " />
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaWhatsapp className="text-[#b7e4ea] transition-[0.3s]  group-hover:z-10 icon " />
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <AiOutlineTikTok className="text-[#b7e4ea] transition-[0.3s]  group-hover:z-10 icon " />
                  </a>
                </div>
              </div>
              <div className="pl-20">
                <h3 className="mt-3.5 font-black py-3 mx-2		 text-[#b7e4ea]  text-[18px] transition-[0.3s]  mb-0">
                  {card.name}
                </h3>
                {/* <p className=" mb-3.5 text-[#fddc15] transition-[0.3s] ">
                  {card.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// group-hover:text-[#144f61]
