// import React, { useEffect, useRef } from "react";

// export default function UnderCover() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       const scrollDirection = scrollTop > lastScrollTop.current ? "down" : "up";

//       underCoverRefs.forEach((ref, index) => {
//         if (ref.current) {
//           const scrollPosition = window.pageYOffset;
//           const cardPosition =
//             ref.current.getBoundingClientRect().top + scrollPosition;
//           const offset = (scrollPosition - cardPosition) * 0.6;
//           const scaleFactor = scrollDirection === "down" ? 1.5 : 1.5; // Adjust the scale factor as needed

//           ref.current.style.transform = `translateY(${offset}px) scale(${scaleFactor})`;
//         }
//       });

//       lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const lastScrollTop = useRef(0);
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
//   ];

//   const underCoverRefs = underCoverData.map(() => useRef(null));

//   return (
//     <div className="min-h-screen p-10" id="undercover">
//       <div className="flex items-center justify-center mt-20">
//         <h1 className="text-4xl text-[#78b6db]">UnderCover</h1>
//       </div>

//       {underCoverData.map((data, index) => (
//         <div
//           key={index}
//           className="text-left relative h-96 flex items-center justify-center my-32 w-[80%] md:w-[80%] m-auto rounded-lg shadow-lg overflow-hidden"
//         >
//           <div
//             ref={underCoverRefs[index]}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${data.img})`,
//               willChange: "transform",
//             }}
//           ></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-[#01c4be] to-[#01c699] opacity-10"></div>
//           <div className="relative p-4 md:p-8 text-left z-10 text-[#bde1e8]">
//             <h2 className="text-xl md:text-3xl font-bold mb-4">{data.title}</h2>
//             <p className="mb-2 text-sm md:base">{data.description}</p>
//             <button className="mt-4 px-4 py-2 bg-white text-[#79dbe6] rounded-full font-semibold text-sm md:base">
//               {data.learnMore}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function UnderCover() {
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
  ];

  return (
    <div className="min-h-screen py-10 px-4 md:px-10" id="undercover">
      <div className="flex items-center justify-center mt-10 md:mt-20 mb-12">
        <h1
          className="text-4xl md:text-5xl text-[#78b6db] font-bold"
          data-aos="fade"
        >
          UnderCover
        </h1>
      </div>

      <div className="space-y-16 md:space-y-32" >
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4" data-aos="fade-right">
                {data.title}
              </h2>
              <p className="mb-4 text-base md:text-lg" data-aos="fade-left">{data.description}</p>
              <button className="relative mt-4 px-8 py-3 bg-[#01c4be] text-white font-semibold text-sm md:text-base rounded-full transition transform duration-300 ease-in-out shadow-lg hover:bg-[#019c9d] hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-white before:opacity-20 before:blur-lg before:rounded-full before:transform before:scale-105 before:transition before:duration-300 before:ease-in-out hover:before:opacity-10 hover:before:scale-125"
              data-aos="fade-bottom">
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
