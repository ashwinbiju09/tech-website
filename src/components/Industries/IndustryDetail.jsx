import React from "react";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: "easeOut" } },
};

const IndustryDetail = ({ data }) => {
  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative"
      >
        <img
          className="w-full h-screen object-cover"
          src={data.image}
          alt={data.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-900 text-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="bg-white/60 backdrop-blur-sm px-8 py-6 rounded-md shadow-lg"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
            <div className="w-24 h-1 bg-yellow-400 mt-3 mx-auto"></div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-16 bg-gray-100"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900">
              {data.catchphrase}
            </h2>
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
            <p>{data.text}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-12 px-6 bg-white"
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            Our Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.productOfferings.map((offering, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 shadow-lg rounded-xl p-8 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-yellow-600">
                  {offering.title}
                </h3>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {offering.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryDetail;
