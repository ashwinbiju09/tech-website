import React from "react";
import { useParams } from "react-router-dom";
import solutionData from "./solutionData";
import SolutionDetail from "./SolutionDetail";

const DynamicSolution = () => {
  const { slug } = useParams();

  const foundSolution = solutionData.find((item) => item.slug === slug);

  if (!foundSolution) {
    return <h2>Solution Not Found</h2>;
  }

  return <SolutionDetail data={foundSolution} />;
};

export default DynamicSolution;
