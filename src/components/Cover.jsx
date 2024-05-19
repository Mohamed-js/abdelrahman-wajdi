import { useEffect, useRef } from "react";
import cover1 from "../assets/imgs/cover1.jpg"
import cover2 from "../assets/imgs/cover2.jpg"
import cover3 from "../assets/imgs/cover3.jpg"
import cover4 from "../assets/imgs/cover4.jpg"
import cover5 from "../assets/imgs/cover5.jpg"
import cover6 from "../assets/imgs/cover6.png"
const images = [
  cover5,
  cover6,
  cover2,
  cover4,
  cover1,
  "https://cdn.pixabay.com/photo/2015/03/29/08/47/entrepreneur-696966_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/21/15/13/work-harder-1845901_640.jpg",
  "https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_640.jpg",
];

export default function Cover() {
  const galleryWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const galleryWrapper = galleryWrapperRef.current;

      if (galleryWrapper) {
        const rows = galleryWrapper.children;
        Array.from(rows).forEach((row, index) => {
          // const offset = index % 2 === 0 ? scrollTop : -scrollTop;
          const offset = index % 2 === 0 ? scrollTop * 0.5 : -scrollTop * 0.5;

          row.style.transform = `translateX(${offset}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[300%] w-[300%] absolute top-[-350px] md:top-[350px] left-[-300px] md:left-[-150px] ">
      <div className=" h-full w-full">
        <div
          className="flex flex-col transform-positive justify-end items-center gap-6"
          ref={galleryWrapperRef}
          style={{ position: "relative", height: "100%" }}
        >
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
          <Row
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
              images[6],
              images[7],
              images[8],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const Row = ({ images }) => {
  return (
    <div className="flex w-[180%]">
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            marginInline: "0.5rem",
            borderRadius: "0.5rem",
          }}
          className="rounded-lg overflow-hidden min-w-52 md:min-w-96"
        ></div>
      ))}
    </div>
  );
};

// import { useEffect, useRef } from 'react';

// const images = [
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/04/09/23/48/lake-6615144_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/29/07/40/landscape-6123476_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
//   "https://cdn.pixabay.com/photo/2023/03/21/12/55/beach-6101057_1280.jpg",
// ];

// export default function Cover() {
//   const galleryWrapperRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const galleryWrapper = galleryWrapperRef.current;

//       if (galleryWrapper) {
//         const columns = galleryWrapper.children;
//         Array.from(columns).forEach((column, index) => {
//           const offset = index % 2 === 0 ? scrollTop : -scrollTop;
//           column.style.transform = `translateY(${offset}px)`;
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="h-[200%] width-[200%] absolute top-[-300px] left-[-50px] overflow-hidden ">
//       <div className="overflow-hidden h-full">
//         <div className="flex justify-center transform items-center gap-4" ref={galleryWrapperRef} style={{ position: 'relative', height: '100%' }}>
//         <Column images={[images[0], images[1], images[2], images[3], images[4], images[5], images[11], images[11],images[11],images[11]]} />
//           <Column images={[images[6], images[7], images[8], images[9], images[10], images[11],images[11],images[11],images[11],images[11]]}  />
//           <Column images={[images[6], images[7], images[8], images[9], images[10], images[11],images[11], images[11],images[11],images[11]]} />
//           <Column images={[images[6], images[7], images[8], images[9], images[10], images[11],images[11], images[11],images[11],images[11]]} />
//           <Column images={[images[6], images[7], images[8], images[9], images[10], images[11]]} />
//           <Column images={[images[6], images[7], images[8], images[9], images[10], images[11],images[11]]} />
//           <Column images={[images[6], images[7], images[8], images[9]]} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const Column = ({ images }) => {
//   return (
//     <div className="h-full w-full">
//       {images.map((src, i) => {
//         return (
//           <div key={i} className='' style={{ height: '16.66%' }} >
//             <img
//               src={src}
//               alt="image"
//               className="w-[300px] h-full  rounded-lg overflow-hidden mt-4 mx-auto"
//               style={{ maxWidth: 'none', maxHeight: 'none' }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
