import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "./CTAButton";

const FullWidthCTA = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-center"
    >
      <div className="container mx-auto px-6 lg:px-36 text-white">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-2xl font-medium text-gray-300 mb-8"
        >
          {data}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <CTAButton />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FullWidthCTA;
