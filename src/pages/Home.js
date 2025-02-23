import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/Home/Hero";
import Scroll from "../components/Home/Scroll";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services/Services";
import Stats from "../components/Home/Results/Stats";
import Expertise from "../components/Home/Expertise/Expertise";
import Contact from "../components/Home/Contact";

const heroVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const countVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 5.0, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <NavBar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={heroVariant}
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
        <Info />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={countVariant}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Scroll />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Expertise />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
