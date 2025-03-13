import React, { useState } from "react";
import aboutData from "./aboutData";

const Process = () => {
  const data = aboutData[0].processSection;
  const [selectedStep, setSelectedStep] = useState(data.process[0]);

  return (
    <section className="w-full pt-10 pb-16 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Our Process
        </h2>

        <div className="flex flex-col lg:flex-row bg-gray-100 text-gray-900 rounded-sm shadow-lg">
          <div className="lg:w-1/3 p-6 space-y-4 border-r border-gray-300">
            {data.process.map((step, index) => (
              <button
                key={index}
                className={`w-full py-2 text-lg font-medium text-left transition-all ${
                  selectedStep.title === step.title
                    ? "text-blue-900 font-semibold border-l-4 border-blue-700 pl-3"
                    : "text-gray-700 hover:text-blue-700 pl-3"
                }`}
                onClick={() => setSelectedStep(step)}
                onMouseEnter={() => setSelectedStep(step)}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 p-8">
            <div className="flex items-start space-x-4">
              <div>
                <div className="flex flex-row items-center justify-start space-x-4 pb-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white">
                    {selectedStep.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-blue-900">
                    {selectedStep.title}
                  </h3>
                </div>

                <p className="mt-2 text-xl text-justify  text-gray-700">
                  {selectedStep.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
