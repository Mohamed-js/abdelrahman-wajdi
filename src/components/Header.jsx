import { useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import React from "react";


export default function Header() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Do something
    }, 1500); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white relative container mx-auto z-[100]">
      <h1
        className="text-3xl md:text-5xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        Transform Your Vision Into Reality
      </h1>

      <h2
        className="text-2xl md:text-4xl  text-center main-color"
        data-aos="fade-up"
      >
        Your Vision, Our Innovation
      </h2>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ overflow: "hidden" }}
        >
          <Link to="undercover" smooth={true} duration={500}>
            <RxDoubleArrowDown className="cursor-pointer" size={32} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
