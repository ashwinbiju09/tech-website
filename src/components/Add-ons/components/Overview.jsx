import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Overview = ({ data }) => {
  const [hoveredStage, setHoveredStage] = useState(null);

  // Create a ref for the wrapper
  const ref = useRef(null);

  // Detect when the section is in view
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Title */}
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 tracking-wide">
        {data.title}
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-5xl mt-4">
        {data.subContent}
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-6">
        {data.features.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer p-4 border rounded-md transition-all
                       bg-white border-gray-300 hover:bg-gray-100"
            onMouseEnter={() => setHoveredStage(item)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <AnimatePresence>
              {hoveredStage === item && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-gray-600 mt-2 overflow-hidden"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Overview;
