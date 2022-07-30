import React from 'react'

import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineInfo } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const Sidebar = () => {
  return (
    <div className="fixed hidden md:flex flex-col right-[-70px] bottom-10 w-auto md:h-auto z-[100]">
        {/* <div className='opacity-10 mix-blend-color-burn text-greenDark'><AiOutlineInfo size={50} /></div> */}
        {/* <div className='fixed top-[350px] right-[-200px] w-[60vh] h-[2px] bg-white/20 transform rotate-[-90deg]'></div> */}
        <ul className='flex flex-col gap-1 w-auto h-full text-white/50'>
        <li href="https://github.com/just4heshan" className="w-full h-[36px] flex items-center cursor-pointer px-1 py-1 rounded-bl-3xl rounded-tl-3xl bg-meroon/20 hover:text-white hover:translate-x-[-35px] transition-all duration-400 ">
          <AiFillGithub
            size={30}
            
          />
          <p className='pl-2 opacity-80 font-[100px] text-[12px] font-pop'>Git</p>
        </li>
        <li href="https://www.linkedin.com/in/heshan-rathnayake/" className="flex items-center w-full h-[36px] cursor-pointer px-1 py-1 rounded-bl-3xl rounded-tl-3xl  bg-meroon/20 hover:text-white hover:translate-x-[-64px] transition-all duration-400 ">
          <TiSocialLinkedinCircular
            size={32}          
          />
          <p className='pl-2 opacity-80 font-[100px] text-[12px] font-pop'>LinkedIn</p>
        </li>
        <li href="https://www.instagram.com/just4hesh/" className="w-full h-[36px] flex items-center cursor-pointer px-1 py-1 rounded-bl-3xl rounded-tl-3xl bg-meroon/20 hover:text-white hover:translate-x-[-72px] transition-all duration-400 ">
          <AiFillInstagram
            size={28}
            
          />
          <p className='pl-2 opacity-80 font-[100px] text-[12px] font-pop'>Instragram</p>
        </li>
        <li href="https://www.facebook.com/heshanravindussc/" className="w-full h-[36px] flex items-center cursor-pointer px-1 py-1 rounded-bl-3xl rounded-tl-3xl bg-meroon/20 hover:text-white hover:translate-x-[-70px] transition-all duration-400 ">
          <FaFacebook
            size={26}            
          />
          <p className='pl-3 opacity-80 font-[100px] text-[12px] font-pop'>Facebook</p>
        </li>
        </ul>
        {/* <div className='opacity-10 rotate-180 mix-blend-color-burn text-green'><AiOutlineInfo size={50} /></div> */}
      </div>
  )
}

export default Sidebar