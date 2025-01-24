/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from "../assets/imgs/services1.jpg";
import service2 from "../assets/imgs/services2.jpg";
import { useTranslation } from "react-i18next";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// Custom Arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
      onClick={onClick}
    >
      <GrFormPrevious className="text-white" size={40} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
      onClick={onClick}
    >
      <GrFormNext className="text-white" size={40} />
    </div>
  );
};

const Slide = ({ img, title, description }) => {
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

  return (
    <div className="relative h-[60vh] md:h-[90vh] w-full rounded-3xl overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{
          backgroundImage: `url(${img})`,
          transform: direction === "rtl" ? "scaleX(1)" : "scaleX(-1)",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-12 md:px-32">
        <h2
          className={`text-xl md:text-6xl font-bold mb-4 ${
            direction === "ltr" ? "mr-auto" : "ml-auto"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg md:text-3xl ${
            direction === "ltr" ? "mr-auto text-left" : "ml-auto text-right"
          } w-[80%]  lg:w-1/2`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      img: service1,
      title: t("services.title"),
      description: t("services.description"),
    },
    {
      img: service2,
      title: t("services.title2"),
      description: t("services.description2"),
    },
  ];

  return (
    <div className="relative w-[90%] m-auto mt-10">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Slide {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
