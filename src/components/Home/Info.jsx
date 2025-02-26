import React from "react";

const Info = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:p-12">
      <div className="w-full py-4 md:py-0 md:-1/2 flex justify-center font-medium text-3xl md:text-6xl text-blue-900">
        Innovation begins here
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-0 pb-4 md:pb-0 text-justify text-base md:text-lg/8">
        Accely offers top-tier SAP consulting services using refined
        methodologies and innovation, thus creating a synergy of the latest
        technology and vast accumulated experience. Renowned for our technical
        expertise and rapid return on investment (ROI), we serve small-medium
        businesses to Fortune 500 Companies. We deliver high-value, end-to-end
        solutions as an SAP Value Added Reseller (VAR) partner.
      </div>
    </div>
  );
};

export default Info;
