import React from "react";
import { useParams } from "react-router-dom";
import addonsData from "./addonsData";
import AddonsDetail from "./AddonsDetail";

const DynamicAddons = () => {
  const { slug } = useParams();

  const foundAddon = addonsData.find((item) => item.slug === slug);

  if (!foundAddon) {
    return <h2>Addons Not Found</h2>;
  }

  return <AddonsDetail data={foundAddon} />;
};

export default DynamicAddons;
