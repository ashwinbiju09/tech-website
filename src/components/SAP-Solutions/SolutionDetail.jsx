import React from "react";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Offerings from "./Components/Offerings";
import Percentage from "./Components/Percentage";
import InfoBar from "../General/InfoBar";
import Benefits from "./Components/Benefits";
import FAQ from "./Components/FAQ";

const SolutionDetail = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero data={data.heroSection} />

      {/* Info Section */}
      <Info data={data.infoSection} />

      {/* Offerings Section */}
      <Offerings data={data.offeringsSection} />

      {/* Percentage Section */}
      <Percentage data={data.percentageSection} />

      {/* Info Bar Section */}
      <InfoBar data={data.ctaSection.description} />

      {/* Benefits Section */}
      <Benefits data={data.benefitsSection} />

      {/* FAQ Section */}
      <FAQ data={data.faqSection} />
    </>
  );
};

export default SolutionDetail;
