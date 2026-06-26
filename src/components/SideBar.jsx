import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-1/4 left-0 flex flex-col items-start justify-start gap-6 p-3 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg rounded-r-2xl border border-l-0 border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative group transition-all duration-300 w-10 hover:w-36">
        <a
          href="https://github.com/najahaja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 w-full"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl w-10" />
          <span className="opacity-0 group-hover:opacity-100 font-semibold whitespace-nowrap transition-opacity duration-300 ml-2">
            GitHub
          </span>
        </a>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative group transition-all duration-300 w-10 hover:w-36">
        <a
          href="https://www.linkedin.com/in/ahamednajah"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 w-full"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl w-10" />
          <span className="opacity-0 group-hover:opacity-100 font-semibold whitespace-nowrap transition-opacity duration-300 ml-2">
            LinkedIn
          </span>
        </a>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative group transition-all duration-300 w-10 hover:w-36">
        <Link 
          to="/resume"
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 w-full"
        >
          <FontAwesomeIcon icon={faFileLines} className="text-2xl w-10" />
          <span className="opacity-0 group-hover:opacity-100 font-semibold whitespace-nowrap transition-opacity duration-300 ml-2">
            Resume
          </span>
        </Link>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative group transition-all duration-300 w-10 hover:w-36">
        <a
          href="http://wa.me/+94741772234"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 w-full"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl w-10" />
          <span className="opacity-0 group-hover:opacity-100 font-semibold whitespace-nowrap transition-opacity duration-300 ml-2">
            WhatsApp
          </span>
        </a>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative group transition-all duration-300 w-10 hover:w-36">
        <a
          href="mailto:najahaja00@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 w-full"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl w-10" />
          <span className="opacity-0 group-hover:opacity-100 font-semibold whitespace-nowrap transition-opacity duration-300 ml-2">
            Email
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
