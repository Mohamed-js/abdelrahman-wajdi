import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import bgImg from "../assets/imgs/bg-img.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="  bg-gradient-to-r bg-[#051118]  text-white p-4 md:p-12 text-center relative">
      <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      <h2 className="relative w-fit mx-auto  text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center" data-aos="fade-left">
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
          Contact Us
      </h2>

      <div className="flex flex-col gap-5	md:flex-row md:gap-0 justify-around items-center" >
        <div className="w-full  md:w-1/2 md:mr-10 rounded-xl pt-11 pb-8 px-8	bg-[#103743]" data-aos="fade-up" data-aos-duration="1600">
          <h3 className="text-start text-xl	mb-11 main-color">Send Message</h3>
          <form action="">
            <input
              className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4"
              type="text"
              placeholder="Your Name "
              name="name"
            />
            <input
              className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4"
              type="text"
              placeholder="Your Phone"
              name="mobile"
            />
            <textarea
              className="input block outline-none	 bg-inherit	mb-8 border-b w-full p-4 resize-none	h-24	"
              placeholder="The message"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="py-2.5 px-8 bg-[#0b2831] rounded-lg hover:bg-[#1c3f49] duration-300 cursor-pointer	"
            />
          </form>
        </div>
        <div className="w-full  md:w-1/2 text-start text-[#63a1b4]" >
          <h3 className="text-center md:text-start text-xl	mb-5 "data-aos="fade-left" data-aos-duration="1000">Contact Us</h3>
          <div className="flex items-center mb-3" data-aos="fade-left" data-aos-duration="1100">
            <FaLocationDot className="mr-2.5" />
            <div className="text-[#b7e4ea]">Egypt, elbhera, Kafr eldawar</div>
          </div>
          <div className="flex items-center mb-3" data-aos="fade-left" data-aos-duration="1200">
            <IoMdTime className="mr-2.5" />
            <div className="text-[#b7e4ea]">
              Business Hours: From 10:00 To 18:00
            </div>
          </div>
          <div className="flex items-center mb-5" data-aos="fade-left" data-aos-duration="1300">
            <LiaPhoneVolumeSolid className="mr-2.5" />
            <div className="text-[#b7e4ea]">
              <span className="block ">+201203388446</span>
              <span>+201553320453</span>
            </div>
          </div>
          <ul className="flex pl-7 border-l border-[#b7e4ea] mb-5 " data-aos="fade-left" data-aos-duration="1400">
            <li className="mr-3.5	" >
              <a
                href="#"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="mr-3.5">
              <a
                href="#"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <AiOutlineTikTok />
              </a>
            </li>
          </ul>
          <a
          data-aos="fade-left" data-aos-duration="1500"
            href="#"
            className="flex items-center text-xs rounded-3xl text-white bg-[#61ce70] w-fit py-2 px-5   hover:bg-[#1c3f49] duration-300 cursor-pointer"
          >
            <FaWhatsapp className="mr-2" size={20} />
            <p>Contact via WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
}
