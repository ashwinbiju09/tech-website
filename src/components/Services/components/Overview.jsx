import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Overview = ({ data }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-midnight py-14 px-4 md:px-12 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400">
            {data.title}
          </h2>
        </div>

        <div className="md:w-1/2 text-gray-300 text-lg leading-relaxed text-justify">
          <p>{data.description}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
