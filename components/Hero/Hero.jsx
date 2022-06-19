import React from "react";

// import BlobAnim from "../../anim/BlobAnim";

const Hero = () => {
  return (
    <div id="home" className="relative snap-start w-full h-full m-0 p-0 flex justify-center items-center z-10">
     
      {/* Background Animation */}

      <div className="absolute w-screen h-full flex items-center justify-center blur-2xl z-0 overflow-hidden">
        <div className="absolute top-[50vh] left-[50vw] w-[200px] h-[200px] bg-[#A85CF9] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40vh] right-[60vw] w-[200px] h-[200px] bg-[#FF6FB5] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50vh] right-[50vw] w-[200px] h-[200px] bg-[#FCF69C] rounded-full mix-blend-multiply opacity-40 animate-blob"></div>
        <div className="absolute top-[40vh] left-[60vw] w-[200px] h-[200px] bg-[#55D8C1] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-6000"></div>
      </div>

      {/* <BlobAnim /> */}

      {/* Desc */}

      {/* <div className="w-[70vw] h-[70vh] flex flex-wrap items-center justify-center leading-6 text-center">
        <span className=" text-center tracking-wider text-8xl ">Hello, </span>
        <div className="pl-5 font-thin text-[34px] tracking-wider flex ">
          I'm{" "}
          <p className="tracking-[12px] text-[48px]">
            Heshan
          </p>
          , <span className="tracking-wider"> {'     '}a web developer.</span>
        </div>
        <p className="px-[90px] tracking-[5px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi
          dicta distinctio labore qui nisi consectetur et praesentium corrupti,
          repellat ea esse in autem! Eligendi officia dicta veritatis suscipit
          itaque!
        </p>
      </div> */}

      <button className="w-50 h-12 mb-10 self-end animate-bounce opacity-50  hover:shadow-gray-500/100 hover:opacity-70 transition duration-300">
        <span>Let's get started &rarr;</span>
      </button>
    </div>
  );
};

export default Hero;
