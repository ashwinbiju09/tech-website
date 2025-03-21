import React from "react";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Offerings from "./Components/Offerings";
import Percentage from "./Components/Percentage";
import InfoBar from "../General/InfoBar";
import Benefits from "./Components/Benefits";
import FAQ from "./Components/FAQ";
import Navigation from "./Components/Navigation";
import OtherServices from "./Components/OtherServices";
import navLinks from "../General/NavBar/navData";

const SolutionDetail = ({ data }) => {
  return (
    <div className="relative">
      <Hero data={data.heroSection} />

      <Navigation />

      <section id="overview">
        <Info data={data.infoSection} />
      </section>

      <section id="offerings">
        <Offerings data={data.offeringsSection} />
      </section>

      <section id="insights">
        <Percentage data={data.percentageSection} />
      </section>

      <section id="benefits">
        <Benefits data={data.benefitsSection} />
      </section>

      <section id="faq">
        <FAQ data={data.faqSection} />
      </section>

      <section id="otherservices">
        <OtherServices navLinks={navLinks} />
      </section>

      <section id="info-bar">
        <InfoBar data={data.ctaSection.description} />
      </section>
    </div>
  );
};

export default SolutionDetail;
