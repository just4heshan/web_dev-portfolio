import React from 'react'

const About = () => {
  return (
    <section 
        id="about"
        className="
        relative
        h-screen w-screen
        bg-meroon8/70
        m-0 p-4 lg:px-40 md:py-20
        text-white font-pop
        flex flex-col lg:flex-row justify-center items-center">
        <div
          className=" 
          z-100
          lg:flex-1 
          mt-0 
          text-7xl md:text-8xl font-[600] text-white 
          tracking-[0.03em]
          opacity-90     
          cursor-pointer 
          -skew-y-2          
          before:content-['About'] before:absolute before:z-[-1] before:left-2 before:top-0 before:text-gray/80 before:h-[3.5em] before:overflow-hidden before:transition-transform before:ease-in-out before:duration-700 
          hover:after:content-['About'] after:absolute after:top-[48px] after:left-0 after:z-auto after:text-greenDark after:leading-[0] after:h-[3em] after:overflow-hidden after:transition-all after:duration-700"
        >
          About
        </div>
        <div 
        className="lg:flex-2 
        text-2xl md:pl-10 md:text-left font-[300] text-center tracking-wider
        ">
          <p className="text-center text-gray text-2xl pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem earum id inventore explicabo magnam quae hic pariatur ad rerum odit excepturi, non ipsa, aut sit quas ea quisquam voluptate.
          </p>
          <p className="text-center text-gray text-2xl pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem earum id inventore explicabo magnam quae hic pariatur ad rerum odit excepturi, non ipsa, aut sit quas ea quisquam voluptate.
          </p>
        </div>
      </section>
  )
}

export default About