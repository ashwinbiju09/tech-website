import React from "react";
import CTAButton from "./CTAButton";

const FullWidthCTA = ({ data }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-center">
      <div className="container mx-auto px-6 lg:px-36 text-white">
        {/* Description */}
        <p className="text-2xl font-medium text-gray-300 mb-8">{data}</p>

        {/* Button */}
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default FullWidthCTA;
