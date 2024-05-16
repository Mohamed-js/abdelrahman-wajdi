import React from 'react'

export default function Footer() {
  // bg-gradient-to-tr	from-[#051118] to-[#103743] 
  return (
    <div className="bg-[#051118]  relative  ">
       <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: "url('https://cdn.pixabay.com/photo/2018/07/25/16/00/art-3561710_640.jpg')",
          }}
        ></div>
    
    <div className="  py-9 px-14 text-[#b7e4ea] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5">

      <div className=" mb-5 pb-5  border-b border-[#b7e4ea2e] md:col-span-2	lg:col-span-1 lg:mb-0"> 
        <h2 className="relative text-3xl	font-semibold	 border-b-2 border-[#b7e4ea] w-fit pb-1 mb-3 z-10	">
          <svg className="absolute w-[200px] h-[200px] top-[-72px] left-[-66px]  opacity-50 z-[-1]	" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2000 2000"><g><g fill="hsl(194, 45%, 50%)" id="star"><path d="M 500 500 C 1000 1000 1000 1000 1300 750 C 1000 1000 1000 1000 2000 2000 C 1000 1000 1000 1000 750 1300 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
          Logo</h2>
        <p className="leading-3	text-[#62a0a8]">Web Design & Digital Marketing</p>
        <p className="text-[#62a0a8]">Trademarked under donya advertising est.</p>
      </div>
      <div className="mb-5 md:mb-0 pb-5  border-b border-[#b7e4ea2e]">
        <h3 className="mb-4	text-xl">contact</h3>
        <div>
          <a href="#">
            <i className="fas fa-phone-volume fa-fw mr-2.5 w-4 h-4"></i>
            <span  className="text-[#62a0a8]">01203388446</span>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="fab fa-facebook-f mr-2.5 w-4 h-4"></i>
            <span  className="text-[#62a0a8]">muhammedatef57@gmail.com</span>
          </a>
        </div>
        <div className="mb-3">
          <i className="fas fa-map-marker-alt fa-fw mr-2.5 w-4 h-4"></i>
          <span  className="text-[#62a0a8]">Egypt, elbhera, kafr eldawar</span>
        </div>
        <ul className="flex ml-8">
          <li className="mr-5"><a href="#" className="hover:text-[#1c3f49] duration-300">
            <i className="fab fa-facebook-f "></i>
          </a></li>
          <li className="mr-5"><a href="#" className="hover:text-[#1c3f49] duration-300">
            <i  className="fab fa-twitter"></i>
          </a></li>
          <li><a href="#" className="hover:text-[#1c3f49] duration-300">
            <i className="fab fa-youtube"></i>
          </a></li>
        </ul>
      </div>
      <div className="text-[#62a0a8] pb-5 border-b border-[#b7e4ea2e]">
        <h3 className="mb-4	text-xl text-[#b7e4ea]">main pages</h3>
        <div className="flex flex-wrap	">
          <a className="flex items-center mr-3.5">
            <span className="block w-3.5 h-0.5 bg-[#b7e4ea] mr-2.5"></span>
            <span className="cursor-pointer	hover:text-[#1c3f49] duration-300">home</span>
          </a>
          <a className="flex items-center mr-3.5">
            <span className="block w-3.5 h-0.5 bg-[#b7e4ea] mr-2.5"></span>
            <span className="cursor-pointer	hover:text-[#1c3f49] duration-300">about</span>
          </a>
          <a className="flex items-center mr-3.5">
            <span className="block w-3.5 h-0.5 bg-[#b7e4ea] mr-2.5"></span>
            <span className="cursor-pointer	hover:text-[#1c3f49] duration-300">services</span>
          </a>
          <a className="flex items-center mr-3.5">
            <span className="block w-3.5 h-0.5 bg-[#b7e4ea] mr-2.5"></span>
            <span className="cursor-pointer	hover:text-[#1c3f49] duration-300">portfolio</span>
          </a>
          <a className="flex items-center">
            <span className="block w-3.5 h-0.5 bg-[#b7e4ea] mr-2.5"></span>
            <span className="cursor-pointer	hover:text-[#1c3f49] duration-300">contact</span>
          </a>
        </div>


      </div>
    </div>
  </div>
  )
}
