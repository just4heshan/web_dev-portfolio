import React, { useState } from "react";
import Link from "next/link";

import WebDesignerImage from "../assets/WebDesignerImage";
import WebDeveloperImage from "../assets/WebDeveloperImage";

import { AiOutlineArrowDown } from "react-icons/ai";


const Header = () => {
  const [active, setActive] = useState(true);
  return (
    // Header Container
    <div
      className="
      w-screen h-screen
      exact
      bg-meroon/70"
    >
      {/* Wrapper */}
      <div className="relative flex items-center justify-center w-full h-screen">
        {/* Background Style Container  */}
        <div className="absolute top-0 left-0 w-screen h-screen flex flex-col">
          {/* <span className="w-auto h-[50px] flex absolute top-0 left-0 justify-start items-center uppercase text-bold font-pop px-6 text-2xl py-3 bg-peachDark/70 rotate-[-90deg] rounded-md hover:bg-peachDark/90 transition-all duration-100 ease-in-out">about</span> */}
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon8 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro1 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon7 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro2 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon6 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro3 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon5 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro4 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon4 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro5 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon3 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro6 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon2 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro7 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon1 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro8 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon0 shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro9 rounded-2xl"></div>
          <div className="opacity-70 w-screen h-auto flex-1 flex justify-end  bg-meroon shadow-md shadow-black/70 hover:opacity-80 transition-all duration-100 ease-in-out transform animate-intro10 rounded-2xl"></div>
        </div>

        {/* Description Container */}
        <div
          className="
        w-auto h-auto absolute 
        px-3 md:px-0
        flex flex-col text-center z-10"
        >
          <div className="w-auto h-auto font-mochiy tracking-wider text-3xl md:text-4xl lg:text-5xl text-greenDark/80">
            Hi there, I am{" "}
          </div>
          <div className="w-auto text-7xl tracking-widest translate-x-[-5px] font-semibold uppercase text-greenDark/70 font-mochiy">
            Heshan
          </div>
        </div>
        <div className="relative top-[10vh] left-0 w-screen h-[90vh]">
          {/* <div className="absolute bottom-[10vh] left-[5vw] text-center">
            <img
              src="./web-ui.svg"
              alt="ui"
              width={300}
              className=" bg-cover opacity-80 hover:opacity-90 transform transition-all duration-150 "
            />
            <div className="text-3xl font-mochiy text-greenDark/80 font-[300] mt-5">Web Designer</div>
          </div> */}
          {/* <div className="absolute top-[10vh] right-[5vw] text-center">
          <div className="text-3xl font-mochiy text-greenDark/80 font-[300] mb-5">Web Developer</div>
            <img
              src="./web-dev.svg"
              alt="ui"
              width={300}
              className=" bg-cover opacity-80 hover:opacity-90 transform transition-all duration-150 "
            />
          </div> */}
          <WebDesignerImage className="absolute top-0"/>
          <WebDeveloperImage className="absolute bottom-0"/>
        </div>
        {/* <div className="absolute bottom-10 left-72 flex justify-center items-center w-[400px] h-[50vh] bg-white/60 border-l-[10px] border-peachLight rounded-[10px] hover:bg-white/90 hover:z-[100] hover:w-[40vw] hover:h-[full] hover:translate-y-[-70px] transform transition-all duration-100 ease-in-out z-50 hover:scale-[1.5]"><img src="./web-ui.svg" alt="" className="absolute top-0 left-0 bg-cover"/><span className="w-auto h-auto text-5xl text-center text-black/60 font-pop font-semibold transform rotate-[-90deg]">Web Designer</span></div>
        <div className="absolute bottom-10 right-72 flex justify-center items-center w-[400px] h-[50vh] bg-white/60 border-l-[10px] border-peachLight rounded-[10px] hover:bg-white/90 hover:z-[100] hover:w-[40vw] hover:h-[full] hover:translate-y-[-70px] transform transition-all duration-100 ease-in-out z-50 hover:scale-[1.5]"><img src="" alt="" className="absolute top-0 left-0 bg-cover"/><span className="w-auto h-auto text-5xl text-center text-black/60 font-pop font-semibold transform rotate-[-90deg]">Web Developer</span></div> */}

        {/* <WebDevIcon /> */}
        {/* <div onMouseEnter={(e)=>setActive(!active)} onMouseOut={(e)=>setActive(!active)}>
          {active ? (<img
            src="./web-ui.svg"
            alt="ui"
            width={300}
            className="absolute top-[10vh] right-[5vw] bg-cover opacity-80 hover:opacity-90 transform transition-all duration-150 animate-zoom"
          />): (<img
            src="./web-dev.svg"
            alt="ui"
            width={300}
            className="absolute top-[10vh] right-[5vw] bg-cover opacity-80 hover:opacity-90 transform transition-all duration-150 animate-zoom"
          />)}
          </div> */}

        {/* <Link href="/#about">
          <button
            className="
            btn
            absolute bottom-20
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
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
