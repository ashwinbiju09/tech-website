import React from "react";
import Navbar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import DynamicSolution from "../components/Epicor-Solutions/DynamicSolution";

const EpicorSolutions = () => {
  return (
    <>
      <Navbar />
      <DynamicSolution />
      <Footer />
    </>
  );
};

export default EpicorSolutions;
