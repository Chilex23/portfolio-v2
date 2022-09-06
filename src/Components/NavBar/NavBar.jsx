import React from "react";

const NavBar = () => (
  <header className="px-10 py-5 relative z-10">
    <nav className="flex justify-between">
      <div>Chilex</div>

      <div>
        <ul className="flex gap-x-6">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
