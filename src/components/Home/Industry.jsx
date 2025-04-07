import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const industries = [
  {
    title: "Retail",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png",
    path: "/industries/fashion-and-apparel",
  },
  {
    title: "Consumer Products",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/product.png",
    path: "/industries/food-beverages",
  },
  {
    title: "Manufacturing",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/factory.png",
    path: "/industries/automotive-manufacturing",
  },
  {
    title: "Engineering & Construction",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/engineering.png",
    path: "/industries/engineering-construction-operations",
  },
  {
    title: "Oil, Gas, & Energy",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/electricity.png",
    path: "/industries/power-generation",
  },
  {
    title: "Professional Services",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/conference.png",
    path: "/industries/information-technology",
  },
  {
    title: "Life Sciences & Healthcare",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/stethoscope.png",
    path: "/industries/pharmaceutical-biotech",
  },
  {
    title: "Banking & Financial Services",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/money-bag.png",
    path: "/industries/banking",
  },
  {
    title: "Education",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/graduation-cap.png",
    path: "/industries/business-information-services",
  },
  {
    title: "High-Tech",
    icon: "https://img.icons8.com/ios-filled/50/FFFFFF/processor.png",
    path: "/industries/computer-peripherals",
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-start"
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
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300 bg-white">
                  <a href={industry.path}>
                    <img
                      src={industry.icon}
                      alt={industry.title}
                      className="h-10 w-10 transition-all duration-300"
                      style={{
                        filter: isHovered
                          ? "brightness(0) saturate(100%) invert(9%) sepia(91%) saturate(461%) hue-rotate(183deg) brightness(97%) contrast(96%)"
                          : "brightness(0) saturate(100%) invert(74%) sepia(68%) saturate(4662%) hue-rotate(360deg) brightness(99%) contrast(100%)",
                      }}
                    />
                  </a>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-midnight px-2 min-h-[40px] flex items-center justify-center">
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
