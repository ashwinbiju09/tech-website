import React from "react";

const data = [
  {
    title: "Disclaimer",
    paraOne:
      "Arka Global does not warrant: (1) that the services, any of the services’ functions, or any content or software contained therein will be uninterrupted or error-free; (2) that defects will be corrected; (3) that the services or the servers hosting them are free of viruses or other harmful code; or (4) that the services or the information available through the services will continue to be available. Arka Global disclaims any express or implied warranties, including, without limitation, noninfringement, merchantability, fitness for a particular purpose, and title. The services, including, without limitation, all content, software, and functions made available on or accessed through or sent from the services, are provided “as is,” “as available,” and “with all faults.”",
    paraTwo:
      "Arka Global will not be liable to you or anyone else for any loss or damages of any kind (including, without limitation, for any special, direct, indirect, incidental, exemplary, economic, punitive, or consequential damages) in connection with the services or your submissions, even if foreseeable or even if Arka Global has been advised of the possibility of such damages (including, without limitation, whether caused in whole or in part by negligence, gross negligence, or otherwise, but excluding willful misconduct) unless specified in writing. Arka Global’s liability in connection with the services or your submissions for willful misconduct will not exceed the amount paid by you to Arka Global in the three months preceding the claim.",
    paraThree:
      "Your access to and use of the services is at your own risk. If you are dissatisfied with the services or any of the content, your sole and exclusive remedy is to discontinue accessing and using the services.",
    paraFour:
      "You acknowledge and agree that if you incur any damages arising out of Arka Global’s acts or omissions, such damages, if any, are not irreparable and are not sufficient to entitle you to an injunction or other equitable relief restricting exploitation of any website, property, product, program, television show, motion picture, or other audio/visual content owned or controlled by Arka Global, including without limitation the services (including those incorporating user submissions).",
    paraFive:
      "You acknowledge that you may be waiving rights with respect to claims that are unknown or unsuspected. Accordingly, you agree to waive the benefit of any law that otherwise might limit your waiver of such claims.",
    paraSix:
      "Some jurisdictions do not allow limitations on implied warranties or the exclusion or limitation of certain damages, so some of the above limitations and exclusions may not apply to you.",
  },
];

const Info = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 text-justify">
      {data.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-midnight">
            <span className="border-b-2 border-yellow-400 inline-block pb-2">
              {section.title}
            </span>
          </h2>

          {section.paraOne && (
            <p className="text-base md:text-lg mb-3">{section.paraOne}</p>
          )}

          {section.paraTwo && (
            <p className="text-base md:text-lg mt-3">{section.paraTwo}</p>
          )}

          {section.paraThree && (
            <p className="text-base md:text-lg mt-3">{section.paraThree}</p>
          )}

          {section.paraFour && (
            <p className="text-base md:text-lg mt-3">{section.paraFour}</p>
          )}

          {section.paraFive && (
            <p className="text-base md:text-lg mt-3">{section.paraFive}</p>
          )}

          {section.paraSix && (
            <p className="text-base md:text-lg mt-3">{section.paraSix}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
