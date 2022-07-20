import React, { useState } from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";

import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

// import {logo} from './logo1.png';logo

const Navbar = () => {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);

  const handleMenu = () => {
    setIsMenuDisplay(!isMenuDisplay);
  };

  return (
    <div>
      <div className="fixed w-screen h-20 shadow-xl z-50">
        <nav
          className=" w-full h-full flex justify-between items-center px-3 md:px-24 2xl:px-96.
       py-6 2xl:px-15"
        >
          <img
            src="./logoLarge.svg"            
            className="sm:w-[90px] md:w-[120px] opacity-70 hover:opacity-90 transition-all duration-100 ease-in-out"
            alt="Logo"
          />

          <ul className="hidden md:flex justify-center items-center text-sm tracking-widest opacity-70 text-white mix-blend-overlay">
            {/* <Link exact href="/#home">
              <li className="ml-10 py-1 uppercase md:showBorder hover:border-b hover:opacity-100 transition-all duration-100 ease-in-out">
                Home
              </li>
            </Link> */}
            <Link href="/#about">
              <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-100 ease-in-out">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-100 ease-in-out">
                Skills
              </li>
            </Link>
            <Link href="/#works">
              <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-100 ease-in-out">
                Works
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-100 ease-in-out">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="z-200 flex flex-col gap-1 pr-3 group-hover:first:last:bg-peachDark md:hidden"
            onClick={handleMenu}
          >
            {/* <HiOutlineMenu size={40} className="opacity-70 cursor-pointer" /> */}
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
          </div>
        </nav>

        {/* Hamburger Menu Component */}
        <div
          className={
            isMenuDisplay
              ? "fixed md:hidden left-0 top-0 w-full h-screen bg-white/30 z-200 trasnsition-all duration-100 ease-in-out"
              : "trasnsition-all duration-100"
          }
        >
          <div
            className={
              isMenuDisplay
                ? "fixed right-0 top-0 w-[80%] h-screen bg-white p-5 ease-in-out duration-300 z-200"
                : "fixed right-[-100%] top-0 w-[80%] sm:w-[60%] h-screen bg-slate-50 p-5 ease-in-out duration-500 z-0"
            }
          >
           

            <div className="relative flex flex-col justify-between gap-[200px]">
            <div className="flex justify-start items-center">
              <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3">
                <GrClose onClick={handleMenu} />
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-around  text-black/70 text-center opacity-70">
              <ul className="uppercase text-3xl font-medium leading-5 tracking-wide flex flex-col gap-3">
                {/* <Link href="/#home">
                  <li className="mb-10 hover:text-greenExtraDark/50 transition-colors ease-in-out duration-100">Home</li>
                </Link> */}
                <Link href="/#about">
                  <li className="mb-10  transition-colors ease-in-out duration-100">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="mb-10  transition-colors ease-in-out duration-100">Skills</li>
                </Link>
                <Link href="/#works">
                  <li className="mb-10  transition-colors ease-in-out duration-100">Works</li>
                </Link>
                <Link href="/#contact">
                  <li className=" transition-colors ease-in-out duration-100">Contact</li>
                </Link>
              </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className=" flex self-center uppercase tracking-wide text-black/70">
                  Let's Connect
                </h3>
                <div className="w-full h-full flex justify-around items-center text-black/50">
                  <AiFillGithub size={40} className="cursor-pointer" />
                  <AiFillLinkedin size={40} className="cursor-pointer" />
                  <AiFillInstagram size={40} className="cursor-pointer" />
                  <FaFacebook size={40} className="cursor-pointer" />
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[82px] w-screen h-1 blur-sm bg-gradient-to-tr from-pink-500/70 via-orange-300 via-green-400/50 to-purple-400 bg-blend-multiply"></div>
    </div>
  );
};

export default Navbar;
