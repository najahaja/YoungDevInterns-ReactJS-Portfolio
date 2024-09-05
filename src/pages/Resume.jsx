import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

function Resume() {
  return (
    <div className="resume-body flex flex-col md:flex-row font-bold pt-8 px-4 md:pl-12 md:pb-8">
      <Link to="/">
        <div className="g-btn mb-4 md:mb-0" title="Home">
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </div>
      </Link>

      <div className="resume-content h-full w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
        <img
          src="./WorkCV.png"
          alt="resume"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        />
        <a
          href="./WorkCV.pdf"
          download
          className="g-btn-2 mt-4 md:mt-0"
          title="Download Resume"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          .PDF
        </a>
      </div>
      <SideBar />
    </div>
  );
}

export default Resume;
