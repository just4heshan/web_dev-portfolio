import React from "react";
import Link from "next/link";

import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className="
      relative
      w-screen h-full 
      z-10 exact
      bg-meroon"
    >
      <div className="z-[1] relative w-full h-full flex">
        {/* <div className="absolute -top-48 left-0 z-0 w-[35vw] h-[90vh] -skew-y-12 bg-gradient-to-tr from-meroon"></div> */}
        {/* <div className="absolute top-[-178px] md:top-[-166px] lg:top-[-146px] right-0 z-0 w-[65vw] h-[90vh] skew-y-12 bg-gradient-to-tr from-meroon"></div> */}
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[100vh] bg-meroon8 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[94vh] bg-meroon7 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[88vh] bg-meroon6 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[82vh] bg-meroon5 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[76vh] bg-meroon4 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[70vh] bg-meroon3 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[64vh] bg-meroon2 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[58vh] bg-meroon1 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[52vh] bg-meroon0 shadow-md hover:opacity-100"></div>
        <div className="z-1 absolute top-0 right-0 opacity-70 w-screen h-[46vh] bg-meroon shadow-md hover:opacity-100"></div>
      </div>
      <div
        className="
        z-10
        relative
        w-screen h-screen 
        px-1 md:px-5     
        flex flex-col gap-0 justify-start sm:text-center md:text-left pt-80 md:pt-48 lg:pt-36"
      >
        <div className="w-screen h-auto ">
          {/* <svg className="z-200" xmlns='http://www.w3.org/2000/svg' width='full' height='full' transform='scale(2)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(174, 100%, 29%, 1)'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'  stroke-width='0.5' stroke='hsla(0, 0%, 100%, 1)' fill='none'/></svg> */}

          <h1 className="text-center md:text-left tracking-wider text-2xl md:text-4xl lg:text-3xl leading-9 md:leading-7">
            Hi there, I am{" "}
            <span className="inline-block md:block text-[36px] md:text-6xl lg:text-6xl font-medium tracking-wide">
              Heshan Rathnayake.
            </span>
          </h1>
          <h4 className="text-center md:text-left pt-2 pr-4 md:pr-20 text-white/90 font-[300] tracking-widest leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis
            dolores vel vitae ea in ullam quis dolore! Quas suscipit molestias
            soluta perspiciatis, velit delectus quisquam! Odit quas libero
            aliquid.
          </h4>
        </div>
        <Link href="/#about">
          <button
            className="
            absolute bottom-[10rem] left-[45vw] 
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
            transition duration-300"
          >
            <span className="">
              <AiOutlineArrowDown size={30} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
