import React from "react";
import Link from "next/link";

// import BlobAnim from "../../anim/BlobAnim";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative snap-start w-full h-full m-0 p-10 md:p-30 flex justify-center items-center"
    >
      <div className="absolute w-full h-full top-0 left-0 m-0 p-0 z-1 bg-gradient-to-bl from-pinkLight/10 via-pinkDark/10 via-purpleLight/10 via-purpleMid/10 via-purpleDark/10 via-purpleExtraDark/10 via-blueExtraDark/10 via-blueDark/10 to-blueLight/10"></div>
      {/* Background Animation */}

      <div className="absolute w-screen h-full flex items-center justify-center blur-2xl z-10 overflow-hidden">
        <div className="absolute top-[50vh] left-[50vw] w-[200px] h-[200px] bg-[#A85CF9] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40vh] right-[60vw] w-[200px] h-[200px] bg-[#FF6FB5] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50vh] right-[50vw] w-[200px] h-[200px] bg-[#FCF69C] rounded-full mix-blend-multiply opacity-40 animate-blob"></div>
        <div className="absolute top-[40vh] left-[60vw] w-[200px] h-[200px] bg-[#55D8C1] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-6000"></div>
      </div>

      {/* <div className="absolute left-0 w-[100px] h-[100px] flex items-center justify-center rounded-full border-2 border-yellow-200 opacity-10 animate-circular"></div> */}

      <div className="relative  w-screen h-[80vh] md:px-32 flex flex-col flex-wrap gap-4 justify-center items-center">
        <div className="center flex-col gap-3 justify-center items-center flex-wrap">
          <h1 className="text-center tracking-wider text-white/80">
            <span className="font-extrabold">Hi</span>, I am{" "}
            <span className="text-white/85 font-medium text-7xl md:text-8xl">
              Heshan.
            </span>
          </h1>
          <h2 className="text-center text-white/90 font-[100]">
            A Front-End{" "}
            <span>
              <span className="text-[42px] md:text-[50px]">W</span>eb{" "}
              <span className="text-[42px] md:text-[50px]">D</span>eveloper
            </span>{" "}
            <span className="font-normal">&</span>{" "}
            <span className="font-[100] ">
              <span className="text-[42px] md:text-[50px]">W</span>eb{" "}
              <span className="text-[42px] md:text-[50px]">D</span>esigner
            </span>
            .
          </h2>
        </div>

        <Link href="/#about">
          <button className="absolute z-[10] bottom-4 w-50 h-12 mt-10 animate-bounce opacity-50 hover:shadow-gray-500/100 hover:opacity-70 transition duration-300">
            <span>Let's get started &rarr;</span>
          </button>
        </Link>
      </div> 
    </div>
  );
};

export default Hero;
