import React from "react";
import cardsData from "./cardsData";
import { motion } from "framer-motion";
import Title from "../Title";

const Services = () => {
  return (
    <div className="py-12 md:py-20 relative z-20 px-4 sm:px-6 lg:px-8">
      <Title data={"Integrated Enterprise Solutions"} />

      <div className="text-lg sm:text-xl md:text-2xl font-medium text-center pb-10 text-black max-w-5xl mx-auto">
        Our approach connects core platforms, industry extensions, and
        intelligent automation to create a unified business ecosystem that
        drives measurable results.
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative bg-white py-6 px-6 w-full max-w-sm sm:w-full my-4 shadow-xl rounded-xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
            >
              <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-900 left-4 -top-6">
                {card.icon}
              </div>

              <div className="mt-6">
                <p className="text-xl font-semibold">{card.title}</p>
                <p className="text-md text-blue-900 font-medium mb-4">
                  {card.subtitle}
                </p>
                <div className="border-t border-gray-300 my-2"></div>
                <p className="min-h-[7rem] text-md text-gray-600 mb-6 text-justify">
                  {card.description}
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
