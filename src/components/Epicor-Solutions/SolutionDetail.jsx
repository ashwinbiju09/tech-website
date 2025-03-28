import React from "react";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Container from "./Components/Container";
import Benefits from "./Components/Benefits";
import InfoBar from "../General/InfoBar";
import Percentage from "./Components/Percentage";

const SolutionDetail = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero data={data.heroSection} />

      {/* Features Section */}
      <Features data={data.featuresSection} />

      <Percentage data={data.percentageSection} />

      {/* Benefits Section */}
      <Benefits data={data.benefitsSection} />

      {/* CTA Conatiner Section */}
      <InfoBar data={data.containerSection.content} />
    </>
  );
};

export default SolutionDetail;
