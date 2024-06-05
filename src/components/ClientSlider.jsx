import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated ClientSlider component
export default function ClientSlider({ rtl, mt, images }) {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    rtl: rtl,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`mx-auto max-w-7xl p-4 relative ${mt ? "mt-4" : ""}`}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index} className="object-contain">
            <img
              src={imgSrc}
              alt={`client logo ${index + 1}`}
              className="mx-auto h-32 w-36 rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
