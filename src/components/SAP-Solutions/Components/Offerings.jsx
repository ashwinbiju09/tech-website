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
      className="w-full pt-10 pb-16 bg-slate-100 text-midnight"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl font-extrabold text-midnight mb-8 text-center"
        >
          Offerings
        </motion.h2>

        <div className="flex flex-col lg:flex-row bg-midnight text-white rounded-lg shadow-lg">
          <div className="lg:w-80 px-4 space-y-1 border-r border-yellow-400 border-opacity-70 my-6">
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
                className="group relative w-full py-2 text-lg font-medium text-left transition-all pl-3"
                onClick={() => setSelectedDepartment(department)}
                onMouseEnter={() => setSelectedDepartment(department)}
              >
                {/* Highlight overlay for active tab */}
                {selectedDepartment.title === department.title && (
                  <div
                    className="absolute inset-0 opacity-100 transition-opacity duration-200 z-0"
                    style={{
                      background:
                        "linear-gradient(to right, #FACC1566, transparent)",
                      borderLeft: "4px solid #FACC15",
                      borderRadius: "2px",
                    }}
                  ></div>
                )}

                {/* Tab text content */}
                <span
                  className={`relative z-10 ${
                    selectedDepartment.title === department.title
                      ? "text-white font-semibold"
                      : "text-white group-hover:text-yellow-400"
                  }`}
                >
                  {department.title}
                </span>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedDepartment.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:w-3/4 p-10"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              {selectedDepartment.title}
            </h3>
            <p className="mt-2 text-lg text-white">
              {selectedDepartment.content}
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  className="flex items-start space-x-3 border-2 p-4 rounded-md shadow-md bg-ice"
                >
                  <div>
                    <h4 className="font-semibold text-lg text-midnight">
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
