import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OtherServices = ({ data, currentService, navLinks }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const extractServices = (menu) => {
    let services = [];
    menu.forEach((item) => {
      if (item.path) {
        services.push({ name: item.name, path: item.path });
      }
      if (item.subMenu) {
        services = services.concat(extractServices(item.subMenu));
      }
    });
    return services;
  };

  const allServices = extractServices(navLinks);

  const currentIndex = allServices.findIndex(
    (service) => service.name === currentService
  );

  const validIndex = currentIndex === -1 ? 0 : currentIndex;

  const nextServices = [...allServices, ...allServices].slice(
    validIndex + 1,
    validIndex + 7
  );

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white pb-16"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {nextServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-center text-3xl font-bold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text mb-8">
              Explore Other Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-blue-900 text-2xl font-semibold mb-3">
                    {service.name}
                  </div>
                  <a
                    href={service.path}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default OtherServices;
