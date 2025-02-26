import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        className="w-full h-2/3 bg-gradient-to-b from-black/30 to-transparent"
        src="/assets/about-2.png"
        alt="Hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
    </div>
  );
};

export default Hero;
