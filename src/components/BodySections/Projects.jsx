import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";
import video1 from "../../../src/assets/Images/Connect-four.mp4"; 
import video2 from "../../../src/assets/Images/Food Cart.mp4"; 

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const videos = [
    { src: video1, title: "Connect Four Game Using C++ with SFML Graphics", demo: "https://github.com/najahaja/Connect-four", source: "https://github.com/najahaja/Connect-four", lang: "C++", tools: "DevC++, GCC, Git, SFML" },
    { src: video2, title: "CartApp with React and Vite", demo: "https://main--addcartap.netlify.app/", source: "https://github.com/najahaja/addcart", lang: "JavaScript, CSS, HTML", tools: "React, Vite, Webpack, Redux, React Router, Axios/Fetch" }
  ];

  return (
    <div
      id="projects"
      className="AboutBody grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-20 min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-black"
    >
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative rounded text-xl text-white cursor-pointer overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card relative w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {hoveredIndex === index && (
              <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 p-4">
                <div className="font-bold text-center">{video.title}</div>
                <div className="links flex flex-col md:flex-row items-center justify-center gap-5">
                  <a
                    className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                    href={video.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    Live Demo
                  </a>
                  <a
                    className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                    href={video.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    View Source
                  </a>
                </div>
                <div className="text-xs flex flex-col gap-1 items-center mt-4">
                  <span>Written in: {video.lang}</span>
                  <span>Tools: {video.tools}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Placeholders for "Coming Soon" sections */}
      <div className="soon bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        Coming Soon
      </div>
      <div className="soon bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        Coming Soon
      </div>
    </div>
  );
};

export default Projects;
