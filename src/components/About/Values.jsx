import React from "react";
import aboutData from "./aboutData";
import { motion } from "framer-motion";

const Values = () => {
  const introData = aboutData[0].introSection;

  return (
    <section className="py-8 md:py-16 text-white">
      <div className="container mx-auto space-y-12">
        {introData.map((item, index) => {
          if (item.title === "Who We Are ?") {
            return (
              <motion.div
                key={index}
                className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-20"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <div className="flex-1">
                  <h2 className="text-4xl md:text-7xl font-bold text-midnight mb-6">
                    Who <span className="bg-clip-text text-yellow-400">we</span>{" "}
                    are
                    <span className="text-gray-500"> ?</span>
                  </h2>
                  <p className="text-gray-600 text-xl text-justify leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  className="flex-1 w-full"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] rounded-lg shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            );
          } else if (item.title === "Our Mission") {
            return (
              <motion.div
                key={index}
                className="w-full py-16 px-6 lg:px-28 bg-midnight text-white"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <motion.h3
                    className="text-4xl md:text-7xl font-bold text-yellow-400 flex-1 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg md:text-xl/8 leading-relaxed text-white flex-1 text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: 0.6,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          } else if (item.title === "Our Expertise") {
            return (
              <motion.div
                key={index}
                className="border rounded-xl shadow-xl bg-white px-6 lg:px-12 py-12 mx-4 lg:mx-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <motion.div
                    className="lg:w-1/2 w-full"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                  >
                    <h3 className="text-4xl md:text-6xl font-bold text-midnight mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-loose">
                      {item.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="lg:w-1/2 w-full"
                    initial={{ rotateY: 90, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[500px] rounded-xl object-cover shadow-md"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default Values;
