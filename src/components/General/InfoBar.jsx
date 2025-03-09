import React from "react";

const FullWidthCTA = ({ data }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-center">
      <div className="container mx-auto px-6 lg:px-36 text-white">
        {/* Description */}
        <p className="text-2xl font-medium text-gray-300 mb-8">{data}</p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-500 transition duration-300"
          >
            Connect with an Expert Today &#8594;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullWidthCTA;
