import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function CustomWhatsApp() {
  return (
    <div className="fixed bottom-10 right-5 z-[1000]">
    <a href="https://wa.me/966500685333" target="_blank" rel="noopener noreferrer">
      <div className="bg-[#e6953e] rounded-full p-3 hover:scale-110 transition-transform duration-300 animate-pulse">
        <FaWhatsapp
          className="text-white"
          size={35}
        />
      </div>
    </a>
  </div>  )
}




{/* <div className="fixed bottom-10 right-5 z-50">
<a href="https://wa.me/966501E11" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp
    className="text-white bg-[#e6953e] rounded-full p-3 hover:scale-110 transition-transform duration-300"
    size={50}
  />
</a>
</div> */}