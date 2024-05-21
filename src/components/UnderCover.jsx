import React, { useEffect } from "react";
import bgImg from "../assets/imgs/bg-img.jpg";
import AOS from "aos";
import insights1 from "../assets/imgs/insights1.jpg";
import insights2 from "../assets/imgs/insights2.jpg";
import insights3 from "../assets/imgs/insights3.jpg";
import insights4 from "../assets/imgs/insights4.png";
import insights5 from "../assets/imgs/insights5.jpg";
import insights6 from "../assets/imgs/insights6.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
export default function UnderCover() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);
  const marketingConceptsData = [
    {
      title: t("insights.socialMedia"),
      description: t("insights.socialMediaDescription"),
      learnMore: t("insights.learnMore"),
      img: insights1,
    },
    {
      title: t("insights.seo"),
      description:
      t("insights.seoDescription"),
      learnMore: t("insights.learnMore"),
      img: insights2,
    },
    {
      title: t("insights.emailCampaign"),
      description:
      t("insights.emailCampaignDescription"),
      learnMore: t("insights.learnMore"),
      img: insights6,
    },
    {
      title: t("insights.dataDriven"),
      description:
      t("insights.dataDrivenDescription") ,
      learnMore: t("insights.learnMore"),
      img: insights4,
    },
  ];

  return (
    <div
      className="min-h-screen py-10 px-4 md:px-10 bg-[#051118]   relative"
      id="insights"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <div className="flex items-center justify-center mt-10 md:mt-20 mb-12 relative">
        <h1
          className="relative w-fit mx-auto  text-4xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
          data-aos="fade"
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
          {t("insights.title")}
        </h1>
      </div>

      <div className="space-y-16 md:space-y-32">
        {marketingConceptsData.map((data, index) => (
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
            <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
            {/* Overlay with low opacity */}
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
                className="relative mt-4 px-8 py-3 bg-[#fddc15] text-black font-semibold text-sm md:text-base rounded-full transition transform-positive duration-300 ease-in-out shadow-lg hover:bg-[#ffe44c] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
                data-aos="fade-bottom"
              >
                {data.learnMore}
                {/* deelte transform from styling*/}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="h-10 w-full flex justify-center items-center">
        <div className="h-1 w-full bg-gray-400"></div>
      </div> */}
    </div>
  );
}

// import React, { useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export default function UnderCover() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1500, easing: "ease-in-out" });

//     // Cleanup function
//     sectionRef.current.scrollIntoView({ behavior: "smooth" });

//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   const underCoverData = [
//     {
//       title: "Nature's Beauty",
//       description:
//         "Explore the mesmerizing landscapes of Iceland. From towering waterfalls to majestic mountains, Iceland offers a breathtaking experience for nature lovers.",
//       learnMore: "Learn More",
//       img: "https://cdn.pixabay.com/photo/2019/01/02/10/20/iceland-3908498_640.jpg",
//     },
//     {
//       title: "Ancient Wonders",
//       description:
//         "Step back in time and marvel at the ancient wonders of Egypt. Discover the mysteries of the pyramids, sail down the Nile, and uncover the secrets of a civilization lost to history.",
//       learnMore: "Discover More",
//       img: "https://cdn.pixabay.com/photo/2024/04/08/20/41/city-8684454_640.jpg",
//     },
//     {
//       title: "Urban Escapes",
//       description:
//         "Escape the hustle and bustle of city life. From hidden parks to rooftop gardens, urban escapes offer a sanctuary amidst the chaos.",
//       learnMore: "Find Peace",
//       img: "https://cdn.pixabay.com/photo/2024/01/15/10/31/winter-8509844_640.jpg",
//     },
//     {
//       title: "Urban Escapes",
//       description:
//         "Escape the hustle and bustle of city life. From hidden parks to rooftop gardens, urban escapes offer a sanctuary amidst the chaos.",
//       learnMore: "Find Peace",
//       img: "https://cdn.pixabay.com/photo/2024/04/12/14/59/ai-generated-8692122_1280.png",
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen py-10 px-4 md:px-10 bg-[#081014] flex gap-8"
//       id="undercover"
//     >
//             <div ref={sectionRef} />

//       <Parallax pages={6}>
//         <ParallaxLayer offset={0} speed={0.5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <h1 className="text-5xl md:text-6xl text-white font-bold tracking-wide text-center">Start Your Journey</h1>
//         </ParallaxLayer>
//         <ParallaxLayer
//           speed={0.5}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "left",
//           }}
//           sticky={{ start: 0, end: 4 }}
//         >
//           <div className="flex items-center justify-left mt-10 md:mt-20 mb-12">
//             <div
//               className="sticky top-0 h-96 flex items-center justify-center mx-auto w-full max-w-5xl rounded-lg shadow-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${"https://cdn.pixabay.com/photo/2024/04/12/14/59/ai-generated-8692122_1280.png"})`,
//                 backgroundAttachment: "fixed",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 "></div>
//               <div className="relative p-6 md:p-12 text-left z-10 text-white">
//                 <h2
//                   className="text-2xl md:text-4xl font-bold mb-4"
//                   data-aos="fade-right"
//                 >
//                   Welcome
//                 </h2>
//                 <p className="mb-4 text-base md:text-lg" data-aos="fade-left">
//                   Start your journey with us
//                 </p>
//                 <button
//                   className="relative mt-4 px-8 py-3 bg-[#01c4be] text-white font-semibold text-sm md:text-base rounded-full transition duration-300 ease-in-out shadow-lg hover:bg-[#019c9d] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
//                   data-aos="fade-bottom"
//                 >
//                   Learn more
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ParallaxLayer>

//         {underCoverData.map((data, index) => (
//           <ParallaxLayer key={index} offset={index + 1} speed={1 - index * 0.1}>
//             {" "}
//             <div
//               className="relative h-96 flex items-center justify-center mx-auto w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${data.img})`,
//                 backgroundAttachment: "fixed",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 "></div>
//               <div className="relative p-6 md:p-12 text-left z-10 text-white">
//                 <h2
//                   className="text-2xl md:text-4xl font-bold mb-4"
//                   data-aos="fade-right"
//                 >
//                   {data.title}
//                 </h2>
//                 <p className="mb-4 text-base md:text-lg" data-aos="fade-left">
//                   {data.description}
//                 </p>
//                 <button
//                   className="relative mt-4 px-8 py-3 bg-[#01c4be] text-white font-semibold text-sm md:text-base rounded-full transition duration-300 ease-in-out shadow-lg hover:bg-[#019c9d] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
//                   data-aos="fade-bottom"
//                 >
//                   {data.learnMore}
//                 </button>
//               </div>
//             </div>
//           </ParallaxLayer>
//         ))}
//       </Parallax>
//     </div>
//   );
// }
