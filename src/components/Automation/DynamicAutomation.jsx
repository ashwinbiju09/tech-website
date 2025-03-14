import React from "react";
import { useParams } from "react-router-dom";
import automationData from "./automationData";
import AutomationDetail from "./AutomationDetail";

const DynamicAutomation = () => {
  const { slug } = useParams();

  const foundAutomation = automationData.find((item) => item.slug === slug);

  if (!foundAutomation) {
    return <h2>Automation Not Found</h2>;
  }

  return <AutomationDetail data={foundAutomation} />;
};

export default DynamicAutomation;
