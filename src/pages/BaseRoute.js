import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Industries from "./Industries";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/industries/:slug" element={<Industries />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
