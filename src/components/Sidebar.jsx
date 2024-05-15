import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export default function Sidebar({ handleSidebar, setHandleSidebar }) {
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

  return (
    <div className="fixed top-0 left-0 bottom-0 z-[300] bg-gradient-to-r from-[#05121e] to-[#091921] w-full h-full text-white overflow-y-auto">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setHandleSidebar((prev) => !prev)}
          className="text-[#78b6db] text-2xl font-bold cursor-pointer"
        >
          X
        </button>
      </div>
      <div className="text-center mt-12 mb-8" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-[#78b6db]">Logo</h1>
      </div>
      <ul className="space-y-4 text-center">
        <Link
          to="cover"
          smooth={true}
          duration={500}
          onClick={() => setHandleSidebar((prev) => !prev)}
        >
          <li
            className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Home
          </li>
        </Link>
        <Link
          to="undercover"
          smooth={true}
          duration={500}
          onClick={() => setHandleSidebar((prev) => !prev)}
        >
          <li
            className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            UnderCover
          </li>
        </Link>
        <LinkRouter
          to="/about-us"
          onClick={() => setHandleSidebar((prev) => !prev)}
        >
          <li
            className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            About Us
          </li>
          <li
            className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Services
          </li>
        </LinkRouter>
        <li
          className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Our Work
        </li>
        <li
          className="p-4 hover:text-[#78b6db] transition-colors duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          العربية
        </li>
      </ul>
      <div className="absolute bottom-4 left-4 text-xs text-gray-400">
        © 2024 Company. All Rights Reserved.
      </div>
    </div>
  );
}
