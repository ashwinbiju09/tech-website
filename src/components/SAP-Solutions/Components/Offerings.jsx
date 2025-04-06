import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Offerings = ({ data }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    data.departments[0]
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full pt-10 pb-16 bg-midnight text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl font-extrabold text-gray-100 mb-8 text-center"
        >
          Offerings
        </motion.h2>

        <div className="flex flex-col lg:flex-row bg-gray-100 text-gray-900 rounded-sm shadow-lg">
          <div className="lg:w-72 py-6 space-y-1 border-r border-gray-300">
            {data.departments.map((department, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`w-full py-2 text-lg font-medium text-left transition-all ${
                  selectedDepartment.title === department.title
                    ? "text-midnight font-semibold border-l-4 border-midnight pl-3"
                    : "text-gray-700 hover:text-blue-700 pl-3"
                }`}
                onClick={() => setSelectedDepartment(department)}
                onMouseEnter={() => setSelectedDepartment(department)}
              >
                {department.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedDepartment.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:w-3/4 p-8"
          >
            <h3 className="text-2xl font-bold text-midnight">
              {selectedDepartment.title}
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              {selectedDepartment.content}
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {selectedDepartment.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  className="flex items-start space-x-3 border-2 p-4 rounded-md shadow-md bg-slate-100"
                >
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-md text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Offerings;
