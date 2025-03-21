import React from "react";
import Overview from "./components/Overview";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Benefits from "./components/Benefits";
import Percentage from "./components/Percentage";
import Navigation from "./components/Navigation";
import InfoBar from "../General/InfoBar";

const AddonsDetail = ({ data }) => {
  return (
    <div>
      <Hero data={data.heroSection} />
      <Navigation />
      <section id="overview">
        <Overview data={data.overviewSection} />
      </section>
      <section id="howitworks">
        <Insights data={data.insightsSection} />
      </section>
      <section id="insights">
        <Percentage data={data.percentageSection} />
      </section>
      <section id="benefits">
        <Benefits data={data.benefitsSection} />
      </section>
      <div>
        <InfoBar data={data.ctaSection.description} />
      </div>
    </div>
  );
};

export default AddonsDetail;
