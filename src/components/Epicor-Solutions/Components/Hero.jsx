import React from "react";
import CTAButton from "../../General/CTAButton";
import { motion } from "framer-motion";

const Hero = ({ data }) => {
  return (
    <>
      <div className="w-full bg-midnight py-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container py-16 px-6 lg:px-16 max-w-6xl flex flex-col items-start">
            <h1 className="w-full text-3xl sm:text-4xl font-extrabold text-white text-center lg:text-left leading-tight">
              {data.title}
            </h1>

            <div className="w-full lg:w-3/4 text-center lg:text-left">
              <p className="mt-4 text-lg text-gray-300">{data.subContent}</p>

              <div className="mt-6">
                <CTAButton />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="hidden lg:block absolute right-32 bottom-[-450px] pl-14"
        >
          <img
            src={data.image}
            alt="Cloud Technology"
            className="rounded-lg shadow-lg w-[460px] h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 bg-white py-12 text-justify px-4 md:px-12 lg:px-0"
      >
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <ul className="space-y-4 text-gray-700 text-lg">
            {data.listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
