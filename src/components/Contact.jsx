// import React, { useEffect } from "react";
// import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { AiOutlineTikTok } from "react-icons/ai";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdTime } from "react-icons/io";
// import { LiaPhoneVolumeSolid } from "react-icons/lia";
// import bgImg from "../assets/imgs/bg-img.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//   const { t } = useTranslation();
//   const direction =
//     localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";

//   useEffect(() => {
//     AOS.init({ duration: 1500, easing: "ease-in-out" });

//     // Cleanup function
//     return () => {
//       AOS.refresh();
//     };
//   }, []);
//   return (
//     <div
//       className="  bg-gradient-to-r bg-[#051118]  text-white p-4 md:p-12 text-center relative"
//       id="contact-us"
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-5"
//         style={{
//           backgroundImage: `url(${bgImg})`,
//         }}
//       ></div>
//       <h2
//         className="relative w-fit mx-auto  text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
//         data-aos="fade-left"
//       >
//         <svg
//           className="absolute w-[200px] h-[200px] top-[-82px] left-[-35px]  opacity-50 z-[-1]	"
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           // xmlns:xlink="http://www.w3.org/1999/xlink"
//           // xmlns:svgjs="http://svgjs.dev/svgjs"
//           viewBox="0 0 2000 2000"
//         >
//           <g>
//             <g fill="hsl(194, 45%, 50%)" id="star">
//               <path
//                 d="M 500 500 C 1000 1000 1000 1000 1300 750 C 1000 1000 1000 1000 2000 2000 C 1000 1000 1000 1000 750 1300 C 1000 1000 1000 1000 500 500"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </g>
//           </g>
//         </svg>
//         {t("contactUs.title")}
//       </h2>

//       <div className="flex flex-col gap-5	md:flex-row md:gap-0 justify-around items-center">
//         <div
//           className={`w-full md:w-1/2 ${
//             direction === "ltr" ? "md:mr-10" : "md:ml-10"
//           } rounded-xl pt-11 pb-8 px-8 bg-[#103743]`}
//           data-aos="fade-up"
//           data-aos-duration="1600"
//         >
//           <h3 className="text-start text-xl	mb-11 main-color">
//             {" "}
//             {t("contactUs.sendMessage")}
//           </h3>
//           <form action="">
//             <input
//               className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4"
//               type="text"
//               placeholder={t("contactUs.yourName")}
//               name="name"
//             />
//             <input
//               className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4"
//               type="text"
//               placeholder={t("contactUs.yourPhone")}
//               name="mobile"
//             />
//             <textarea
//               className="input block outline-none	 bg-inherit	mb-8 border-b w-full p-4 resize-none	h-24	"
//               placeholder={t("contactUs.theMsg")}
//               name="message"
//             ></textarea>
//             <input
//               type="submit"
//               value={t("contactUs.send")}
//               className="py-2.5 px-8 bg-[#0b2831] rounded-lg hover:bg-[#1c3f49] duration-300 cursor-pointer	"
//             />
//           </form>
//         </div>
//         <div className="w-full  md:w-1/2 text-start text-[#63a1b4]">
//           <h3
//             className="text-center md:text-start text-xl	mb-5 "
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1000"
//           >
//             {t("contactUs.getInTouch")}
//           </h3>
//           <div
//             className="mb-3 flex items-start"
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1100"
//           >
//             <div className="">
//               <FaMapMarkerAlt className={`${direction === "ltr" ? "mr-2.5" :"ml-2.5"}`} />
//             </div>
//             <div className="max-w-xs">
//               <span className="text-[#b7e4ea]">{t("contactUs.address")}</span>
//             </div>
//           </div>
//           <div
//             className="flex items-center mb-3"
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1200"
//           >
//             <IoMdTime className={`${direction === "ltr" ? "mr-2.5" :"ml-2.5"}`} />
//             <div className="text-[#b7e4ea]">{t("contactUs.workingHours")}</div>
//           </div>
//           <div
//             className="flex items-center mb-5"
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1300"
//           >
//             <LiaPhoneVolumeSolid className={`${direction === "ltr" ? "mr-2.5" :"ml-2.5"}`} />
//             <div className="text-[#b7e4ea]">
//               <span className="block "> {t("contactUs.phone")}</span>
//               {/* <span>+201553320453</span> */}
//             </div>
//           </div>
//           <ul
//             className="flex pl-7 border-l border-[#b7e4ea] mb-5 "
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1400"
//           >
//             <li className={`${direction === "ltr" ? "mr-3.5" :"ml-3.5"}`}>
//               <a
//                 href="#"
//                 className="hover:text-[#307f95] duration-300 cursor-pointer"
//               >
//                 <FaFacebookF />
//               </a>
//             </li>
//             <li className={`${direction === "ltr" ? "mr-3.5" :"ml-3.5"}`}>
//               <a
//                 href="#"
//                 className="hover:text-[#307f95] duration-300 cursor-pointer"
//               >
//                 <FaXTwitter />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-[#307f95] duration-300 cursor-pointer"
//               >
//                 <AiOutlineTikTok />
//               </a>
//             </li>
//           </ul>
//           <a
//             data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
//             data-aos-duration="1500"
//             href="#"
//             className="flex items-center text-xs rounded-3xl text-white bg-[#1c3f49] w-fit py-2 px-5   hover:bg-[#214a55] duration-300 cursor-pointer"
//           >
//             <FaWhatsapp className={`${direction === "ltr" ? "mr-2" :"ml-2"}`} size={20} />
//             <p>{t("contactUs.whatsApp")}</p>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaCheckCircle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import emailjs from "emailjs-com";
import bgImg from "../assets/imgs/bg-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    //  Pulbic key: 4NoHlOBMRT4eW_XXa
    // template id: template_k1ccei8
    // service_ek4f4f6
    emailjs
      .sendForm(
        "service_ek4f4f6",
        "template_k1ccei8",
        e.target,
        "4NoHlOBMRT4eW_XXa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="bg-gradient-to-r bg-[#051118] text-white p-4 md:p-12 text-center relative"
      id="contact-us"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <h2
        className="relative w-fit mx-auto text-3xl font-semibold leading-10 drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center"
        data-aos="fade-left"
      >
        <svg
          className="absolute w-[200px] h-[200px] top-[-82px] left-[-35px] opacity-50 z-[-1]"
          xmlns="http://www.w3.org/2000/svg"
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
        {t("contactUs.title")}
      </h2>

      {showSuccess && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg flex items-center gap-2">
            <FaCheckCircle className="text-green-500" size={24} />
            <span className="text-green-500">
              {" "}
              {t("contactUs.sentSuccessfully")}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-around items-center">
        <div
          className={`w-full md:w-1/2 ${
            direction === "ltr" ? "md:mr-10" : "md:ml-10"
          } rounded-xl pt-11 pb-8 px-8 bg-[#103743]`}
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <h3 className="text-start text-xl mb-11 main-color">
            {t("contactUs.sendMessage")}
          </h3>
          <form onSubmit={sendEmail}>
            <input
              className="input block outline-none bg-inherit mb-2 border-b w-full p-4"
              type="text"
              placeholder={t("contactUs.yourName")}
              name="name"
              required
            />
            <input
              className="input block outline-none bg-inherit mb-2 border-b w-full p-4"
              type="text"
              placeholder={t("contactUs.yourPhone")}
              name="mobile"
              required
            />
            <textarea
              className="input block outline-none bg-inherit mb-8 border-b w-full p-4 resize-none h-24"
              placeholder={t("contactUs.theMsg")}
              name="message"
              required
            ></textarea>
            <input
              type="submit"
              value={t("contactUs.send")}
              className="py-2.5 px-8 bg-[#0b2831] rounded-lg hover:bg-[#1c3f49] duration-300 cursor-pointer"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2 text-start text-[#63a1b4]">
          <h3
            className="text-center md:text-start text-xl mb-5"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
          >
            {t("contactUs.getInTouch")}
          </h3>
          <div
            className="mb-3 flex items-start"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1100"
          >
            <div className="">
              <FaMapMarkerAlt
                className={`${direction === "ltr" ? "mr-2.5" : "ml-2.5"}`}
              />
            </div>
            <div className="max-w-xs">
              <span className="text-[#b7e4ea]">{t("contactUs.address")}</span>
            </div>
          </div>
          <div
            className="mb-3 flex items-start"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1100"
          >
            <div className="">
              <FaMapMarkerAlt
                className={`${direction === "ltr" ? "mr-2.5" : "ml-2.5"}`}
              />
            </div>
            <div className="max-w-xs">
              <a
                href="https://maps.app.goo.gl/H8Umv47eedqqMagY7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#b7e4ea]">
                  {t("contactUs.address2")}
                </span>
              </a>
            </div>
          </div>
          <div
            className="flex items-center mb-3"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1200"
          >
            <IoMdTime
              className={`${direction === "ltr" ? "mr-2.5" : "ml-2.5"}`}
            />
            <div className="text-[#b7e4ea]">{t("contactUs.workingHours")}</div>
          </div>
          <div
            className="flex items-center mb-2"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1300"
          >
            <LiaPhoneVolumeSolid
              className={`${direction === "ltr" ? "mr-2.5" : "ml-2.5"}`}
            />
            <a href={`tel:966500685333`} className="text-[#b7e4ea]">
              <span className="block">{t("contactUs.phone")}</span>
            </a>
          </div>
          <div
            className="flex items-center mb-5"
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1300"
          >
            <LiaPhoneVolumeSolid
              className={`${direction === "ltr" ? "mr-2.5" : "ml-2.5"}`}
            />
            <a href={`tel:1097788133`} className="text-[#b7e4ea]">
              <span className="block">{t("contactUs.phone2")}</span>
            </a>
          </div>
          <ul
            className={`flex ${
              direction === "ltr" ? "border-l pl-7" : "border-r pr-7"
            } border-[#b7e4ea] mb-5`}
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1400"
          >
            <li className={`${direction === "ltr" ? "mr-3.5" : "ml-3.5"}`}>
              <a
                href="https://www.facebook.com/profile.php?id=61559359181626"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className={`${direction === "ltr" ? "mr-3.5" : "ml-3.5"}`}>
              <a
                href="https://x.com/home?lang=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className={`${direction === "ltr" ? "mr-3.5" : "ml-3.5"}`}>
              <a
                href="https://www.instagram.com/adsmaster.sa?igsh=dnJnNmp0a2tvYzBy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className={`${direction === "ltr" ? "mr-3.5" : "ml-3.5"}`}>
              <a
                href="https://www.linkedin.com/company/99885115/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#307f95] duration-300 cursor-pointer"
              >
                <AiOutlineTikTok />
              </a>
            </li>
          </ul>
          <a
            data-aos={direction === "ltr" ? "fade-left" : "fade-right"}
            data-aos-duration="1500"
            href={`https://wa.me/966500685333`}
            target="_blank"
            className="flex items-center text-xs rounded-3xl text-white bg-[#1c3f49] w-fit py-2 px-5 hover:bg-[#214a55] duration-300 cursor-pointer"
          >
            <FaWhatsapp
              className={`${direction === "ltr" ? "mr-2" : "ml-2"}`}
              size={20}
            />
            <p>{t("contactUs.whatsApp")}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
