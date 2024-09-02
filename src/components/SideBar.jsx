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
    <div class="lefttSideBar sideBar fixed top-1/4 left-0 flex flex-col items-start justify-start gap-7 p-4">
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer relative mt-2 hover:w-48">
        <a
          href="https://github.com/najahaja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icn text-2xl " />
        </a>
        <a
          href="https://github.com/najahaja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            GitHub
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer relative hover:w-48">
        <a
          href="https://www.linkedin.com/in/ahamed-najah-269011249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icn text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahamed-najah-269011249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            LinkedIn
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer relative hover:w-48">
        <Link to="/resume">
          <FontAwesomeIcon icon={faFileLines} className="icn text-2xl " />
        </Link>
        <Link to="/resume">
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            Resume
          </span>
        </Link>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer relative hover:w-48">
        <a
          href="http://wa.me/+94741772234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icn text-2xl" />
        </a>
        <a
          href="http://wa.me/+94741772234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            WhatsAPP
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer relative mb-2 hover:w-48">
        <a
          href="mailto:alhafil.najah.aj@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icn text-xl " />
        </a>
        <a
          href="mailto:alhafil.najah.aj@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            Mail
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
