import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Home/Hero";
import Scroll from "../components/Home/Scroll";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services/Services";
import Stats from "../components/Home/Results/Stats";
import Expertise from "../components/Home/Expertise/Expertise";
import Footer from "../components/Home/Footer";
import Contact from "../components/Home/Contact";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />

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
        <Stats />
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
