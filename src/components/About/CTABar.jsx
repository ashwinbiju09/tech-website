import React from "react";
import aboutData from "./aboutData";

const CTABar = () => {
  const data = aboutData[0].ctaSection;

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-950 to-blue-900">
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
              href="/"
              className="rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-500 antialiased"
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
