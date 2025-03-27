import React from "react";
import NavBar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/About/Hero";
import Values from "../components/About/Values";
import Differentiators from "../components/About/Differentiators";
import Process from "../components/About/Process";
import CTABar from "../components/About/CTABar";
import Methodology from "../components/About/Methodology";

const About = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Values />
      <Methodology />
      <Differentiators />
      <Process />
      <CTABar />
      <Footer />
    </>
  );
};

export default About;
