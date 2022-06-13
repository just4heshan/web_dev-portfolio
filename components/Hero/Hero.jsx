import React from "react";

const Hero = () => {
  return (
    <div id="/" className="relative snap-start w-full h-full m-0 p-0 flex justify-center items-center">
      <div className="absolute w-full h-full flex items-center justify-center blur-2xl z-0">
        <div className="absolute top-[50vh] left-[50vw] w-[200px] h-[200px] bg-[#A85CF9] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40vh] right-[60vw] w-[200px] h-[200px] bg-[#FF6FB5] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50vh] right-[50vw] w-[200px] h-[200px] bg-[#FCF69C] rounded-full mix-blend-multiply opacity-40 animate-blob"></div>
        <div className="absolute top-[40vh] left-[60vw] w-[200px] h-[200px] bg-[#55D8C1] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-6000"></div>
      </div>
      <div className="relative w-[90vw] h-[70vh] flex flex-wrap items-center justify-center">
        <span className="absolute text-center leading-[50px] tracking-wider text-8xl ">Hello <br></br><span className="font-thin text-[34px] leading-[0px] tracking-wider">I'm <span className="font-light tracking-wider">Heshan</span>, <span className="tracking-wider">a web developer.</span></span></span>
        <button className="relative top-[20vh] animate-bounce bg-white text-black opacity-50  hover:shadow-indigo-500/100 hover:opacity-70 transition duration-500"><span>Let's get started &rarr;</span></button>
      </div>
    </div>
  );
};

export default Hero;
