import React from "react";
import Link from "next/link";

import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    // Header Container
    <div
      className="
      relative
      w-screen h-screen overflow-y-scroll scrollbar-hide 
      exact
      flex justify-center items-start
      bg-meroon"
    >
      {/* Wrapper */}
      <div className=" flex justify-start h-full">
        {/* Background Style Container  */}
      <div className="absolute top-0 left-0 w-full h-[180vh] flex flex-col">
        <div className="opacity-70 w-screen h-auto flex-1 bg-cover  bg-meroon8 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon7 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon6 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon5 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon4 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon3 shadow-md shadow-black/70 hover:opacity-95 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon2 shadow-md shadow-black/70 hover:opacity-95 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon1 shadow-md shadow-black/70 hover:opacity-95 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon0 shadow-md shadow-black/70 hover:opacity-95 transition-all duration-150 ease-in-out"></div>
        <div className="opacity-70 w-screen h-auto flex-1  bg-meroon shadow-md shadow-black/70 hover:opacity-95 transition-all duration-150 ease-in-out"></div>
      </div>

      {/* <div className="w-full absolute top-[100px] left-[-100px]">
       <img src="./logoExtraLarge3.svg" alt="Logo Extra Large" className=" animate-spin ease-linear w-[1000px] absolute top-0 left-0 mix-blend-lighten opacity-10" />
        <img src="./logoExtraLarge2.svg" alt="Logo Extra Large" className=" animate-spin ease-linear w-[1000px] absolute top-0 left-24 mix-blend-lighten opacity-10 rotate-90" />
        <img src="./logoExtraLarge1.svg" alt="Logo Extra Large" className=" animate-spin ease-linear w-[1000px] absolute top-0 left-48 mix-blend-lighten opacity-10 rotate-45" />
       </div> */}

      {/* Description Container */}
      <div
        className="
        relative
        w-auto h-screen 
        px-3 md:px-20     
        text-center translate-y-40"
      >
        {/* Description Wrapper */}
        <div className="w-full h-auto flex flex-col gap-2 items-center">

          <div className="font-mono tracking-wider text-3xl md:text-4xl lg:text-4xl text-greenLight/70">
            Hi there, I am{" "}
          </div>
          <div className="text-7xl tracking-widest translate-x-[-5px] font-light uppercase text-greenLight/70  font-mono">Heshan</div>

          {/* <div className="h-auto z-10">
            <h4 className="text-center md:text-left text-white/70 font-[400] tracking-wide leading-8">
              Web Designer / Web Developer
            </h4>
          </div> */}

        </div> 
        {/* <div className="w-full h-full flex">
        <div className="hover:bg-white/5 w-[50vw] h-full transition-all duration-300 ease-in-out"></div>
        <div className="hover:bg-white/5 w-[50vw] h-full transition-all duration-300 ease-in-out"></div>
      </div>       */}
      </div>
      <div className="w-auto h-aut">

      </div>
      
      <Link href="/#about">
          <button
            className="
            btn
            absolute bottom-[90px] left-[48%]
            z-10 
            px-1
            py-1
            bg-none
            flex self-center 
            rounded-full 
            animate-bounce 
            opacity-75 
            hover:shadow-white/30 hover:animate-none hover:transition-all hover:duration-200
            hover:opacity-100 
            transition duration-300
            before:absolute before:top-0 before:left-0 before:container:btn
            "
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
