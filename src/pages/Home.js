import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Home/Hero";
import Scroll from "../components/Home/Scroll";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services/Services";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Info />
      <Scroll />
      <Services />
    </>
  );
};

export default Home;
