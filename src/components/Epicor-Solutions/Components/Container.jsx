import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Container = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="w-full bg-gradient-to-b from-blue-950 to-blue-900 px-6 text-white text-center py-14 md:py-20"
    >
      <div className="px-10 text-white text-2xl md:text-3xl text-center">
        {data.content}
      </div>
    </motion.div>
  );
};

export default Container;
