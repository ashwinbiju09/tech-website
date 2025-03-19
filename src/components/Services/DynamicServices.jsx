import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";
import ServicesDetail from "./ServicesDetail";

const DynamicServices = () => {
  const { slug } = useParams();

  const foundService = servicesData.find((item) => item.slug === slug);

  if (!foundService) {
    return <h2>Service not found</h2>;
  }

  return <ServicesDetail data={foundService} />;
};

export default DynamicServices;
