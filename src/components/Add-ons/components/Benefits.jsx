import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Benefits = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white pt-16 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-4xl font-extrabold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text mb-12"
        >
          {data.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {data.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex items-center gap-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.2,
                }}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-300 rounded-full aspect-square"
              >
                {benefit.icon}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.3,
                }}
                className="text-gray-700 flex-1 leading-relaxed"
              >
                <span className="font-semibold text-gray-900">
                  {benefit.title}
                </span>{" "}
                – {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
