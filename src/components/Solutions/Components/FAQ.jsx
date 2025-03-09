import React, { useState } from "react";

const FAQ = ({ faqSection }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-12">
        {/* Left Side: FAQ Header */}
        <div className="flex flex-col text-left md:w-1/2">
          <p className="inline-block font-semibold text-yellow-400 mb-4">
            SAP S/4HANA FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold">
            {faqSection.title}
          </p>
          <p className="mt-3 text-lg text-gray-300">{faqSection.description}</p>
        </div>

        {/* Right Side: FAQ List */}
        <ul className="md:w-1/2">
          {faqSection.faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex items-center w-full py-5 text-base font-semibold text-left border-t border-white/30 md:text-lg"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1">{question}</span>
        <svg
          className={`w-4 h-4 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1"></rect>
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          ></rect>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="pb-5 text-gray-200">{answer}</div>
      </div>
    </li>
  );
};

export default FAQ;
