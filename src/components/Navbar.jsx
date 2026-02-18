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
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      } text-amber-400`}
    >
      {/* Logo */}
      <div className="text-3xl flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="icn hover:border-b-4 border-orange-600 rounded-md"
        />
        <span className="font-bold font-dancingScript">{"<Najah/>"}</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-5 text-sm font-semibold items-center">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="btn cursor-pointer hover:text-yellow-300 hover:border-b-2 border-amber-400 transition-all duration-200 pb-0.5"
          >
            {link.label}
          </a>
        ))}

        {/* Dark/Light Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-2 p-2 rounded-full border border-amber-400/40 hover:bg-amber-400/20 transition-all duration-300"
          title="Toggle dark/light mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-amber-400" />
        </button>
      </div>

      {/* Mobile: Toggle + Dark mode */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full border border-amber-400/40 hover:bg-amber-400/20 transition-all duration-300"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-amber-400 text-sm" />
        </button>
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`absolute top-0 right-0 bg-black/95 backdrop-blur-md text-yellow-500 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
        style={{ width: "260px", minHeight: "100vh" }}
      >
        <div className="flex flex-col gap-5 text-base font-semibold py-6 px-6">
          <button onClick={toggleMenu} className="text-amber-400 text-xl mb-2 self-end">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className="btn cursor-pointer hover:text-amber-300 hover:pl-2 transition-all duration-200 border-b border-white/10 pb-3"
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
