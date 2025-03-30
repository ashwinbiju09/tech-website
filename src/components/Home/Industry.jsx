import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const industries = [
  {
    title: "Retail",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png",
  },
  {
    title: "Consumer Products",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/product.png",
  },
  {
    title: "Engineering & Construction",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/engineering.png",
  },
  {
    title: "Healthcare",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/stethoscope.png",
  },
  {
    title: "Professional Services",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/conference.png",
  },
  {
    title: "Manufacturing",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/factory.png",
  },
  {
    title: "Energy",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/electricity.png",
  },
  {
    title: "Automotive",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/car--v1.png",
  },
  {
    title: "Government",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/city-hall.png",
  },
  {
    title: "Telecom",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/phone.png",
  },
  {
    title: "Education",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/graduation-cap.png",
  },
  {
    title: "Technology",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/processor.png",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Industry = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative z-20">
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Title data={"Driving transformation across Industries"} />
        <p className="text-2xl font-medium text-center mb-16 mx-auto text-black">
          Comprehensive solutions tailored to accelerate your digital
          transformation journey
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-start w-full h-40 text-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-white border border-yellow-500 shadow-yellow-500 shadow-lg"
                      : "bg-white border border-transparent shadow-sm"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? "0 0 20px rgba(234, 179, 8, 0.6)" // yellow-500 glow
                      : "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Icon */}
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className="h-10 w-10 transition-all duration-300"
                    style={{
                      filter: isHovered
                        ? // yellow-500
                          "brightness(0) saturate(100%) invert(74%) sepia(68%) saturate(4662%) hue-rotate(360deg) brightness(99%) contrast(100%)"
                        : // midnight color approx
                          "brightness(0) saturate(100%) invert(8%) sepia(20%) saturate(2000%) hue-rotate(185deg) brightness(100%) contrast(90%)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-lg font-semibold text-black px-2 min-h-[40px] flex items-center justify-center">
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Industry;
