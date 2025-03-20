import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import InfoBar from "../General/InfoBar";

const AutomationDetail = ({ data }) => {
  return (
    <>
      <Hero data={data.heroSection} />

      <Navigation />

      <div id="overview">
        <Info data={data.infoSection} />
      </div>

      <div id="features">
        <Features data={data.featuresSection} />
      </div>

      <div id="benefits">
        <Benefits data={data.benefitsSection} />
      </div>

      <InfoBar data={data.ctaSection.description} />
    </>
  );
};

export default AutomationDetail;
