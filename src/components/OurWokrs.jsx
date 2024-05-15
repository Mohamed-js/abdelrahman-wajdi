import React from "react";
import team1 from "../assets/imgs/team-01.jpg";
import team2 from "../assets/imgs/team-02.jpg";
import team3 from "../assets/imgs/team-03.jpg";
import team4 from "../assets/imgs/team-04.jpg";
import team5 from "../assets/imgs/team-05.png";
import team6 from "../assets/imgs/team-06.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
export default function OurWokrs() {
  const teamCard = [
    { name: "Name", description: "Description", img: team1 },
    { name: "Name", description: "Description", img: team2 },
    { name: "Name", description: "Description", img: team3 },
    { name: "Name", description: "Description", img: team4 },
    { name: "Name", description: "Description", img: team5 },
    { name: "Name", description: "Description", img: team6 },
  ];
  return (
    <div className="relative z-[1] py-[100px] bg-[#051118] " id="team-members">
      <h2 className="relative w-fit mx-auto  text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center    ">
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
        Our Works
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mx-auto px-[15px]">
        {teamCard.map((card, i) => {
          return (
            <div
              key={i}
              className=" group  relative before:bg-gradient-to-tr	before:from-[#051118] before:to-[#103743] before:content-[''] before:absolute  before:h-full 
      before:transition-[0.3s] before:rounded-lg before:w-[calc(100%_-_60px)] 
      before:z-[-2] before:right-0 before:top-0 after:content-[''] after:absolute 
      after:h-full after:transition-[0.3s] 
      after:rounded-lg after:right-0 after:top-0  after:z-[-1] after:bg-[#11333d] 
      after:w-0 hover:after:w-[calc(100%_-_60px)]"
            >
              <div className="flex items-center pt-[60px]">
                <img
                  src={card.img}
                  alt=""
                  className="group-hover:grayscale	 w-[calc(100%_-_60px)] transition-[0.3s] rounded-[15px]"
                />
                <div className="flex flex-col items-center gap-5 ">
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaFacebookF className="text-[#b7e4ea] transition-[0.3s] group-hover:text-[#144f61] group-hover:z-10 icon "/>
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaXTwitter className="text-[#b7e4ea] transition-[0.3s] group-hover:text-[#144f61] group-hover:z-10 icon "/>
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <FaWhatsapp className="text-[#b7e4ea] transition-[0.3s] group-hover:text-[#144f61] group-hover:z-10 icon "/>
                  </a>
                  <a
                    href="#"
                    className="w-[60px] h-[30px] flex justify-center items-center no-underline"
                  >
                    <AiOutlineTikTok className="text-[#b7e4ea] transition-[0.3s] group-hover:text-[#144f61] group-hover:z-10 icon "/>
                  </a>
                </div>
              </div>
              <div className="pl-20">
                <h3 className="mt-3.5 font-black		 text-[#b7e4ea] text-[22px] transition-[0.3s] group-hover:text-[#93d5e2] mb-0">
                  {card.name}
                </h3>
                <p className=" mb-3.5 text-[#b7e4ea] transition-[0.3s] group-hover:text-[#144f61]">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
