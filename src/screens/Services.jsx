
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles.module.css";
import landingImg from "../assets/imgs/landing-image.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Page = ({ offset, gradient, title, description, onClick, img }) => {
  
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={handleClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={handleClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer
        className={`${styles.text}`}
        offset={offset}
        speed={0.3}
        
      >
        <div className="mt-10 ml-10 p-4 ">

        <span className={`${styles.number}`}>0{offset + 1}</span>
        <img src={img} className="w-[300px] m-auto" />
        <h1 className="text-[#545864] text-base md:text-3xl text-center p-4">{title}</h1>
        <p className="text-[#545864] text-base md:text-2xl text-center p-4">{description}</p>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default function Service() {
  const parallax = useRef(null);
  const totalPages = 3; // Update this to the total number of pages

  const scroll = (to) => {
    if (parallax.current) {
      const currentOffset = parallax.current.offset;
      let newOffset;

      if (to === "next") {
        newOffset = currentOffset < totalPages - 1 ? currentOffset + 1 : 0;
      } else if (to === "prev") {
        newOffset = currentOffset > 0 ? currentOffset - 1 : totalPages - 1;
      } else {
        newOffset = to;
      }

      parallax.current.scrollTo(newOffset);
    }
  };

  const services = [
    {
      title: "Web Design",
      description: "Create stunning and user-friendly websites tailored to your brand's needs.",
      gradient: "pink",
      img:"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg"
    },
    {
      title: "Mobile App Development",
      description: "Build innovative and feature-rich mobile applications for iOS and Android platforms.",
      gradient: "teal",
      img:"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg"
    },
    {
      title: "Digital Marketing",
      description: "Increase your online presence and drive traffic to your website with strategic digital marketing campaigns.",
      gradient: "tomato",
      img:"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg"
    },
  ];
  

  return (
    <div style={{ background: "#dfdfdf" }}>
    <div className="fixed left-2  md:left-4 top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl text-[#fddc15] z-30 cursor-pointer">
        <MdKeyboardArrowLeft onClick={() => scroll("prev")} />
      </div>
      <div className="fixed right-2  md:right-4 top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl text-[#fddc15] z-30 cursor-pointer">
        <MdKeyboardArrowRight onClick={() => scroll("next")} />
      </div>
      <Parallax
        className={styles.container}
        style={{ overflow: "hidden" }}
        ref={parallax}
        pages={3}
        horizontal
      >
        {services.map((service, index) => (
          <Page
            key={index}
            offset={index}
            title={service.title}
            description={service.description}
            img={landingImg}
            gradient={service.gradient}
            onClick={() => scroll("next")}
          />
        ))}
      </Parallax>
    </div>
  );
}
