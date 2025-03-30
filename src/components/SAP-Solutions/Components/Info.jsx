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
            <div className="w-full flex justify-center">
              <img
                src={data.image}
                alt={data.infoTitle}
                className="w-96 h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text">
                {data.infoTitle}
              </h2>
              <p className="mt-4 text-gray-600">{data.subContent}</p>

              <div className="mt-8 space-y-6">
                {data.features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[auto_1fr] gap-6 items-start"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full p-2 shrink-0">
                      {feature.icon}
                    </div>

                    <div className="flex flex-col min-h-[64px]">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
