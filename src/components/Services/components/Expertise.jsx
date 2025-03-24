import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Expertise = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  // Add a check for data
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <div className="pt-6 pb-10 bg-gradient-to-b from-blue-950 to-blue-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Title */}
        <div className="text-center text-2xl lg:text-4xl pb-6 font-bold text-white tracking-wide">
          Our Expertise
        </div>

        {/* Single Row with 3 items */}
        <div className="flex items-center justify-center pt-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="relative bg-white py-6 px-6 w-full max-w-md my-4 shadow-xl rounded-md"
              >
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-900 left-4 -top-6">
                  {item.icon}
                </div>
                <div className="mt-8">
                  <p className="text-xl font-semibold my-2">{item.title}</p>
                  <div className="border-t-2"></div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 py-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expertise;
