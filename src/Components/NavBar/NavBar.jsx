import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-1.png";

const NavBar = () => (
  <header className="overflow-hidden px-5 sm:px-20 py-5 z-20 font-semibold">
    <nav className="flex justify-between">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
      </Link>
    </nav>
  </header>
);

export default NavBar;
