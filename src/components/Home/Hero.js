import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="/assets/bg-vidoes/3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="w-full relative z-10 max-w-3xl px-6 text-center">
        <div className="w-full font-bold text-2xl md:text-3xl lg:text-5xl text-white">
          Empowering businesses with
          <div className="block w-full text-white text-3xl md:text-4xl lg:text-4xl pt-4 antialiased">
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
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-500 antialiased"
          >
            Connect with an Expert Today &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
