import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/About/Hero";
import Intro from "../components/About/Intro";
import Mission from "../components/About/Mission";
import Value from "../components/About/Values/Value";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: "easeOut" } },
};

const About = () => {
  return (
    <>
      <NavBar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={heroVariants}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Mission />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Value />
      </motion.div>

      <Footer />
    </>
  );
};

export default About;
