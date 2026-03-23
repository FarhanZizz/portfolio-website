import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
