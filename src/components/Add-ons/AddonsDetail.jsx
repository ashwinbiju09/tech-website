import React from "react";
import Overview from "./components/Overview";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Benefits from "./components/Benefits";
import Percentage from "./components/Percentage";
import Navigation from "./components/Navigation";

const AddonsDetail = ({ data }) => {
  return (
    <div>
      <Hero data={data.heroSection} />
      <Navigation />
      <section id="overview">
        <Overview data={data.overviewSection} />
      </section>
      <section id="insights">
        <Insights data={data.insightsSection} />
      </section>
      <section id="benefits">
        <Benefits data={data.benefitsSection} />
      </section>
      <section id="percentage">
        <Percentage data={data.percentageSection} />
      </section>
    </div>
  );
};

export default AddonsDetail;
