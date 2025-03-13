import React from "react";
import NavBar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/About/Hero";
import Values from "../components/About/Values";
import Differentiators from "../components/About/Differentiators";
import Process from "../components/About/Process";
import CTABar from "../components/About/CTABar";

const About = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Values />
      <Differentiators />
      <Process />
      <CTABar />
      <Footer />
    </>
  );
};

export default About;
