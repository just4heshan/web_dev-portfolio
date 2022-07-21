import React from "react";
import About from "../components/About/About";

import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";


const Hero = () => {
  return (
    <div
      id="home"
      className="
      relative 
      w-screen min-h-full 
      m-0 p-0 
      flex flex-col justify-center items-center gap-0 scrollbar-hide
      "
    >

      {/**** Intro ****/}
      <Header />
      

      {/**** About Section ****/}
      <About />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Hero;
