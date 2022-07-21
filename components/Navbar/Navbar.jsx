import React, { useState } from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
  const links = ["about", "skills", "works", "contact"];

  const [isMenuDisplay, setIsMenuDisplay] = useState(false);

  const handleMenu = () => {
    setIsMenuDisplay(!isMenuDisplay);
  };

  return (
    <div>
      <div className="fixed w-screen h-[9vh] shadow-xl z-50 hover:bg-gradient-to-tr from-black/20 to-white/10">
        <nav
          className=" w-full h-full flex justify-between items-center px-3 md:px-24 2xl:px-96 py-6 2xl:px-15"
        >
          {/* Navbar Logo */}
          <img
            src="./logo.svg"
            className="w-[80px] md:w-[120px] lg:w-[100px] 2xl:w-[140px] opacity-70 hover:opacity-90 transition-all duration-100 ease-in-out"
            alt="Logo"
          />

          {/* Menu List */}
          <ul className="hidden w-[400px] h-[9vh] md:flex md:items-center justify-between text-sm font-black tracking-widest text-white/80 ">
            {links.map((link, index) => {
              return (
                <li
                  id={index}
                  className="relative h-full flex-1 flex items-center uppercase overflow-x-hidden hover:before:flex before:absolute before:top-[20px] 2xl:before:top-[40px] before:left-[-100px] before:w-[80%] before:h-1 before:rounded-tr-sm before:rounded-br-sm before:bg-greenExtraDark/50  hover:before:translate-x-[100px] hover:before:bg-greenExtraDark before:trasnsition-all before:duration-300  before:ease-linear"
                >
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger Menu Icon  */}
          <div
            className="z-[200] flex flex-col gap-1 pr-4 group-hover:first:last:bg-peachDark md:hidden"
            onClick={handleMenu}
          >
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
            <span className="menu-span w-[30px] h-[5px] bg-greenExtraDark rounded-md opacity-70"></span>
          </div>
        </nav>

        {/* Hamburger Menu Component */}
        <div
          className={
            isMenuDisplay
              ? "fixed md:hidden left-0 top-0 w-screen h-screen bg-white/30 z-100 trasnsition-all duration-100 ease-in-out"
              : "trasnsition-all duration-500 delay-200"
          }
        >
          <div
            className={
              isMenuDisplay
                ? "fixed right-0 top-0 w-[80%] h-screen flex justify-center items-center  bg-white px-6 py-32 ease-in-out duration-500  z-200"
                : "fixed right-[-100%] top-0 w-[80%] h-screen bg-white p-5 ease-in-out duration-500 z-0"
            }
          >
            <div className="flex flex-col w-full h-full pt-12 justify-between items-center">
              <ul className="uppercase text-3xl leading-5 tracking-wide flex flex-col gap-20 text-center">
                {links.map((link, index) => {
                  return (
                    <li id={index} className="text-black text-meroon2/80 ">
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col items-center gap-2">
                <h3 className="uppercase tracking-wide text-meroon7/90">
                  Let's Connect
                </h3>
                <ul className="w-full h-full flex gap-6 text-meroon7/50">
                  <li>
                    <a href="#">
                      <AiFillGithub size={40} className="cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillLinkedin size={40} className="cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillInstagram size={40} className="cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook size={40} className="cursor-pointer" />
                    </a>
                  </li>
                </ul>
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
