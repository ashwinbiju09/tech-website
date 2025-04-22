import React from "react";

const CTAButton = () => {
  return (
    <div>
      <a
        href="/contact"
        className="inline-block px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-medium rounded-sm relative overflow-hidden hover:text-midnight transition-all duration-300 z-10 hover:scale-110
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300 before:z-[-1]"
      >
        Connect with an Expert Today &#8594;
      </a>
    </div>
  );
};

export default CTAButton;
