import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="pt-6 pb-10 bg-midnight ">
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
        <div className="text-center text-lg font-semibold tracking-normal max-w-3xl mx-auto text-white">
          {data.description}
        </div>

        <div className="flex items-center justify-center pt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
                className="relative bg-[#e9f0f6] py-6 px-6 w-80 my-4 shadow-xl rounded-md"
              >
                <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-400 left-4 -top-6">
                  {benefit.icon}
                </div>

                <div className="mt-8">
                  <p className="text-xl font-semibold my-2">{benefit.title}</p>
                  <div className="border-t-2"></div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 py-2">
                      {benefit.description}
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

export default Features;
