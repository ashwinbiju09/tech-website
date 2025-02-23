import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative w-full h-3/4 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/tech-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative mx-auto max-w-screen-xl px-4 py-48 z-10">
        <div className="max-w-xl text-center md:text-left">
          <div className="font-bold text-xl lg:text-3xl py-2 antialiased text-white">
            Empowering businesses with
            <div className="block text-blue-400 text-2xl lg:text-4xl pt-4 antialiased ">
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

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/"
              className="block w-full rounded-full bg-gradient-to-br from-blue-800 to-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-900 sm:w-auto antialiased"
            >
              Connect with an Expert Today &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
