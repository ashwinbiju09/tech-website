import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
