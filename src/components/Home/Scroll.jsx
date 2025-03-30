import React from "react";
import azure from "../../assets/logos/1-MS-Azure.png";
import sapCloud from "../../assets/logos/2-Sap-Cloud.png";
import salesforce from "../../assets/logos/3-Salesforce.png";
import ibm from "../../assets/logos/4-IBM.png";
import googleCloud from "../../assets/logos/5-Google-Cloud.png";
import serviceNow from "../../assets/logos/6-Service.png";
import aws from "../../assets/logos/7-aws.png";
import sapLogo from "../../assets/logos/sap-logo-1.png";
import Title from "./Title";

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
    <div className="relative w-full z-20 md:py-12 lg:pb-16 lg:pt-4">
      <Title data={"Technology Offerings"} />
      <div className="w-full py-2 lg:py-8 px-4 md:px-24">
        <div className="border-b-2 px-4 py-6 rounded-md shadow-xl">
          <div className="flex overflow-hidden space-x-12 group h-14">
            <div className="flex space-x-12 animate-loop-scroll group-hover:paused">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={logo}
                  className="max-w-none h-8 md:h-14"
                  alt={`Logo ${index + 1}`}
                />
              ))}
            </div>

            <div
              className="flex space-x-12 animate-loop-scroll group-hover:paused"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  loading="lazy"
                  src={logo}
                  className="max-w-none h-8 md:h-14"
                  alt={`Logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
