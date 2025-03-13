import React from "react";

const Overview = ({ data }) => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-950 to-blue-900 py-14 px-24">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 px-12">
        {/* Left Side: Small Text */}
        <div className="w-1/2 text-white text-center md:text-left items-center">
          <h2 className="text-3xl font-semibold">{data.title}</h2>
        </div>

        {/* Right Side: Paragraph */}
        <div className="w-1/2 text-gray-300 text-lg text-justify leading-relaxed">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
