import React from "react";

const Scroll = () => {
  return (
    <div className="lg:py-2">
      <div className="text-center text-2xl lg:text-3xl pt-4 pb-6 font-bold text-blue-900">
        Technology Offerings
      </div>

      <div className="w-2/3 mx-auto pt-4 pb-6">
        <div className="flex overflow-hidden space-x-12 group h-12">
          <div className="flex space-x-12 animate-loop-scroll group-hover:paused">
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

          <div
            className="flex space-x-12 animate-loop-scroll group-hover:paused"
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
