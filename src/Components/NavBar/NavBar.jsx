import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className="overflow-hidden px-20 py-5 z-20 font-semibold">
    <nav className="flex justify-between">
      <Link to="/">Chilex</Link>
    </nav>
  </header>
);

export default NavBar;
