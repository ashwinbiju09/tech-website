import React from "react";

const Scroll = () => {
  return (
    <div className="py-4">
      <div className="text-center text-3xl font-bold py-8 text-blue-900">
        Technology Offerings
      </div>

      {/* Centered and Reduced Width */}
      <div className="w-2/3 mx-auto">
        <div className="flex overflow-hidden space-x-16 group h-12">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
            {[
              "1-MS-Azure.png",
              "2-Sap-Cloud.png",
              "3-Salesforce.png",
              "4-IBM.png",
              "5-Google-Cloud.png",
              "6-Service.png",
              "7-aws.png",
              "sap-logo-1.png",
            ].map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={`assets/logos/${logo}`}
                className="max-w-none h-10"
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>

          {/* Duplicate for Seamless Scrolling */}
          <div
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {[
              "1-MS-Azure.png",
              "2-Sap-Cloud.png",
              "3-Salesforce.png",
              "4-IBM.png",
              "5-Google-Cloud.png",
              "6-Service.png",
              "7-aws.png",
              "sap-logo-1.png",
            ].map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={`assets/logos/${logo}`}
                className="max-w-none h-10"
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
