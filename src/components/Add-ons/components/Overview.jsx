import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chart from "./Chart";

const Overview = ({ data }) => {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center text-2xl lg:text-4xl font-bold text-blue-900 tracking-wide">
        {data.title}
      </div>
      <p className="text-center text-lg text-gray-600 max-w-5xl mt-4">
        {data.subContent}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          {data.features.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 border rounded-md transition-all bg-white border-gray-300 hover:bg-gray-100"
            >
              <h3
                className="text-lg font-semibold"
                onClick={() =>
                  setSelectedStage(selectedStage === item ? null : item)
                }
              >
                {item.name}
              </h3>
              <AnimatePresence>
                {selectedStage === item && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-600 mt-2 overflow-hidden"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Chart sections={data.features} onSelectStage={setSelectedStage} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
