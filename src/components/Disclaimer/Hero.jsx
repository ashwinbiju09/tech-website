import React from "react";
import { motion } from "framer-motion";
import BgImage from "../../assets/Disclaimer.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={BgImage}
          alt="Contact Us"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pb-6">
          Disclaimer
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
