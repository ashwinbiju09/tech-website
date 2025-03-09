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
      <Hero
        title={data.heroSection.heroTitle}
        subContent={data.heroSection.heroSubContent}
        image={data.heroSection.image}
      />

      {/* Info Section */}
      <Info
        infoTitle={data.infoSection.infoTitle}
        subContent={data.heroSection.heroSubContent}
        image={data.infoSection.image}
        features={data.infoSection.features}
      />

      {/* Offerings Section */}
      <Offerings offerings={data.offeringsSection} />

      {/* Percentage Section */}
      <Percentage percentageSection={data.percentageSection} />

      {/* Info Bar Section */}
      <InfoBar data={data.ctaSection.description} />

      {/* Benefits Section */}
      <Benefits benefitsSection={data.benefitsSection} />

      {/* FAQ Section */}
      <FAQ faqSection={data.faqSection} />
    </>
  );
};

export default SolutionDetail;
