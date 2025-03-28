import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const titles = ["Automate.", "Optimize.", "Grow."];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: titles.length * 0.5 + 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative w-full flex flex-col md:flex-row items-center md:px-12 md:py-16 lg:py-40 z-20">
      {/* Left Section */}
      <motion.div
        className="w-full py-4 md:py-0 md:w-1/2 flex flex-row justify-center px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-4xl md:text-6xl lg:text-9xl font-bold text-center md:text-end flex flex-col space-y-4">
          <motion.div
            className="bg-clip-text text-transparent bg-gradient-to-br from-blue-950 to-blue-900"
            variants={itemVariants}
          >
            Automate.
          </motion.div>
          <motion.div
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-800"
            variants={itemVariants}
          >
            Optimize.
          </motion.div>
          <motion.div
            className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-900 via-yellow-600 to-yellow-300 animate-text"
            variants={itemVariants}
          >
            Grow.
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 px-8 md:px-0 pb-4 md:pb-0 text-justify text-base md:font-semibold md:text-xl/relaxed lg:text-2xl/loose"
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        Synapse delivers enterprise transformation through intelligent
        automation, backed by over 10 years of industry expertise. Standard ERP
        holds you back. Our advanced solutions liberate businesses from legacy
        constraints. Renowned for technical excellence and rapid ROI, we serve
        businesses of all sizes with tailored ERP enhancements. We build custom
        AI powered solutions that eliminate bottlenecks and create sustainable
        competitive advantages across all major platforms
        including SAP and Epicor.
      </motion.div>
    </div>
  );
};

export default Info;
