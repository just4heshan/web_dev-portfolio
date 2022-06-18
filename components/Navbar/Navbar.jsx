import React from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";

import {HiOutlineMenu} from 'react-icons/hi'

import animateLogo from "../../public/assets/Logo/logoJSON.json";

const Navbar = () => {
  return (
<div>
<div className="fixed w-full h-20 shadow-xl z-[100]">
      <nav className=" w-full h-full flex justify-between items-center px-12 md:px-48 2xl:px-96.
       py-4 2xl:px-15 bg-gradient-to-r from-black/10 to-black/10">
        <Lottie
          loop
          animationData={animateLogo}
          play
          direction={-1}
          style={{ width: 60, height: 60 }}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300]"
        />
        <ul className="hidden md:flex justify-center items-center  tracking-widest z-50">
          <Link exact href="/">
            <li className="ml-10 py-1 text-sm uppercase opacity-70 hover:border-b hover:opacity-100 transition-all duration-300">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 py-1 text-sm uppercase opacity-70 hover:border-b hover:opacity-100 transition-all duration-300">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 py-1 text-sm uppercase opacity-70 hover:border-b hover:opacity-100 transition-all duration-300">Skills</li>
          </Link>
          <Link href="/#works">
            <li className="ml-10 py-1 text-sm uppercase opacity-70 hover:border-b hover:opacity-100 transition-all duration-300">Works</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 py-1 text-sm uppercase opacity-70 hover:border-b hover:opacity-100 transition-all duration-300">Contact</li>
          </Link>
        </ul>
        <div className="flex md:hidden">
          <HiOutlineMenu size={25} /> 
        </div>
      </nav>
    </div>
    <div className=" fixed left-0 top-0 w-full h-screen bg-black/10"></div>
</div>
  );
};

export default Navbar;
