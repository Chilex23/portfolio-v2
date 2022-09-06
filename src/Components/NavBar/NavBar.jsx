import React from "react";

const NavBar = () => (
  <header className="overflow-hidden px-20 py-5 z-20 font-semibold sticky top-0 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 bg-[hsla(0,0%,100%,.3)] before:blur-lg before:m-[-26px]">
    <nav className="flex justify-between">
      <div>Chilex</div>

      <div>
        <ul className="flex gap-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
