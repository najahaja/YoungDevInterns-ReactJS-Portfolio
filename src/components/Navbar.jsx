import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar relative w-full flex justify-between px-6 py-5 bg-black text-amber-400 z-50">
      {/* Logo */}
      <div className="text-3xl flex gap-2">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="icn hover:border-b-4 border-orange-600 rounded-md"
        />
        <span className="font-bold font-dancingScript">{"<Najah/>"} </span>
      </div>

      {/* Desktop Menu Links (Visible on medium and larger screens) */}
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        <div className="btn cursor-pointer about hover:border-b-4 border-white-600 rounded-md">
          <a href="#about" rel="noopener noreferrer">
            About
          </a>
        </div>
        <div className="btn cursor-pointer education hover:border-b-4 border-orange-600 rounded-md">
          <a href="#education" rel="noopener noreferrer">
            Education
          </a>
        </div>
        <div className="btn cursor-pointer skills hover:border-b-4 border-red-600 rounded-md">
          <a href="#skills" rel="noopener noreferrer">
            Skills
          </a>
        </div>
        <div className="btn cursor-pointer projects hover:border-b-4 border-blue-600 rounded-md">
          <a href="#projects" rel="noopener noreferrer">
            Projects
          </a>
        </div>
        <div className="btn cursor-pointer contact hover:border-b-4 border-green-600 rounded-md">
          <a href="#contact" rel="noopener noreferrer">
            Contact
          </a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile (Visible on smaller screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu Links (Slide in from the right) */}
      <div
        className={`absolute top-0 right-0 bg-black text-yellow-500 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
        style={{ width: '250px' }}  // Adjust width as needed
      >
        <div className="flex flex-col gap-6 text-lg font-semibold py-5 px-6">
          <button onClick={toggleMenu} className="text-yellow text-xl mb-4">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="btn cursor-pointer about hover:border-b-4 border-white-600 rounded-md">
            <a href="#about" rel="noopener noreferrer">
              About
            </a>
          </div>
          <div className="btn cursor-pointer education hover:border-b-4 border-orange-600 rounded-md">
            <a href="#education" rel="noopener noreferrer">
              Education
            </a>
          </div>
          <div className="btn cursor-pointer skills hover:border-b-4 border-red-600 rounded-md">
            <a href="#skills" rel="noopener noreferrer">
              Skills
            </a>
          </div>
          <div className="btn cursor-pointer projects hover:border-b-4 border-blue-600 rounded-md">
            <a href="#projects" rel="noopener noreferrer">
              Projects
            </a>
          </div>
          <div className="btn cursor-pointer contact hover:border-b-4 border-green-600 rounded-md">
            <a href="#contact" rel="noopener noreferrer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
