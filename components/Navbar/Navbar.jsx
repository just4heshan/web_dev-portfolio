import React from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";

import animateLogo from "../../public/assets/Logo/logoJSON.json";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[10vh] z-50">
      <div className=" w-full h-full flex justify-between items-center px-[7.5rem] 2xl:px-15 bg-gradient-to-r from-black/10 to-black/10 z-50">
        <Lottie
          loop
          animationData={animateLogo}
          play
          direction={-1}
          style={{ width: 60, height: 60 }}
          className="cursor-pointer"
        />
        <ul className="py-10 flex justify-center items-center  tracking-widest z-50">
          <Link exact href="/">
            <li className="ml-7 px-[3px] py-[2px] text-sm uppercase hover:border-b rounded-[40px] hover:border-x-2 transition-all duration-300">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-7 px-[3px] py-[2px] text-sm uppercase hover:border-b rounded-[40px] hover:border-x-2 transition-all duration-300">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-7 px-[3px] py-[2px] text-sm uppercase hover:border-b rounded-[40px] hover:border-x-2 transition-all duration-300">Skills</li>
          </Link>
          <Link href="/#works">
            <li className="ml-7 px-[3px] py-[2px] text-sm uppercase hover:border-b rounded-[40px] hover:border-x-2 transition-all duration-300">Works</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-7 px-[3px] py-[2px] text-sm uppercase hover:border-b rounded-[40px] hover:border-x-2 transition-all duration-300">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
