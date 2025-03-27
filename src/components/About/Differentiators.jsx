import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutData from "./aboutData";

const Differentiators = () => {
  const data = aboutData[0].differentiatorsSection;
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="py-16 bg-gradient-to-r from-blue-950 to-blue-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Key Differentiators
        </h2>

        {/* First Row (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center mb-12">
          {data.slice(0, 3).map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center max-w-xs px-4"
            >
              <div className="bg-slate-300 p-5 sm:p-6 rounded-full shadow-md mb-4">
                <div className="text-blue-900 text-2xl sm:text-3xl">
                  {diff.icon}
                </div>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">
                {diff.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row (2 items centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 justify-items-center px-0 lg:px-24">
          {data.slice(3).map((diff, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: (index + 3) * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center max-w-xs px-4"
            >
              <div className="bg-slate-300 p-5 sm:p-6 rounded-full shadow-md mb-4">
                <div className="text-blue-900 text-2xl sm:text-3xl">
                  {diff.icon}
                </div>
              </div>
              <p className="text-white text-base sm:text-lg font-medium">
                {diff.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Differentiators;
