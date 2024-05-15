// import React, { useRef } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// const Page = ({ offset, gradient, onClick }) => {
//   const handleClick = () => {
//     onClick();
//   };

//   // Define unique content for each page
//   const contentMap = [
//     {
//       title: "Service 1",
//       description: "Description of Service 1",
//       gradientFrom: "gray-900",
//       gradientTo: "red-800"
//     },
//     {
//       title: "Service 2",
//       description: "Description of Service 2",
//       gradientFrom: "gray-900",
//       gradientTo: "blue-600"
//     },
//     {
//       title: "Service 3",
//       description: "Description of Service 3",
//       gradientFrom: "gray-900",
//       gradientTo: "tomato-600"
//     }
//   ];

//   const { title, description, gradientFrom, gradientTo } = contentMap[offset];
//   console.log(`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`)
//   return (
//     <>
//       <ParallaxLayer offset={offset} speed={0.2} onClick={handleClick}>
//         <div className={`absolute inset-0 bg-gradient-to-br from-red-600 to-gray-800`} />
//         <div
//           className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-4xl cursor-pointer"
//           onClick={handleClick}
//         >
//           <span>{title}</span>
//           <p>{description}</p>
//         </div>
//       </ParallaxLayer>
//     </>
//   );
// };

// export default function Service() {
//   const parallax = useRef(null);
//   const totalPages = 3; // Update this to the total number of pages

//   const scroll = (to) => {
//     if (parallax.current) {
//       // Get current offset
//       const currentOffset = parallax.current.offset;
//       let newOffset;

//       // Determine new offset based on the direction of scrolling
//       if (to === "next") {
//         newOffset = currentOffset < totalPages - 1 ? currentOffset + 1 : 0; // Loop back to 0 if at the end
//       } else if (to === "prev") {
//         newOffset = currentOffset > 0 ? currentOffset - 1 : totalPages - 1; // Loop to totalPages - 1 if at the beginning
//       } else {
//         newOffset = to;
//       }

//       // Scroll to the new offset
//       parallax.current.scrollTo(newOffset);
//     }
//   };

//   return (
//     <div style={{ background: "#dfdfdf" }}>
//       <Parallax
//         className="h-screen w-screen"
//         style={{ overflow: "hidden" }}
//         ref={parallax}
//         pages={3}
//         horizontal
//       >
//         {/* Make ParallaxLayer clickable by passing onClick function */}
//         <Page offset={0} onClick={() => scroll("prev")} />
//         <Page offset={1} onClick={() => scroll("prev")} />
//         <Page offset={2} onClick={() => scroll("prev")} />
//       </Parallax>
//     </div>
//   );
// }

import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles.module.css";

const Page = ({ offset, gradient, title, description, onClick }) => {
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
        className={`${styles.text} cursor-pointer`}
        offset={offset}
        speed={0.3}
        onClick={handleClick}
        
      >
        <div className="mt-10 ml-10 p-4 ">

        <span className={`${styles.number}`}>0{offset + 1}</span>
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
    },
    {
      title: "Mobile App Development",
      description: "Build innovative and feature-rich mobile applications for iOS and Android platforms.",
      gradient: "teal",
    },
    {
      title: "Digital Marketing",
      description: "Increase your online presence and drive traffic to your website with strategic digital marketing campaigns.",
      gradient: "tomato",
    },
  ];
  

  return (
    <div style={{ background: "#dfdfdf" }}>
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
            gradient={service.gradient}
            onClick={() => scroll("next")}
          />
        ))}
      </Parallax>
    </div>
  );
}
