import React from "react";

const Hero = () => {
  return (
    <div className="snap-start w-full h-full m-0 p-0 ">
      <div className="relative w-full h-full flex items-center justify-center blur-2xl">
        <div className="absolute top-[50vh] left-[50vw] w-[200px] h-[200px] bg-[#A85CF9] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40vh] right-[60vw] w-[200px] h-[200px] bg-[#FF6FB5] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50vh] right-[50vw] w-[200px] h-[200px] bg-[#FCF69C] rounded-full mix-blend-multiply opacity-40 animate-blob"></div>
        <div className="absolute top-[40vh] left-[60vw] w-[200px] h-[200px] bg-[#55D8C1] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-6000"></div>
      </div>
      <div className="w-screen h-full flex items-center justify-center text-8xl">
        {/* <div className='w-[50vw] h-full bg-gradient-to-br from-red-400 to-cyan-500 opacity-20 z-10'></div>
          <div className='w-[50vw] h-full bg-gradient-to-tr from-cyan-500 to-red-400 opacity-20 z-10'></div> */}
      </div>
    </div>
  );
};

export default Hero;
