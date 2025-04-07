import React from "react";

const data = [
  {
    title: "Our Commitment to Privacy",
    paraOne:
      "Accely is committed to protecting your privacy. This Privacy Policy applies only to the Accely Web Site.",
    paraTwo:
      "This Privacy Policy describes, among other things, the types of information collected about you when you visit Accely’s website; how your information may be used and when it may be disclosed; how you can control the use and disclosure of your information; and how your information is protected.",
  },
  {
    title: "Scope of Privacy Policy",
    paraOne:
      "This Privacy Policy applies to information, including contact information, collected about you by Accely’s website. This Privacy Policy does not cover any information collected through any other web site. Please note that Accely’s website may contain links to non-Accely Web Sites. We are not responsible for the privacy practices of those sites, and we recommend that you visit the privacy policies of each web site that you visit.",
  },
  {
    title: "Disclosure of Information",
    paraOne:
      "Accely is committed to maintaining your trust and we want you to understand when and with whom we may share information collected about you.",
    paraTwo:
      "With your consent. You may be asked to consent to have your contact information shared with third-party business partners.",
    paraThree:
      "Sweepstakes, contests, or promotions. When you choose to enter a sweepstakes, contest, or other promotion, and in accordance with the terms and conditions of the promotions, your information may be disclosed to sponsors and third parties who help administer the promotion, including in connection with winner selection and prize fulfillment. Your information also may be disclosed as required by law, such as on a winners list. Also, by entering a promotion, you are agreeing to the official rules that govern that promotion, including allowing the sponsors to use your name, voice, and likeness in advertising and marketing associated with the promotion in accordance with applicable law.",
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

          <p className="text-base md:text-lg mb-3">{section.paraOne}</p>
          {section.paraTwo && (
            <p className="text-base md:text-lg mb-3">{section.paraTwo}</p>
          )}
          {section.paraThree && (
            <p className="text-base md:text-lg mb-3">{section.paraThree}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
