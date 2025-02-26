import React from "react";
import { useParams } from "react-router-dom";
import industryData from "./industryData";
import IndustryDetail from "./IndustryDetail";

const DynamicIndustry = () => {
  const { slug } = useParams();

  const foundIndustry = industryData.find((item) => item.slug === slug);

  if (!foundIndustry) {
    return <h2>Industry Not Found</h2>;
  }

  return <IndustryDetail data={foundIndustry} />;
};

export default DynamicIndustry;
