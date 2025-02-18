import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Home/Hero";
import Scroll from "../components/Home/Scroll";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services/Services";
import Stats from "../components/Home/Results/Stats";
import Expertise from "../components/Home/Expertise/Expertise";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Info />
      <Scroll />
      <Services />
      <Stats />
      <Expertise />
    </>
  );
};

export default Home;
