import React from "react";
import aboutData from "./aboutData";

const CTABar = () => {
  const data = aboutData[0].ctaSection;

  return (
    <section className="w-full py-16 bg-midnight">
      <div className="container mx-auto px-6 lg:px-36 text-white">
        <h2 className="text-3xl pb-4 font-semibold text-center">
          {data.title}
        </h2>
        <p className="text-2xl font-medium text-white mb-8 text-center">
          {data.description}
        </p>
        <div className="flex justify-center">
          <div>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium rounded-sm relative overflow-hidden hover:text-midnight transition-all duration-300 z-10
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300 before:z-[-1]"
            >
              Schedule a Consultation &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABar;
