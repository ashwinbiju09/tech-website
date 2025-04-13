import React from "react";

const data = [
  {
    title: "Arka Global Privacy Policy",
    paraOne:
      "Arka Global is a UK-based technology consultancy committed to protecting your privacy. This Privacy Policy applies solely to the Arka Global website. We do not operate a traditional backend; the only personal information we collect is through voluntary contact submissions. Additionally, we use chatbots to track daily website views in an aggregated and non-personally identifiable manner to help us improve our online experience.",
  },
  {
    title: "Scope of this policy",
    paraOne:
      "This policy covers only the information you provide on the Arka Global website—primarily your contact details when you request help—and the aggregated usage data collected via our chatbots.",
    paraTwo:
      "It does not apply to data collected on any third-party websites linked from our site. We encourage you to review the privacy policies of any external sites you visit.",
  },
  {
    title: "Information we collect",
    list: [
      {
        subTitle: "Contact details",
        content:
          "We only ask for essential contact information (such as your name, email address, and phone number) when you choose to reach out for assistance via our contact form.",
      },
      {
        subTitle: "Usage data via chatbots",
        content:
          "To better understand how our website is used, we employ chatbots that automatically track daily views and interactions. This usage data is collected in an aggregated and anonymized form and may include metrics like the number of visits, pages viewed, and basic technical details. This data is solely used for analytical purposes and does not identify individual users.",
      },
    ],
  },
  {
    title: "How we use your information",
    list: [
      {
        subTitle: "Contact information",
        content:
          "The details you provide are used exclusively to respond to your inquiries and offer the assistance you request.",
      },
      {
        subTitle: "Usage data",
        content:
          "The aggregated and anonymized data gathered by our chatbots is used to analyze overall website traffic and usage trends. This helps us improve the website's performance and user experience. This information is never used to personally identify you.",
      },
    ],
  },
  {
    title: "Disclosure of information",
    paraOne:
      "Arka Global is committed to maintaining your trust and safeguarding your information. We do not share your personal contact details with third parties except in the following circumstances:",
    list: [
      {
        subTitle: "With your consent",
        content:
          "If you opt to share your contact details with our trusted partners for additional services, we will only do so with your explicit consent.",
      },
      {
        subTitle: "Legal obligations",
        content:
          "We may disclose your information if required by law, in response to legal processes, or to protect our rights, property, or the safety of our users.",
      },
      {
        subTitle: "Business changes",
        content:
          "In the event of a business transfer, such as a merger or acquisition, your contact information may be transferred as part of the transaction. We will continue to handle your data in accordance with this Privacy Policy.",
      },
    ],
    paraTwo:
      "Aggregated usage data collected via our chatbots is anonymized and does not result in the disclosure of any personal information.",
  },
  {
    title: "Data security",
    paraOne:
      "We are committed to protecting your personal information through commercially reasonable technical, administrative, and physical safeguards.",
    paraTwo:
      "While no website can guarantee 100% security, we take appropriate measures to secure your contact details and ensure that the usage data collected is anonymized and stored safely.",
  },
  {
    title: "Your rights and choices",
    list: [
      {
        subTitle: "Voluntary provision",
        content:
          "Providing your contact details is entirely voluntary. If you choose not to submit your information, you can still browse our website, though you will not be able to request assistance.",
      },
      {
        subTitle: "Access and updates",
        content:
          "If you have provided your contact details and wish to update or delete them, please contact us using the information below. We will respond to your request within a reasonable timeframe.",
      },
    ],
  },
  {
    title: "Changes to this privacy policy",
    paraOne:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
    paraTwo:
      "Any updates will be posted on this page along with a new effective date. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact Us",
    paraOne:
      "If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:",
    list: [
      {
        subTitle: "Email",
        content: "support@arkaglobal.co.uk",
      },
      {
        subTitle: "Address",
        content: "[Insert Physical Address, United Kingdom]",
      },
    ],
    paraTwo:
      "Arka Global is dedicated to providing a secure and user-friendly experience. Thank you for trusting us with your information.",
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

          {section.list && (
            <div className="space-y-4 mt-4">
              {section.list.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-lg text-midnight mb-1">
                    {item.subTitle}
                  </h4>
                  <p className="text-base md:text-lg text-gray-700">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section.paraTwo && (
            <p className="text-base md:text-lg mt-3">{section.paraTwo}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
