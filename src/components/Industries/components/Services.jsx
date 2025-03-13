import React from "react";

const Services = ({ data }) => {
  return (
    <div className="relative w-full py-16 px-6 bg-white">
      {/* Services Content */}
      <div className="relative max-w-screen-xl mx-auto text-gray-900">
        {/* Section Title */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold">
          {data.title}
        </h2>
        <p className="text-center text-lg text-gray-600 mt-2">
          Explore key solutions that enhance industry performance.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-12">
          {/* Left Section - First 3 Services */}
          <div className="flex flex-col space-y-6 text-left">
            {data.services.slice(0, 3).map((service, index) => (
              <div key={index} className="w-full px-4 py-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
                <hr className="mt-3 border-gray-300 opacity-50" />
              </div>
            ))}
          </div>

          {/* Center Section - Static Image */}
          <div className="flex items-center justify-center">
            <img
              src={data.image}
              alt="Service"
              className="w-80 h-80 object-cover shadow-xl rounded-lg"
            />
          </div>

          {/* Right Section - Last 3 Services */}
          <div className="flex flex-col space-y-6 text-left">
            {data.services.slice(3, 6).map((service, index) => (
              <div key={index} className="w-full px-4 py-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
                <hr className="mt-3 border-gray-300 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
