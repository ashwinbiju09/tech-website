import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const OtherServices = ({ navLinks = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const location = useLocation();
  const currentPath = location.pathname;

  const extractServicesFromSection = (menu = []) => {
    for (const item of menu) {
      if (item.name === "Services" && item.subMenu) {
        for (const section of item.subMenu) {
          const sectionServices = section.subMenu || [];
          // Check if current path is in this section
          if (sectionServices.some((service) => service.path === currentPath)) {
            // Return other services from the same section
            return sectionServices
              .filter((service) => service.path !== currentPath)
              .map((service) => ({
                name: service.name,
                path: service.path,
              }));
          }
        }
      }
    }
    // If section not found, return first 3 services as fallback
    const allServices = [];
    menu.forEach((item) => {
      if (item.name === "Services") {
        item.subMenu?.forEach((section) => {
          section.subMenu?.forEach((service) => {
            allServices.push({
              name: service.name,
              path: service.path,
            });
          });
        });
      }
    });
    return allServices.slice(0, 3);
  };

  const relatedServices = extractServicesFromSection(navLinks);

  if (relatedServices.length === 0) return null;

  const nextServices = relatedServices.slice(0, 3);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white pb-16"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-center text-3xl font-bold text-blue-900 mb-8">
            Explore Other Services
          </h3>
          <div className="flex justify-center text-center">
            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                nextServices.length
              } gap-8 max-w-5xl ${
                nextServices.length === 2 ? "lg:max-w-3xl" : ""
              }`}
            >
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
                  className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition w-full"
                >
                  <div className="text-blue-900 text-xl font-semibold mb-3">
                    {service.name}
                  </div>
                  <Link
                    to={service.path}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OtherServices;
