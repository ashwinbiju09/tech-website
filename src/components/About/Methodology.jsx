import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../../assets/about.jpg";
import aboutData from "./aboutData";
import { FaChevronDown } from "react-icons/fa";

const Methodology = () => {
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const layers = aboutData[0].methodSection;

  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 w-full md:w-2/3 text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          The{" "}
          <span className="bg-gradient-to-r from-blue-800  to-yellow-400 bg-clip-text text-transparent">
            Three-Layer
          </span>{" "}
          Transformation Methodology
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <motion.div
            className="lg:w-1/2 space-y-8 flex flex-col items-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <p className="text-lg text-justify leading-loose">
              Unlike traditional ERP consultants who focus solely on system
              implementation, our approach incorporates three essential layers
              that work together to create a truly transformative solution.
            </p>
            <img
              src={Image}
              alt="ERP transformation methodology"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-10 flex flex-col"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {layers?.map((layer, index) => (
              <div
                key={index}
                className="border-b pb-6 w-full"
                onMouseEnter={() => setHoveredLayer(index)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <h4 className="text-lg font-semibold text-gray-500">
                  {layer.title}
                </h4>
                <h3
                  className={`flex items-center justify-between text-2xl font-bold transition-colors duration-300 ${
                    hoveredLayer === index ? "text-yellow-400" : "text-gray-800"
                  }`}
                >
                  {layer.heading}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      hoveredLayer === index ? "rotate-180" : ""
                    }`}
                  />
                </h3>

                <AnimatePresence>
                  {hoveredLayer === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                        height: { duration: 0.4 },
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-600 mt-2 text-base leading-relaxed">
                          {layer.description}
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm space-y-1">
                          {layer.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
