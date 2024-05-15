import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";





export default function Contact() {
  
  return (
    <div className="  bg-gradient-to-r from-[#051118] to-[#103743] text-white p-12 text-center">
    <h2 className=" text-2xl md:text-3xl font-semibold leading-10	drop-shadow-md mb-12 capitalize  ">Contact us to start your success story</h2>
    <div className="flex flex-col gap-5	md:flex-row md:gap-0 justify-around items-center">
      <div className="w-full  md:w-1/2 md:mr-10 rounded-xl pt-11 pb-8 px-8	bg-[#103743]">
        <h3 className="text-start text-xl	mb-11 ">Send Message</h3>
        <form action="">
          <input className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4" type="text" placeholder="Your Name " name="name" />
          <input className="input block outline-none	 bg-inherit	mb-2 border-b w-full p-4" type="text" placeholder="Your Phone" name="mobile" />
          <textarea className="input block outline-none	 bg-inherit	mb-8 border-b w-full p-4 resize-none	h-24	" placeholder="The message" name="message"></textarea>
          <input type="submit" value="Send" className="py-2.5 px-8 bg-[#0b2831] rounded-lg hover:bg-[#1c3f49] duration-300 cursor-pointer	" />
        </form>
      </div>
      <div className="w-full  md:w-1/2 text-start text-[#63a1b4]">
        <h3 className="text-center md:text-start text-xl	mb-5 ">Contact Us</h3>
        <div className="flex items-center mb-3">
          <FaLocationDot className='mr-2.5'/>
          <div className="text-[#b7e4ea]">Egypt, elbhera, Kafr eldawar</div>
        </div>
        <div className="flex items-center mb-3">
          <IoMdTime className="mr-2.5"/>
          <div className="text-[#b7e4ea]">Business Hours: From 10:00 To 18:00</div>
        </div>
        <div className="flex items-center mb-5">
         <LiaPhoneVolumeSolid className="mr-2.5"/>
          <div className="text-[#b7e4ea]">
            <span className="block ">+201203388446</span>
            <span>+201553320453</span>
          </div>
        </div>
        <ul className="flex pl-7 border-l border-[#b7e4ea] mb-5 ">
          <li className="mr-3.5	">
            <a href="#" className="hover:text-[#307f95] duration-300 cursor-pointer">
              <FaFacebookF />
            </a>
          </li>
          <li className="mr-3.5">
            <a href="#" className="hover:text-[#307f95] duration-300 cursor-pointer">
              <FaXTwitter/> 
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#307f95] duration-300 cursor-pointer">
              <AiOutlineTikTok />
            </a>
          </li>
        </ul>
        <a href="#" className="flex items-center text-xs rounded-3xl text-white bg-[#61ce70] w-fit py-2 px-5   hover:bg-[#1c3f49] duration-300 cursor-pointer">
          <FaWhatsapp className='mr-2' size={20}/>
          <p>Contact via WhatsApp</p>
        </a>
      </div>
    </div>
  </div>

  )
}
