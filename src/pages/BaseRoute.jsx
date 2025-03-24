import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Industries from "./Industries";
import SAPSolutions from "./SAPSolutions";
import EpicorSolutions from "./EpicorSolutions";
import Addons from "./Addons";
import Automation from "./Automation";
import Services from "./Services";
import Contact from "./Contact";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/industries/:slug" element={<Industries />} />

        <Route path="/services/:slug" element={<Services />} />

        <Route path="/sap-solutions/:slug" element={<SAPSolutions />} />
        <Route path="/epicor-solutions/:slug" element={<EpicorSolutions />} />
        <Route path="/enhanced-addons/:slug" element={<Addons />} />
        <Route path="/ai-automation/:slug" element={<Automation />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
