import React, { useState, useEffect, useRef } from "react";
import statsData from "./statsData";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ opacity: 1, y: 0 });
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
  }, [controls]);

  return (
    <motion.div
      ref={statsRef}
      className="w-full py-12 px-16"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-5 gap-2 bg-gradient-t from bg-slate-200 to-slate-100 rounded-2xl shadow-md py-10">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <div className="text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-midnight via-blue-800 to-blue-600">
              <CountUp
                start={0}
                end={stat.number}
                duration={3}
                startOnMount={false}
                start={isVisible}
              />
              {stat.symbol}
            </div>
            <div className="flex items-center justify-center text-xs text-gray-500 font-medium pt-2 space-x-1">
              <span className="text-xl font-medium text-midnight pr-1">
                {stat.title}
              </span>
              <img
                src={stat.icon}
                alt={stat.title}
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stats;
