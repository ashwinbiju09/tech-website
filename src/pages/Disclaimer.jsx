import React from "react";
import Navbar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Info from "../components/Disclaimer/Info";
import Hero from "../components/Disclaimer/Hero";

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </>
  );
};

export default Disclaimer;
