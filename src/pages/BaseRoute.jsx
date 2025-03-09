import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Industries from "./Industries";
import Solutions from "./Solutions";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/industries/:slug" element={<Industries />} />
        <Route path="/solutions/:slug" element={<Solutions />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
