import React from "react";
import expertiseData from "./expertiseData";

const Expertise = () => {
  return (
    <div className="mt-4 mb-12">
      <div className="text-center text-2xl lg:text-3xl pt-4 pb-6 font-bold text-blue-900">
        Our Areas of Expertise
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {expertiseData.map((data, index) => (
          <div key={index} className="card w-72 h-64">
            <div className="card-content relative text-center transition-transform duration-700 text-white font-bold h-64 w-72 transform-style-3d">
              <div className="card-front absolute inset-0 bg-gradient-to-tr from-blue-950 to-blue-900 flex flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl backface-hidden">
                <div className="mb-3">{data.icon}</div>
                <div className="text-xl font-bold">{data.title}</div>
              </div>
              <div className="card-back absolute inset-0 text-justify text-sm font-medium p-6 bg-gradient-to-tr from-blue-700 to-blue-950 flex flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl rotate-y-180 backface-hidden">
                <div className="mb-3">{data.icon}</div>{" "}
                <p className="text-center">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
