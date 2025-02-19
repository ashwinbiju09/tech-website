import React from "react";
import statsData from "./statsData";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div
      className="relative text-white py-4"
      style={{
        backgroundImage: "url('/assets/tech-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 opacity-80"></div>
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-left flex justify-center lg:justify-start">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight max-w-lg text-center lg:text-left">
            We are proud to offer comprehensive solutions that simplify
            operations, boost productivity, and deliver measurable results.
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-end mt-8 lg:mt-0">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center mx-6 text-center px-4 py-5"
            >
              <img
                src={stat.icon}
                alt={stat.title}
                className="w-12 h-12 mb-3"
              />
              <p className="text-2xl font-bold">
                <CountUp start={0} end={stat.number} duration={7} />
                {stat.symbol}
              </p>
              <p className="text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
