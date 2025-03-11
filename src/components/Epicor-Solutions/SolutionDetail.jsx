import React from "react";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Container from "./Components/Container";
import Benefits from "./Components/Benefits";

const SolutionDetail = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero data={data.heroSection} />

      {/* Features Section */}
      <Features data={data.featuresSection} />

      {/* Container Section */}
      <Container data={data.containerSection} />

      {/* Benefits Section */}
      <Benefits data={data.benefitsSection} />
    </>
  );
};

export default SolutionDetail;
