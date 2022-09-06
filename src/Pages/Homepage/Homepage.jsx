import React from "react";
import CTA from "../../Components/CTA/CTA";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

const HomePage = () => (
    <div className="pb-20">
      <CTA />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
);

export default HomePage;