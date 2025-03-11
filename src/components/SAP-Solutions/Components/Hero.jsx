import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../../General/CTAButton";

const Hero = ({ data }) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-950 to-blue-900">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {data.heroTitle}
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                {data.heroSubContent}
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <CTAButton />
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full flex justify-center">
              <img
                src={data.image}
                alt={data.heroTitle}
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
