import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Overlay from "../../Components/Overlay/Overlay";
import CTA from "../../Components/CTA/CTA";
import About from "../../Components/About/About";

const HomePage = () => (
    <div className="pb-20">
      <NavBar />
      <Overlay />
      <CTA />
      <About />
    </div>
);

export default HomePage;