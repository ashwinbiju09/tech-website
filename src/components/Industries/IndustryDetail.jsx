import React from "react";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Insights from "./components/Insights";
import InfoBar from "../General/InfoBar";
import Navigation from "./components/Navigation";

const IndustryDetail = ({ data }) => {
  return (
    <>
      <Hero data={data.heroSection} />

      <Navigation />

      <section id="overview">
        <Overview data={data.overviewSection} />
      </section>

      <section id="services">
        <Services data={data.servicesSection} />
      </section>

      <section id="insights">
        <Insights data={data.insightsSection} />
      </section>

      <section>
        <InfoBar data={data.containerSection.description} />
      </section>
    </>
  );
};

export default IndustryDetail;
