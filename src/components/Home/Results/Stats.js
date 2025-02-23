import React from "react";
import statsData from "./statsData";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="pt-12 flex justify-center w-full px-4">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-6xl text-center">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center px-3 py-4 ${
              index === statsData.length - 1
                ? "md:justify-self-center w-full flex justify-center"
                : ""
            }`}
          >
            <img
              src={stat.icon}
              alt={stat.title}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-3 bg-blue-900 rounded-2xl p-2 hidden md:block"
            />
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
              <CountUp start={0} end={stat.number} duration={8} />
              {stat.symbol}
            </p>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700 font-medium mt-1">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
