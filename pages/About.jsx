import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="
      relative 
      w-screen h-screen 
      m-0 p-0
      font-pop 
      bg-meroon/60
      flex justify-center items-center
      "
    >
      {/* Wrapper  */}
      <div className="w-full h-full">
      <div 
      id="title" 
      className=" 
      relative 
      lg:flex-1 
      mt-0 
      text-7xl md:text-[6rem] font-[300] 
      opacity-90     
      cursor-pointer 
      hover:before:content-['About'] before:absolute before:text-pinkDark  before:overflow-hidden before:transition transform before:ease-in-out before:duration-700 
      hover:after:content-['About'] after:absolute after:top-[48px] after:left-0 after:z-auto after:text-blueExtraDark after:leading-[0] after:h-[3em] after:overflow-hidden after:transition-all after:duration-700">
        About
      </div>
      <div className=" lg:flex-2 text-2xl md:text-4xl md:text-left md:leading-[50px] md:pl-24 font-[100] text-center tracking-wider">
        <p>
          Hi there I am Heshan Rathnayake. I and have been used and developed
          numourous web applications with used HTML, CSS, JavaScript, React JS,
          Next JS, and .
        </p>
      </div>
      <div className="fixed md:right-0 md:top-1/3 md:w-10 md:h-auto md:mx-5 z-[120]">
        <a href="https://github.com/just4heshan">
          <AiFillGithub
            size={40}
            className="cursor-pointer mt-5 mb-8 text-white/70 hover:text-white transition-all duration-400 "
          />
        </a>
        <a href="https://www.linkedin.com/in/heshan-rathnayake/">
          <AiFillLinkedin
            size={40}
            className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 "
          />
        </a>
        <a href="https://www.instagram.com/just4hesh/">
          <AiFillInstagram
            size={40}
            className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 "
          />
        </a>
        <a href="https://www.facebook.com/heshanravindussc/">
          <FaFacebook
            size={40}
            className="cursor-pointer mb-5 text-white/70 hover:text-white transition-all duration-400 "
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;
