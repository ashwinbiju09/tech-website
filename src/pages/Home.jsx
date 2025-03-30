import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/Home/Hero";
import Scroll from "../components/Home/Scroll";
import Info from "../components/Home/Info";
import Services from "../components/Home/Services/Services";
import Stats from "../components/Home/Results/Stats";
import Contact from "../components/Home/Contact";
import Industry from "../components/Home/Industry";

const heroVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

      <div className="relative bg-slate-100 z-30">
        <Info />
      </div>

      <div className="relative bg-white z-30">
        <Stats />
        <Scroll />
      </div>
      <div className="relative bg-slate-100 z-30">
        <Industry />
      </div>
      <div className="relative bg-white z-30">
        <Services />
      </div>
      <div className="relative bg-slate-100 z-30">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
