import React from "react";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Offerings from "./Components/Offerings";
import Percentage from "./Components/Percentage";
import InfoBar from "../General/InfoBar";
import Benefits from "./Components/Benefits";
import FAQ from "./Components/FAQ";
import Navigation from "./Components/Navigation";

const SolutionDetail = ({ data }) => {
  return (
    <div className="relative">
      <Hero data={data.heroSection} />

      <Navigation />

      <section id="info">
        <Info data={data.infoSection} />
      </section>

      <section id="offerings">
        <Offerings data={data.offeringsSection} />
      </section>

      <section id="percentage">
        <Percentage data={data.percentageSection} />
      </section>

      <section id="info-bar">
        <InfoBar data={data.ctaSection.description} />
      </section>

      <section id="benefits">
        <Benefits data={data.benefitsSection} />
      </section>

      <section id="faq">
        <FAQ data={data.faqSection} />
      </section>
    </div>
  );
};

export default SolutionDetail;
