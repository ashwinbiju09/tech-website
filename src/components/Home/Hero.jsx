import React from "react";
import { ReactTyped } from "react-typed";
import CTAButton from "../General/CTAButton";

const Hero = ({ onDiscoverClick }) => {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center z-0">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-45" />
      </div>

      <div className="relative z-10 pb-6 text-center">
        <p className="text-white text-sm font-medium tracking-widest py-2">
          GLOBALLY RECOGNIZED ERP EXPERTS
        </p>
        <div className="w-full font-normal text-2xl md:text-3xl lg:text-5xl text-white tracking-[-0.30px]">
          Transforming Business Through Intelligent Automation
        </div>

        <div className="mt-8 flex justify-center">
          <CTAButton />
        </div>
      </div>

      <button
        onClick={onDiscoverClick}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-pulse border-yellow-400 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#facc15"
          className="w-10 h-10"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
