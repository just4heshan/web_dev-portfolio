import React from "react";

const BlobAnim = () => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center blur-2xl z-0">
      <div className="absolute top-[50vh] left-[50vw] w-[200px] h-[200px] bg-[#A85CF9] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[40vh] right-[60vw] w-[200px] h-[200px] bg-[#FF6FB5] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute top-[50vh] right-[50vw] w-[200px] h-[200px] bg-[#FCF69C] rounded-full mix-blend-multiply opacity-40 animate-blob"></div>
      <div className="absolute top-[40vh] left-[60vw] w-[200px] h-[200px] bg-[#55D8C1] rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-6000"></div>
    </div>
  );
};

export default BlobAnim;