import React from "react";
import logo from "../assets/imgs/logo.jpeg";
import bgImg from "../assets/imgs/bg-img.jpg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
export default function Footer() {
  // bg-gradient-to-tr	from-[#051118] to-[#103743]
  return (
    <div className="bg-[#051118]  relative  ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>

      <div className=" p-4  md:py-9 md:px-14 text-[#b7e4ea] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5">
        <div className=" mb-5 pb-5  border-b border-[#b7e4ea2e] md:col-span-2	lg:col-span-1 lg:mb-0">
          <h2 className="relative text-3xl	font-semibold	 border-b-2 border-[#b7e4ea] w-fit pb-1 mb-3 z-10	">
            <svg
              className="absolute w-[200px] h-[200px] top-[-72px] left-[-66px]  opacity-50 z-[-1]	"
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
            <img src={logo} alt="Logo" className="w-[90px] rounded-lg" />
          </h2>
          <p className="leading-3	text-[#62a0a8]">
            Web Design & Digital Marketing
          </p>
          <p className="text-[#62a0a8]">Increase Your Online Presence</p>
        </div>
        <div className="mb-5 md:mb-0 pb-5 border-b border-[#b7e4ea2e]">
          <h3 className="mb-4 text-xl">Contact</h3>
          <div className="mb-3 flex items-center">
            <FaPhoneVolume className="mr-2.5 w-4 h-4 " />
            <span className="text-[#62a0a8]">9.66501E+11</span>
          </div>
          <div className="mb-3 flex items-center">
            <FaEnvelope className="mr-2.5 w-4 h-4" />
            <span className="text-[#62a0a8]">info@adsmaster.me</span>
          </div>
          <div className="mb-3 flex items-start">
  <div className="mb-3 flex items-start">
  <div className="w-8">
    <FaMapMarkerAlt className="mr-2.5 w-4 h-4" />
  </div>
  <div className="max-w-xs">
    <span className="text-[#62a0a8]">
      Office Number 4, 2253 Mohammed bin Abdullah bin Abdul Latif, 7913,
      First Floor, Riyadh 12463, Kingdom of Saudi Arabia
    </span>
  </div>
</div>

  {/*             {/* مكتب رقم 4، 2253 محمد بن عبدالله بن عبداللطيف، 7913، الدور الاول، الرياض 12463، المملكة العربية السعودية */}
</div>

          {/* <ul className="flex ml-8">
        <li className="mr-5">
          <a href="#" className="hover:text-[#1c3f49] duration-300">
            <FaFacebookF />
          </a>
        </li>
        <li className="mr-5">
          <a href="#" className="hover:text-[#1c3f49] duration-300">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#1c3f49] duration-300">
            <FaYoutube />
          </a>
        </li>
      </ul> */}
        </div>
        <div className="text-[#62a0a8] pb-5 border-b border-[#b7e4ea2e] relative">
          <h3 className="mb-4 text-xl font-semibold text-[#b7e4ea]">
            Main Pages
          </h3>
          <div className="flex flex-wrap">
            <Link
              to="/"
              className="link-item flex items-center mr-3.5 cursor-pointer hover:text-[#fddc15] duration-300"
            >
              <span className="w-2 h-2 bg-[#b7e4ea] rounded-full mr-2"></span>
              <span className="text-sm cursor-pointer">Home</span>
            </Link>
            <Link
              to="/about-us"
              className="link-item flex items-center mr-3.5 cursor-pointer hover:text-[#fddc15] duration-300"
            >
              <span className="w-2 h-2 bg-[#b7e4ea] rounded-full mr-2"></span>
              <span className="text-sm">About</span>
            </Link>
            <Link
              to="/our-works"
              className="link-item flex items-center mr-3.5 cursor-pointer hover:text-[#fddc15] duration-300"
            >
              <span className="w-2 h-2 bg-[#b7e4ea] rounded-full mr-2"></span>
              <span className="text-sm">Our Works</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
