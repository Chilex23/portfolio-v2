import React from "react";

const NavBar = () => (
  <header className="px-10 py-5 bg-red-100">
    <nav className="flex justify-between">
      <div>Chilex</div>

      <div>
        <ul className="flex gap-x-6">
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
