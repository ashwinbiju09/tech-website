// Services.js
import React from "react";
import cardsData from "./cardsData";

const Services = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center text-2xl lg:text-4xl pt-2 pb-6 font-bold text-blue-900 tracking-wide">
        Our Services
      </div>
      <div className="text-center text-lg font-semibold tracking-normal">
        Comprehensive solutions tailored to accelerate your digital
        transformation journey
      </div>
      <div className="flex items-center justify-center pt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="relative bg-white py-6 px-6 w-72 my-4 shadow-xl"
            >
              {/* Icon Container */}
              <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-900 left-4 -top-6">
                {card.icon}
              </div>

              <div className="mt-8">
                <p className="text-xl font-semibold my-2">{card.title}</p>
                <div className="border-t-2"></div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 py-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
