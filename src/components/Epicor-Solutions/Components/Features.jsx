import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full rounded-sm shadow-lg overflow-hidden flex justify-center bg-white py-20 px-8 md:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/3 bg-gradient-to-b from-blue-950 to-blue-900 text-white p-8 flex items-center"
      >
        <h2 className="text-2xl font-extrabold">{data.title}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="lg:w-2/3 p-8 border border-gray-300"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-full mb-3">
                {feature.icon}
              </div>
              <p className="text-gray-700 font-medium">{feature.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
