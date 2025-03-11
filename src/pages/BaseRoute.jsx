import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Industries from "./Industries";
import SAPSolutions from "./SAPSolutions";
import EpicorSolutions from "./EpicorSolutions";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/industries/:slug" element={<Industries />} />

        <Route path="/sap-solutions/:slug" element={<SAPSolutions />} />
        <Route path="/epicor-solutions/:slug" element={<EpicorSolutions />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
