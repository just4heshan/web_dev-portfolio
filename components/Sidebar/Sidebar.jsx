import React from 'react'

import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineInfo } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="fixed hidden md:flex md:right-0 md:top-1/3 md:w-10 md:h-auto md:mx-5 z-[120] flex flex-col items-center">
        <div className='opacity-10 mix-blend-color-burn text-greenDark'><AiOutlineInfo size={50} /></div>
        <ul>
        <li href="https://github.com/just4heshan">
          <AiFillGithub
            size={40}
            className="cursor-pointer mt-5 mb-8 text-white/70 stroke-peachDark hover:text-white transition-all duration-400 "
          />
        </li>
        <li href="https://www.linkedin.com/in/heshan-rathnayake/">
          <AiFillLinkedin
            size={40}
            className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 "
          />
        </li>
        <li href="https://www.instagram.com/just4hesh/">
          <AiFillInstagram
            size={40}
            className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 "
          />
        </li>
        <li href="https://www.facebook.com/heshanravindussc/">
          <FaFacebook
            size={40}
            className="cursor-pointer mb-5 text-white/70 hover:text-white transition-all duration-400 "
          />
        </li>
        </ul>
        <div className='opacity-10 rotate-180 mix-blend-color-burn text-green'><AiOutlineInfo size={50} /></div>
      </div>
  )
}

export default Sidebar