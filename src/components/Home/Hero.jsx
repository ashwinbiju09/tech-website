import React from "react";
import { ReactTyped } from "react-typed";
import CTAButton from "../General/CTAButton";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content on top */}
      <div className="relative z-10 px-6 text-center">
        <p className="text-white text-sm font-medium tracking-widest py-2">
          WE ARE A PREMIER SAP GOLD PARTNER
        </p>
        <div className="w-full font-normal text-2xl md:text-3xl lg:text-5xl text-white tracking-[-0.30px]">
          Globally Trusted SAP Consulting Company
        </div>
        <div className="block w-full font-bold text-white text-3xl md:text-4xl lg:text-4xl pt-4 antialiased">
          <ReactTyped
            strings={[
              "Next-Level IT Solutions",
              "Cutting-Edge Innovation",
              "Future-Ready Technology",
              "Seamless Digital Transformation",
              "Unmatched IT Excellence",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>

        <div className="mt-8 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
