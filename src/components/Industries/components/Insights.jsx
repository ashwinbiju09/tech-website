import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const Insights = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-8xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text mb-10">
          {data.title}
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-x-28 gap-y-10 text-center"
        >
          {data.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-b from-blue-800 to-blue-500 text-transparent bg-clip-text">
                {isInView ? (
                  <CountUp start={0} end={stat.number} duration={3} />
                ) : (
                  0
                )}
                %
              </p>

              <p className="w-full text-lg md:text-xl font-semibold text-gray-800">
                {stat.label}
              </p>

              <p className="text-sm md:text-base text-gray-700">
                {stat.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
