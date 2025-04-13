import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutData from "./aboutData";
import { FaChevronDown } from "react-icons/fa";

const Process = () => {
  const data = aboutData[0].processSection;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      className="w-full py-16 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden border shadow-lg bg-white text-gray-900">
          <div className="lg:w-1/3 bg-midnight text-yellow-400 flex items-center justify-center p-10">
            <h2 className="text-4xl md:text-6xl font-bold text-center leading-tight">
              <span className="block text-sm md:text-lg mb-2 font-semibold tracking-wide">
                OUR
              </span>
              Process
            </h2>
          </div>

          <motion.div
            className="lg:w-2/3 p-10 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {data.process.map((step, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`flex items-center justify-between w-full text-xl font-medium transition-colors duration-300 ${
                    hoveredIndex === index ? "text-yellow-400" : "text-midnight"
                  }`}
                >
                  <span>{step.title}</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      hoveredIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden mt-2"
                    >
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
