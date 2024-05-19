import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Assets
import ClientLogo01 from "../assets/imgs/company1-removebg-preview.png";
import ClientLogo02 from "../assets/imgs/company2-removebg-preview.png";
import ClientLogo03 from "../assets/imgs/company3-removebg-preview.png";
import ClientLogo04 from "../assets/imgs/company4-removebg-preview.png";
import ClientLogo05 from "../assets/imgs/company5-removebg-preview.png";
import ClientLogo06 from "../assets/imgs/company6-removebg-preview.png";
import ClientLogo07 from "../assets/imgs/company7-removebg-preview.png";
import ClientLogo08 from "../assets/imgs/company8-removebg-preview.png";
import ClientLogo09 from "../assets/imgs/company9-removebg-preview.png";
import ClientLogo010 from "../assets/imgs/company10-removebg-preview.png";



export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
  
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="mx-auto max-w-7xl p-4 relative">
      <Slider {...settings}>
        <div>
          <img
            src={ClientLogo01}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo02}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo03}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo04}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo05}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo06}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo07}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo08}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md "
          />
        </div>
        <div>
          <img
            src={ClientLogo010}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <img
            src={ClientLogo09}
            alt="client logo"
            className="mx-auto h-32 object-cover rounded-md shadow-md"
          />
        </div>
      </Slider>
    </div>
  );
}
