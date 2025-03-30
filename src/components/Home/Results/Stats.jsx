import React, { useState, useEffect, useRef } from "react";
import statsData from "./statsData";
import CountUp from "react-countup";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div ref={statsRef} className="relative z-20 pt-4">
      <div className="w-full py-6 px-12 flex justify-center">
        <div className="bg-gradient-t from bg-slate-200 to-slate-100 rounded-2xl shadow-md py-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {statsData.slice(0, 3).map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="flex items-center justify-center text-sm text-gray-500 font-medium mb-2 space-x-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-normal">
                      {stat.title}
                    </span>
                    <img
                      src={stat.icon}
                      alt={stat.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={8}
                      startOnMount={false}
                      start={isVisible}
                    />
                    {stat.symbol}
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              {statsData.slice(3).map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center text-center w-full"
                >
                  <div className="flex items-center justify-center text-sm text-gray-500 font-medium mb-2 space-x-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-normal">
                      {stat.title}
                    </span>
                    <img
                      src={stat.icon}
                      alt={stat.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={8}
                      startOnMount={false}
                      start={isVisible}
                    />
                    {stat.symbol}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
