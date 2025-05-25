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
            I’m a final-year Computer Engineering student with strong experience in front-end development, particularly in React.js, JavaScript, HTML, and CSS. I've built and deployed multiple projects, all showcased on my GitHub and portfolio.
            <br /><br />
            Recently, I’ve started working in AI/ML, completing projects on Kaggle using Python, Pandas, and Scikit-Learn. I'm passionate about combining intelligent systems with clean, user-focused interfaces and constantly strive to stay updated with modern technologies.
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
