import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = ({ data }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3.0, ease: "easeOut" }}
      className="relative w-full py-16 px-6 bg-white"
    >
      <div className="relative max-w-screen-xl mx-auto text-gray-900">
        <h2 className="text-center text-2xl lg:text-4xl font-bold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text">
          {data.title}
        </h2>
        <p className="text-center text-lg text-gray-600 mt-2">
          Explore key solutions that enhance industry performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-left"
          >
            {data.services.slice(0, 3).map((service, index) => (
              <div key={index} className="w-full px-4 py-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
                <hr className="mt-3 border-gray-300 opacity-50" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <img
              src={data.image}
              alt="Service"
              className="w-80 h-80 object-cover shadow-xl rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-left"
          >
            {data.services.slice(3, 6).map((service, index) => (
              <div key={index} className="w-full px-4 py-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
                <hr className="mt-3 border-gray-300 opacity-50" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
