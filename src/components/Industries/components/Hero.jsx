import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../../General/CTAButton";

const Hero = ({ data }) => {
  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: data.image ? `url(${data.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          {data.title}
        </h1>
        <div className="mt-8">
          <CTAButton />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
