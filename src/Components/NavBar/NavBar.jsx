import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-1.png";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";
import { toggleTheme, setInitalTheme } from "../../utils/theme";

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // Set theme on first load
  useEffect(() => {
    localStorage.getItem("theme") === "light"
      ? setTheme("light")
      : setTheme("dark");
    setInitalTheme();
  }, []);

  const toggleThemeHandler = () => {
    toggleTheme();
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="overflow-hidden px-5 sm:px-20 py-5 z-20 font-semibold">
      <nav className="flex justify-between">
        <Link to="/" className="cursor-pointer">
          <motion.img
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            src={logo}
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
        </Link>
        <div
          className="flex mr-4 lg:mr-6 justify-between items-center cursor-pointer fixed top-10 right-4 sm:right-10 z-[1000]"
          onClick={toggleThemeHandler}
        >
          {theme === "light" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <BsSun className="text-2xl dark:text-white transition-all" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <BsMoon className="text-2xl dark:text-white transition-all" />
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
