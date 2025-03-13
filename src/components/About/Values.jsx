import React from "react";
import aboutData from "./aboutData";

const Values = () => {
  const introData = aboutData[0].introSection;

  return (
    <section className="py-8 md:py-16 text-white">
      <div className="container mx-auto space-y-12">
        {introData.map((item, index) => {
          if (item.title === "Who We Are ?") {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center px-4 lg:px-16 space-y-8 md:space-y-0 lg:space-x-8"
              >
                {/* Image Container - Hidden on smaller screens */}
                <div className="relative w-full lg:w-1/3 hidden lg:block">
                  {/* Decorative Box */}
                  <div className="absolute -top-4 -left-4 w-80 h-80 bg-indigo-200 rounded-lg"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative w-80 h-80 rounded-lg shadow-xl"
                  />
                </div>
                {/* Text Container */}
                <div className="flex-1 bg-white text-gray-900 border rounded-md p-6 lg:p-8 shadow-lg">
                  <h3 className="text-2xl md:text-4xl font-bold mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-gray-700 text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          } else if (item.title === "Our Mission") {
            return (
              <div
                key={index}
                className="w-full py-8 md:py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-center px-4 md:px-16"
              >
                <h3 className="text-2xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl md:leading-8">
                  {item.description}
                </p>
              </div>
            );
          } else if (item.title === "Our Expertise") {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center py-8 md:py-12 px-4 md:px-12 text-black space-y-8 md:space-y-0 md:space-x-8"
              >
                <h3 className="text-2xl md:text-5xl font-bold md:w-1/3 text-center">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl md:leading-8 md:w-2/3 text-justify">
                  {item.description}
                </p>
              </div>
            );
          } else {
            // Default layout for any other items
            return (
              <div
                key={index}
                className={`flex flex-col overflow-hidden rounded-sm shadow-sm md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image - hidden on small screens, visible on md and above */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="hidden md:block w-full md:w-1/2 h-80 object-cover"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-white text-black rounded-md">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="my-6 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Values;
