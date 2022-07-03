import React from "react";
import Link from "next/link";

import Sidebar from "../components/Sidebar/Sidebar";

import {AiOutlineArrowDown} from "react-icons/ai";

// import BlobAnim from "../../anim/BlobAnim";


const Hero = () => {
  return (
    <div
      id="home"
      className="
      relative 
      w-screen h-[200vh] 
      m-0 p-20 md:p-30 
      flex flex-col justify-center items-center"
    >

      {/**** Background colour gradient ****/}
      <div className="absolute w-screen h-screen top-0 left-0 m-0 p-0 z-1 bg-gradient-to-bl from-pinkLight/10 via-pinkDark/10 via-purpleLight/10 via-purpleMid/10 via-purpleDark/10 via-purpleExtraDark/10 via-blueExtraDark/10 via-blueDark/10 to-blueLight/10"></div>


      {/**** Four circles animation ****/}
      <div className="absolute cursor-none w-screen h-full flex items-center justify-center blur-xl z-1 overflow-hidden">
        <div className="absolute top-[50vh] left-[50vw] w-[2000px] h-[2000px] bg-[#A85CF9] rounded-full opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40vh] right-[60vw] w-[2000px] h-[2000px] bg-[#FF6FB5] rounded-full opacity-5 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50vh] right-[50vw] w-[2000px] h-[2000px] bg-[#FCF69C] rounded-full opacity-5 animate-blob"></div>
        <div className="absolute top-[40vh] left-[60vw] w-[2000px] h-[2000px] bg-[#55D8C1] rounded-full opacity-5 animate-blob animation-delay-6000"></div>
      </div>


      {/**** Intro ****/}
      <div className="w-screen h-screen z-10">
        <div className="w-full h-screen md:px-32 flex flex-col gap-0 justify-center flex-wrap">
          <div>
            <h1 className="text-center tracking-wider text-white/80">
              <span className="font-extrabold">Hi</span>, I am{" "}
              <span className="text-white/85 font-medium text-7xl md:text-8xl">
                Heshan.
              </span>
            </h1>
          </div>
          <div>
          <h2 className="text-center text-white/90 font-[100]">
            A Front-End{" "}
            <span>
              <span className="text-[42px] md:text-[50px]">W</span>eb{" "}
              <span className="text-[42px] md:text-[50px]">D</span>eveloper
            </span>{" "}
            <span className="font-normal">&</span>{" "}
            <span className="font-[100] ">
              <span className="text-[42px] md:text-[50px]">W</span>eb{" "}
              <span className="text-[42px] md:text-[50px]">D</span>esigner.
            </span>
          </h2>
          </div>
          <Link href="/#about">
            <button className="z-10 mt-60 flex self-center rounded-full animate-bounce opacity-50 hover:shadow-white-500/30 hover:opacity-70 transition duration-300">
              <span className=""><AiOutlineArrowDown size={30}/></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center">
        <div
          id="about"
          className=" 
      relative 
      lg:flex-1 
      mt-0 
      text-7xl md:text-[6rem] font-[300] 
      opacity-90     
      cursor-pointer 
      hover:before:content-['About'] before:absolute before:z-auto before:text-pinkDark before:h-[3.5em] before:overflow-hidden before:transition-transform before:ease-in-out before:duration-700 
      hover:after:content-['About'] after:absolute after:top-[48px] after:left-0 after:z-auto after:text-blueExtraDark after:leading-[0] after:h-[3em] after:overflow-hidden after:transition-all after:duration-700"
        >
          About
        </div>
        <div className=" lg:flex-2 text-2xl md:text-4xl md:text-left md:leading-[50px] md:pl-24 font-[100] text-center tracking-wider font-[200]">
          <p>
            Hi there I am Heshan Rathnayake. I and have been used and developed
            numourous web applications with used HTML, CSS, JavaScript, React
            JS, Next JS, and .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
