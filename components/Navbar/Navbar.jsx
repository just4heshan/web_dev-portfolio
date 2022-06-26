import React, {useState} from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";

import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import animateLogo from "../../public/assets/Logo/logoJSON.json";

const Navbar = () => {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);

  const handleMenu = () => {
    setIsMenuDisplay(!isMenuDisplay);
  }

  return (
    <div>
    <div className="fixed w-full h-20 shadow-xl z-50">
      <nav
        className=" w-full h-full flex justify-between items-center px-3 md:px-24 2xl:px-96.
       py-6 2xl:px-15 bg-gradient-to-r from-black/10 to-black/10"
      >
        <Lottie
          loop
          animationData={animateLogo}
          play
          direction={-1}
          style={{ width: 60, height: 60 }}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300]"
        />
        <ul className="hidden md:flex justify-center items-center text-sm tracking-widest opacity-70">
          <Link exact href="/#home">
            <li className="ml-10 py-1 uppercase md:showBorder hover:border-b hover:opacity-100 transition-all duration-300">
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-300">
              About
            </li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-300">
              Skills
            </li>
          </Link>
          <Link href="/#works">
            <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-300">
              Works
            </li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 py-1 uppercase hover:border-b hover:opacity-100 transition-all duration-300">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex md:hidden" onClick={handleMenu}>
          <HiOutlineMenu size={40} className="opacity-70 cursor-pointer" />
        </div>
      </nav>
      <div className={isMenuDisplay ? "fixed md:hidden left-0 top-0 w-full h-screen bg-white/30 z-50 trasnsition-all duration-500" : "trasnsition-all duration-500"}>
        <div className={isMenuDisplay ? "fixed right-0 top-0 w-[80%] sm:w-[60%] h-screen bg-white p-5 ease-in duration-500 delay-150 z-50" : "fixed right-[-100%] top-0 w-[80%] sm:w-[60%] h-screen bg-slate-50 p-5 ease-in duration-500 z-50"}>
          <div className="flex justify-between items-center">
            <Lottie
              loop
              animationData={animateLogo}
              play
              direction={-1}
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#000000",
                borderRadius: "5px",
              }}
              className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300]"
            />
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3">
              <GrClose onClick={handleMenu}/>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-start pt-40 text-black text-center tracking-widest opacity-60">
            {/* <h3 className="mb-10 font-medium">HOME</h3>
            <h3 className="mb-10 font-medium">ABOUT</h3>
            <h3 className="mb-10 font-medium">SKILLS</h3>
            <h3 className="mb-10 font-medium">WORKS</h3>
            <h3 className="mb-10 font-medium">CONTACT</h3> */}

            <ul className="uppercase text-2xl font-medium mb-40">
              <Link href="/#home">
                <li className="m-10 hover:opacity-100">Home</li>
              </Link>
              <Link href="/#about">
                <li className="m-10 hover:opacity-100">About</li>
              </Link>
              <Link href="/#skills">
                <li className="m-10 hover:opacity-100">Skills</li>
              </Link>
              <Link href="/#works">
                <li className="m-10 hover:opacity-100">Works</li>
              </Link>
              <Link href="/#contact">
                <li className="m-10 hover:opacity-100">Contact</li>
              </Link>
            </ul>
            
            <div>
              <h4 className="flex self-start uppercase pl-5">Let's Connect</h4>
            <div className="w-full h-full pt-2 flex justify-around items-center">
            <AiFillGithub size={40} className="cursor-pointer"/>
            <AiFillLinkedin size={40} className="cursor-pointer"/>
            <AiFillInstagram size={40} className="cursor-pointer"/>
            <FaFacebook size={40} className="cursor-pointer"/>
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
