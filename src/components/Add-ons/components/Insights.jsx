import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Insights = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="pt-6 pb-10 px-8 md:px-16 lg:px-12 bg-gradient-to-b from-blue-950 to-blue-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="text-center text-2xl lg:text-4xl pt-2 pb-6 font-bold text-white tracking-wide">
          {data.title}
        </div>
        <div className="text-center text-lg text-white font-semibold tracking-normal max-w-4xl mx-auto">
          {data.description}
        </div>

        <div className="flex items-center justify-center pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center max-w-5xl mx-auto">
            {data.benefits.map((benefit, index) => (
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
                className="relative bg-white py-8 px-8 w-96 md:w-full shadow-xl rounded-sm flex flex-row items-center space-x-4"
              >
                <div className="text-white flex items-center justify-center rounded-full p-4 shadow-xl bg-blue-900 w-16 h-16">
                  {benefit.icon}
                </div>

                <div className="text-left">
                  <p className="text-md font-semibold text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Insights;
