import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Benefits from "./components/Benefits";

const AutomationDetail = ({ data }) => {
  return (
    <>
      <Hero data={data.heroSection} />
      <Info data={data.infoSection} />
      <Features data={data.featuresSection} />
      <Benefits data={data.benefitsSection} />
    </>
  );
};

export default AutomationDetail;
