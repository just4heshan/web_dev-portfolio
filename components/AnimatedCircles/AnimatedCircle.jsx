import React from 'react'

const AnimatedCircle = () => {
  return (
    <div 
    className="
    absolute cursor-none z-10
    w-screen h-full 
    flex items-center justify-center 
    blur-2xl 
    overflow-hidden">
    <div className="absolute top-[50vh] left-[50vw] w-[2000px] h-[2000px] bg-[#A85CF9] rounded-full opacity-5 animate-blob animation-delay-2000"></div>
    <div className="absolute top-[40vh] right-[60vw] w-[2000px] h-[2000px] bg-[#FF6FB5] rounded-full opacity-5 animate-blob animation-delay-4000"></div>
    <div className="absolute top-[50vh] right-[50vw] w-[2000px] h-[2000px] bg-[#FCF69C] rounded-full opacity-5 animate-blob"></div>
    <div className="absolute top-[40vh] left-[60vw] w-[2000px] h-[2000px] bg-[#55D8C1] rounded-full opacity-5 animate-blob animation-delay-6000"></div>
  </div>
  )
}

export default AnimatedCircle