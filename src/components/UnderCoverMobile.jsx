import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function UnderCoverMobile() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  const underCoverData = [
    {
      title: "Nature's Beauty",
      description:
        "Explore the mesmerizing landscapes of Iceland. From towering waterfalls to majestic mountains, Iceland offers a breathtaking experience for nature lovers.",
      learnMore: "Learn More",
      img: "https://cdn.pixabay.com/photo/2019/01/02/10/20/iceland-3908498_640.jpg",
    },
    {
      title: "Ancient Wonders",
      description:
        "Step back in time and marvel at the ancient wonders of Egypt. Discover the mysteries of the pyramids, sail down the Nile, and uncover the secrets of a civilization lost to history.",
      learnMore: "Discover More",
      img: "https://cdn.pixabay.com/photo/2024/04/08/20/41/city-8684454_640.jpg",
    },
    {
      title: "Urban Escapes",
      description:
        "Escape the hustle and bustle of city life. From hidden parks to rooftop gardens, urban escapes offer a sanctuary amidst the chaos.",
      learnMore: "Find Peace",
      img: "https://cdn.pixabay.com/photo/2024/01/15/10/31/winter-8509844_640.jpg",
    },
    {
      title: "Urban Escapes",
      description:
        "Escape the hustle and bustle of city life. From hidden parks to rooftop gardens, urban escapes offer a sanctuary amidst the chaos.",
      learnMore: "Find Peace",
      img: "https://cdn.pixabay.com/photo/2024/04/12/14/59/ai-generated-8692122_1280.png",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 md:px-10" id="undercover " >
      <div className="flex items-center justify-center mt-10 md:mt-20 mb-12">
        <h1
          className="text-4xl md:text-5xl text-[#78b6db] font-bold"
          data-aos="fade"
        >
          M
        </h1>
      </div>

      <div className="space-y-16 md:space-y-32">
        {underCoverData.map((data, index) => (
          <div
            key={index}
            className="relative h-96 flex items-center justify-center mx-auto w-full max-w-5xl rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${data.img})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* bg-gradient-to-r from-[#01c4be] to-[#01c699] opacity-20 */}
            <div className="absolute inset-0 "></div>
            <div className="relative p-6 md:p-12 text-left z-10 text-white">
              <h2
                className="text-2xl md:text-4xl font-bold mb-4"
                data-aos="fade-right"
              >
                {data.title}
              </h2>
              <p className="mb-4 text-base md:text-lg" data-aos="fade-left">
                {data.description}
              </p>
              <button
                className="relative mt-4 px-8 py-3 bg-[#01c4be] text-white font-semibold text-sm md:text-base rounded-full transition transform-positive duration-300 ease-in-out shadow-lg hover:bg-[#019c9d] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
                data-aos="fade-bottom"
              >
                {data.learnMore}
                {/* deelte transform from styling*/}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
