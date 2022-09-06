import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Overlay from "../../Components/Overlay/Overlay";
import CTA from "../../Components/CTA/CTA";

const HomePage = () => (
    <div className="pb-20">
      <NavBar />
      <Overlay />
      <CTA />
    </div>
);

export default HomePage;