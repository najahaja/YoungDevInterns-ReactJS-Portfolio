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
           I am a Mission-driven AI Engineer and Computer Engineering student (CGPA: 3.93) specializing in Agentic Orchestration and RAG pipelines. I focus on bridging the gap between AI research and production, with a proven ability to reduce system latency by 25% in live environments.<br /><br />
            Beyond model development, I leverage my full-stack expertise to build data-intensive interfaces for complex AI workflows. Whether architecting multi-agent simulations for disaster response or fine-tuning medical LLMs, I am dedicated to creating impactful, user-centric solutions.</div>
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
