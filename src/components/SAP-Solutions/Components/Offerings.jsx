import React, { useState } from "react";

const Offerings = ({ data }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    data.departments[0]
  );

  return (
    <section className="w-full pt-10 pb-16 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title Centered */}
        <h2 className="text-3xl font-extrabold text-gray-100 mb-8 text-center">
          Offerings
        </h2>

        <div className="flex flex-col lg:flex-row bg-gray-100 text-gray-900 rounded-sm shadow-lg">
          {/* Left Side - Department List */}
          <div className="lg:w-1/4 p-6 space-y-4 border-r border-gray-300">
            {data.departments.map((department, index) => (
              <button
                key={index}
                className={`w-full py-2 text-lg font-medium text-left transition-all ${
                  selectedDepartment.title === department.title
                    ? "text-blue-900 font-semibold border-l-4 border-blue-700 pl-3"
                    : "text-gray-700 hover:text-blue-700 pl-3"
                }`}
                onClick={() => setSelectedDepartment(department)}
                onMouseEnter={() => setSelectedDepartment(department)}
              >
                {department.title}
              </button>
            ))}
          </div>

          {/* Right Side - Features Display */}
          <div className="lg:w-3/4 p-8">
            <h3 className="text-2xl font-bold text-blue-900">
              {selectedDepartment.title}
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              {selectedDepartment.content}
            </p>

            {/* Features List */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {selectedDepartment.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  {/* Feature Icon */}
                  <span className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full p-2 text-white">
                    {feature.icon}
                  </span>
                  {/* Feature Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
