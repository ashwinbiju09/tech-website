import React from "react";

const Benefits = ({ benefitsSection }) => {
  return (
    <section className="pt-6 pb-10">
      <div className="text-center text-2xl lg:text-4xl pt-2 pb-6 font-bold text-blue-900 tracking-wide">
        {benefitsSection.title}
      </div>
      <div className="text-center text-lg font-semibold tracking-normal max-w-3xl mx-auto">
        {benefitsSection.description}
      </div>

      {/* Cards Container */}
      <div className="flex items-center justify-center pt-12">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {benefitsSection.benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white py-6 px-6 w-80 my-4 shadow-xl rounded-lg"
            >
              {/* Icon Container */}
              <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-900 left-4 -top-6">
                {benefit.icon}
              </div>

              <div className="mt-8">
                <p className="text-xl font-semibold my-2">{benefit.title}</p>
                <div className="border-t-2"></div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 py-2">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
