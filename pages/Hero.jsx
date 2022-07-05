import React from "react";
import Link from "next/link";

import Sidebar from "../components/Sidebar/Sidebar";
import AnimatedCircle from "../components/AnimatedCircles/AnimatedCircle";

import {AiOutlineArrowDown} from "react-icons/ai";

// import BlobAnim from "../../anim/BlobAnim";


const Hero = () => {
  const nameString = 'Heshan Rathnayake';
  return (
    <div
      id="home"
      className="
      relative 
      w-screen min-h-full 
      m-0 p-0 md:px-30 
      flex flex-col justify-center items-center gap-0
      antialiased
      "
    >

      {/**** Intro ****/}
      <header 
      className="
      w-screen h-full 
      z-100 exact">
        <div 
        className="
        relative
        w-screen h-screen 
        px-4 md:px-32     
        flex flex-col gap-0 justify-center text-center md:text-left">
          <div className="w-screen h-auto p-0 ">
            <h1 className="relative text-left tracking-wider text-4xl md:text-5xl leading-7">
              Hi there, I am{" "}
              <span className="inline-block md:block text-4xl md:text-5xl lg:text-7xl font-medium before:content-['HeshanRathnayake'] before:absolute before:z-[-1] before:top-[28px] before:left-[2px] before:md:top-[48px] before:md:left-[4px] before:lg:top-[48px] before:lg:left-2 before:text-gray/80">
                HeshanRathnayake.
              </span>
            </h1>
          </div>
          <div className=" ">
          <h4 className="pt-5 text-left text-white/90 font-[300] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis dolores vel vitae ea in ullam quis dolore! Quas suscipit molestias soluta perspiciatis, velit delectus quisquam! Odit quas libero aliquid.
          </h4>
          </div>
          <Link href="/#about">
            <button 
            className="
            relative top-40 md:top-50 left-0 
            z-10 
            px-1
            py-1
            bg-white
            flex self-center 
            rounded-full 
            animate-bounce 
            opacity-75 
            hover:shadow-white-900/30 
            hover:opacity-100 
            animate-circular
            transition duration-300">
              <span className=""><AiOutlineArrowDown size={30}/></span>
            </button>
          </Link>
        </div>
      </header>

      {/**** About Section ****/}
      <section 
        className="
        relative
        h-screen w-screen
        bg-gradient-to-bl from-pinkLight/10 via-pinkDark/10 via-purpleLight/10 via-purpleMid/10 via-purpleDark/10 via-purpleExtraDark/10 via-blueExtraDark/10 via-blueDark/10 to-blueLight/10
        m-0 p-4 lg:px-40 md:py-20
        text-white font-pop
        flex flex-col lg:flex-row justify-center items-center">
        <div
          id="about"
          className=" 
          z-100
          lg:flex-1 
          mt-0 
          text-7xl md:text-8xl font-[600] text-white 
          tracking-[0.03em]
          opacity-90     
          cursor-pointer 
          -skew-y-2          
          before:content-['About'] before:absolute before:z-[-1] before:left-2 before:top-0 before:text-gray/80 before:h-[3.5em] before:overflow-hidden before:transition-transform before:ease-in-out before:duration-700 
          hover:after:content-['About'] after:absolute after:top-[48px] after:left-0 after:z-auto after:text-greenDark after:leading-[0] after:h-[3em] after:overflow-hidden after:transition-all after:duration-700"
        >
          About
        </div>
        <div 
        className="lg:flex-2 
        text-2xl md:pl-10 md:text-left font-[300] text-center tracking-wider
        ">
          <p className="text-center text-gray text-2xl pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem earum id inventore explicabo magnam quae hic pariatur ad rerum odit excepturi, non ipsa, aut sit quas ea quisquam voluptate.
          </p>
          <p className="text-center text-gray text-2xl pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem earum id inventore explicabo magnam quae hic pariatur ad rerum odit excepturi, non ipsa, aut sit quas ea quisquam voluptate.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <div className="w-screen h-screen m-0 px-24 py-16 bg-gray"></div>
    </div>
  );
};

export default Hero;
