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
            I am a final-year Computer Engineering student with a strong foundation in front-end development and a growing interest in Artificial Intelligence and Machine Learning. Over the past year, I have built and deployed multiple projects using React.js, JavaScript, HTML, CSS, and Bootstrap, all of which are available on my GitHub portfolio. My hands-on experience with tools like Visual Studio Code, Git, and Vite has helped me develop responsive, scalable, and user-friendly web applications.
            <br /><br />
            Recently, I have expanded my skill set into the AI/ML domain, completing several machine learning projects on Kaggle that involve data preprocessing, model training, and evaluation using Python, Pandas, Scikit-Learn, and Matplotlib. I am passionate about blending my front-end development skills with AI to build intelligent, interactive web applications that offer smart user experiences. I continuously strive to stay up to date with modern technologies and apply my knowledge to real-world problem-solving.
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
