import React, { useState } from "react";

// Import industry images
import industry1 from "../../assets/industries/1.jpg";
import industry2 from "../../assets/industries/2.jpg";
import industry3 from "../../assets/industries/3.jpg";
import industry4 from "../../assets/industries/4.jpg";
import industry5 from "../../assets/industries/5.jpg";
import industry6 from "../../assets/industries/6.jpg";
import industry7 from "../../assets/industries/7.jpg";
import industry8 from "../../assets/industries/8.jpg";
import industry9 from "../../assets/industries/9.jpg";
import industry10 from "../../assets/industries/10.jpg";

// Define industries and corresponding images
const industriesLeft = [
  { name: "Manufacturing", image: industry1 },
  { name: "Healthcare", image: industry2 },
  { name: "Retail", image: industry3 },
  { name: "Finance", image: industry4 },
  { name: "Telecom", image: industry5 },
];

const industriesRight = [
  { name: "Education", image: industry6 },
  { name: "Automotive", image: industry7 },
  { name: "Energy", image: industry8 },
  { name: "Logistics", image: industry9 },
  { name: "Technology", image: industry10 },
];

const Industry = () => {
  const [hoveredImage, setHoveredImage] = useState(industry1);

  return (
    <div className="w-full pt-10 pb-10 bg-gradient-to-b from-blue-950 to-blue-900 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center text-3xl lg:text-4xl font-bold text-white tracking-wide">
        Industries
      </div>
      <div className="text-center text-lg font-medium text-gray-300 py-3">
        Comprehensive solutions tailored to accelerate your digital
        transformation journey
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center py-6">
        {/* Left Section - Industries List */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          {industriesLeft.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredImage(industry.image)}
              className="w-full md:w-80 px-4 py-2 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {industry.name}
                </h3>
                <span className="text-gray-300 text-lg">→</span>{" "}
                {/* Right Arrow */}
              </div>

              {/* Hide description on small screens, show on large screens */}
              <p className="text-sm text-gray-300 hidden lg:block">
                Transform your business with cutting-edge AI.
              </p>

              {/* Divider Line */}
              <hr className="mt-3 border-gray-500 opacity-50" />
            </div>
          ))}
        </div>

        {/* Center Section - Industry Image (Hidden on Small & Medium Screens) */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={hoveredImage}
            alt="Industry"
            className="w-96 h-96 object-cover shadow-xl transition-all duration-500 rounded-lg opacity-90 hover:opacity-100"
          />
        </div>

        {/* Right Section - Industries List */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          {industriesRight.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredImage(industry.image)}
              className="w-full md:w-80 px-4 py-2 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {industry.name}
                </h3>
                <span className="text-gray-300 text-lg">→</span>{" "}
                {/* Right Arrow */}
              </div>

              {/* Hide description on small screens, show on large screens */}
              <p className="text-sm text-gray-300 hidden lg:block">
                Transform your business with cutting-edge AI.
              </p>

              {/* Divider Line */}
              <hr className="mt-3 border-gray-500 opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industry;
