import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/home-banner.jpg')" }}
    >
      <div className="relative mx-auto max-w-screen-xl px-4 py-48 ">
        <div className="max-w-xl text-center md:text-left">
          <div className="font-bold lg:text-3xl py-2 antialiased text-xl ">
            Empowering businesses with
            <div className="block text-blue-800 lg:text-4xl pt-4 antialiased text-2xl">
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
              className="block w-full rounded-full bg-blue-800 px-6 py-3 text-white font-medium hover:bg-blue-900 sm:w-auto antialiased"
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
