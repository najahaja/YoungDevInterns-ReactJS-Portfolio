import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`navBar fixed top-0 left-0 right-0 w-full flex justify-between px-6 py-4 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md dark:shadow-slate-900/50"
          : "bg-transparent"
      } text-slate-800 dark:text-slate-200`}
    >
      <div className="flex items-center gap-3 text-amber-500 dark:text-amber-400">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 font-bold text-sm text-amber-600 dark:text-amber-300">
          AN
        </div>
        <span className="text-lg font-semibold tracking-[0.12em] text-slate-800 dark:text-slate-200 md:text-xl">
          Ahamed Najah
        </span>
      </div>

      <div className="hidden md:flex gap-5 text-sm font-semibold items-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="cursor-pointer hover:text-amber-500 dark:hover:text-amber-400 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amber-500 dark:after:bg-amber-400 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDarkMode();
          }}
          className="ml-2 p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
          title="Toggle dark/light mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-amber-500 dark:text-amber-400" />
        </button>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDarkMode();
          }}
          className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-amber-500 dark:text-amber-400 text-sm" />
        </button>
        <button type="button" onClick={toggleMenu} className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      <div
        className={`absolute top-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-slate-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 border-l border-slate-200 dark:border-slate-800 shadow-2xl`}
        style={{ width: "260px", minHeight: "100vh" }}
      >
        <div className="flex flex-col gap-5 text-base font-semibold py-6 px-6">
          <button onClick={toggleMenu} className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 text-xl mb-2 self-end transition-colors">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-amber-500 dark:hover:text-amber-400 hover:pl-2 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 pb-3"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
