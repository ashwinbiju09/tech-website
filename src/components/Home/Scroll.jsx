import React from "react";
import azure from "../../assets/logos/1-MS-Azure.png";
import sapCloud from "../../assets/logos/2-Sap-Cloud.png";
import salesforce from "../../assets/logos/3-Salesforce.png";
import ibm from "../../assets/logos/4-IBM.png";
import googleCloud from "../../assets/logos/5-Google-Cloud.png";
import serviceNow from "../../assets/logos/6-Service.png";
import aws from "../../assets/logos/7-aws.png";
import sapLogo from "../../assets/logos/sap-logo-1.png";

const logos = [
  azure,
  sapCloud,
  salesforce,
  ibm,
  googleCloud,
  serviceNow,
  aws,
  sapLogo,
];

const Scroll = () => {
  return (
    <div className="lg:py-6">
      <div className="text-center text-2xl lg:text-4xl pb-6 font-bold text-blue-900 tracking-wide">
        Technology Offerings
      </div>
      <div className="w-full md:w-3/4 mx-auto pt-4 pb-6">
        <div className="flex overflow-hidden space-x-12 group h-14">
          {/* First set of scrolling logos */}
          <div className="flex space-x-12 animate-loop-scroll group-hover:paused">
            {logos.map((logo, index) => (
              <img
                key={index}
                loading="lazy"
                src={logo}
                className="max-w-none h-10"
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>

          {/* Duplicate set for seamless scrolling effect */}
          <div
            className="flex space-x-12 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                loading="lazy"
                src={logo}
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
