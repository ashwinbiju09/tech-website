import React from "react";
import { motion } from "framer-motion";

const Info = ({ data }) => {
  return (
    <div className="w-full bg-white py-16">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <div className="w-full flex justify-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Right Side: Text & Features */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {data.title}
              </h2>
              <p className="mt-4 text-gray-600">{data.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
