import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/General/NavBar/NavBar";
import Footer from "../components/General/Footer";
import Hero from "../components/Contact/Hero";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
