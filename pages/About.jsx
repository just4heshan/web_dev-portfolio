import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="relative snap-start w-full h-full m-0 p-10 md:p-48 flex flex-col gap-5 md:gap-10 lg:flex-row justify-center items-center font-pop bg-gradient-to-tr from-pinkLight via-pinkDark via-purpleLight via-purpleMid via-purpleDark via-purpleExtraDark to-blueExtraDark to-blueDark via-blueLight via-blueExtraLight"
    >
      <div className="lg:flex-1 text-7xl md:text-8xl mt-0">About</div>
      <div className=" lg:flex-2 text-2xl md:text-4xl md:text-left md:leading-[50px] md:pl-24 font-[100] text-center tracking-wider font-[200]">
        <p>
          I am a Web Developer & a Web Desiger and have been designed and
          developed numourous web applications with using different
          technologies.
        </p>
      </div>
      <div className="fixed md:right-0 md:top-1/3 md:w-10 md:h-auto md:mx-5 z-[120]">

        <a href="https://github.com/just4heshan"><AiFillGithub size={40} className="cursor-pointer mt-5 mb-8 text-white/70 hover:text-white transition-all duration-400 "/></a>
        <a href="https://www.linkedin.com/in/heshan-rathnayake/"><AiFillLinkedin size={40} className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 "/></a>
        <a href="https://www.instagram.com/just4hesh/"><AiFillInstagram size={40} className="cursor-pointer mb-8 text-white/70 hover:text-white transition-all duration-400 " /></a>
        <a href="https://www.facebook.com/heshanravindussc/"><FaFacebook size={40} className="cursor-pointer mb-5 text-white/70 hover:text-white transition-all duration-400 " /></a>
      </div>
    </div>
  );
};

export default About;
