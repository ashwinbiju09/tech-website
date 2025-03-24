import React from "react";
import InfoBar from "../General/InfoBar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Offerings from "./components/Offerings";
import Percentage from "./components/Percentage";
import Benefits from "./components/Benefits";
import Expertise from "./components/Expertise";
import OtherServices from "./components/OtherServices";
import navLinks from "../General/NavBar/navData";
import Navigation from "./components/Navigation";

const ServicesDetail = ({ data }) => {
  return (
    <>
      <section>
        <Hero data={data.heroSection} />
      </section>
      <Navigation hasBenefits={!!data.benefitsSection} />
      <section id="overview">
        <Overview data={data.overviewSection} />
      </section>
      <section id="offerings">
        <Offerings data={data.offeringsSection} />
      </section>
      <section id="insights">
        <Percentage data={data.insightsSection} />
      </section>
      {data.benefitsSection && (
        <section id="benefits">
          <Benefits data={data.benefitsSection} />
        </section>
      )}
      <section id="expertise">
        <Expertise data={data.expertiseSection.items} />
      </section>
      <section id="other-services">
        <OtherServices navLinks={navLinks} />
      </section>
      <section>
        <InfoBar data={data.containerSection.description} />
      </section>
    </>
  );
};

export default ServicesDetail;
