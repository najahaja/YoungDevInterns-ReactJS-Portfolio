import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center relative h-screen w-full text-white font-bold bg-cover bg-no-repeat"
      id="about"
    >
      <div className="wrapper flex flex-col md:flex-row h-full w-full px-4 md:px-8">
        <div className="about-body-left flex-1 flex items-center justify-center">
          {/* You can add an image or other content here */}
        </div>
        <div className="about-body-right flex-1 flex flex-col gap-10 items-center justify-center">
          <div className="about-body-right-title text-3xl text-amber-400 pt-10 md:pt-0">
            About me:
          </div>
          <div className="about-body-right-content text-justify px-4 md:px-8">
            I am a Computer Engineering student currently in my 5th semester with a strong foundation in HTML, CSS, JavaScript, React.js, and Bootstrap, alongside proficiency in Python, C, C++, and Java. My experience with Visual Studio Code, IntelliJ IDEA, Vite, and Git complements my academic knowledge, allowing me to build and maintain efficient, scalable web applications.
            <br /><br />
            As a dedicated Frontend Developer, I am passionate about creating user-friendly and visually appealing websites and am committed to staying updated with the latest frontend technologies. I am also excited to transition into Artificial Intelligence (AI) Engineering, where I aim to combine my technical skills and programming background to develop AI-powered applications and intelligent systems that drive innovation and enhance user experiences.
          </div>
          <Link to="/resume">
            <div
              className="g-btn-2 hover:scale-110   "
              title="Click to view Resume"
            >
              Resume
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
