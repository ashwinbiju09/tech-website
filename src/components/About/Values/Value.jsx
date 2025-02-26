import React from "react";
import valueData from "./valueData";

const Value = () => {
  return (
    <div className="py-12 px-6 md:px-4 lg:px-36 bg-gradient-to-r from-white to-blue-50">
      <div className="text-center text-2xl md:text-3xl font-bold text-blue-900 pb-7">
        Our Values
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {valueData.map((item, index) => (
          <div
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-md shadow-xl bg-white"
          >
            <div className="overflow-hidden h-60 md:h-72">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 md:p-6 flex-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
