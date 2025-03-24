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

      <div
        className="relative bg-slate-100 z-30"
        style={{
          backgroundImage: 'url("/bg-2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-100/90 -z-10"></div>
        <Info />
        <Stats />
        <Scroll />
        <Industry />
        <Services />
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;
