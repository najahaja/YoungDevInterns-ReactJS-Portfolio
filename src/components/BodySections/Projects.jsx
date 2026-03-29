import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";
import video1 from "../../../src/assets/Images/Connect-four.mp4";
import video2 from "../../../src/assets/Images/Food Cart.mp4";
import video3 from "../../../src/assets/Images/Inference-and-Evaluation-of-MedSAM-2-on-Brain-Tumor-Segmentation-BRATS-2019.mp4"
import video4 from "../../../src/assets/Images/TaskB1.mp4";
import video5 from "../../../src/assets/Images/Sentiment Analysis.mp4"
import video6 from "../../../src/assets/Images/Travel Planner Agent.mp4"
const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects = [
    { 
      src: video1, 
      title: "Connect Four Game Using C++ with SFML Graphics", 
      demo: "https://github.com/najahaja/Connect-four", 
      source: "https://github.com/najahaja/Connect-four", 
      lang: "C++", 
      tools: "DevC++, GCC, Git, SFML" 
    },
    { 
      src: video2, 
      title: "CartApp with React and Vite", 
      demo: "https://main--addcartap.netlify.app/", 
      source: "https://github.com/najahaja/addcart", 
      lang: "JavaScript, CSS, HTML", 
      tools: "React, Vite, Webpack, Redux, React Router, Axios/Fetch" 
    },
   
    { 
      src: video3, 
      title: "Inference-and-Evaluation-of-MedSAM-2-on-Brain-Tumor-Segmentation-BRATS-2019", 
      demo: "https://github.com/najahaja/Inference-and-Evaluation-of-MedSAM-2-on-Brain-Tu-mor-Segmentation-BRATS-2019-", 
      source: "https://github.com/najahaja/Inference-and-Evaluation-of-MedSAM-2-on-Brain-Tu-mor-Segmentation-BRATS-2019-", 
      lang: "Python", 
      tools: "Jupyter Notebook, Pytorch, Numpy, matplotlib"
    },
    { 
      src: video4, 
      title: "TumorDetection", 
      demo: "https://github.com/najahaja/TumorDetection", 
      source: "https://github.com/najahaja/TumorDetection", 
      lang: "Python", 
      tools: "Jupyter Notebook, Pytorch, Numpy, matplotlib,Streamlit"
    },
    { 
      src: video5, 
      title: "Sentiment Analysis", 
      demo: "https://huggingface.co/spaces/najahaja/Sentiment-Analysis", 
      source: "https://github.com/najahaja/Sentiment-Analysis", 
      lang: "Python", 
      tools: "Huggingface, BERT, Bi-LSTM, TF-IDF + Logistic Regression, Scikit-learn,PyTorch"
    },
    { 
      src: video6, 
      title: "Travel Planner Agent", 
      demo: "https://travel-planner-agent-1.streamlit.app/", 
      source: "https://github.com/najahaja/Travel-Planner-Agent", 
      lang: "Python", 
      tools: "LangGraph, LangChain, Tavily Search API, Antigravity IDE"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div
      id="projects"
      className="AboutBody flex flex-col items-center py-12 px-4 md:px-20 min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-black"
    >
      {/* Section Title */}
      <div className="w-full text-center mb-8">
        <div className="text-3xl font-extrabold font-mono text-amber-400">
          ..// projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg text-xl text-white cursor-pointer overflow-hidden aspect-video w-full"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {project.isPlaceholder ? (
              <div className="w-full h-full bg-black/50 flex items-center justify-center font-semibold text-xl hover:bg-black/80 hover:text-amber-400">
                Coming Soon
              </div>
            ) : (
              <>
                <video autoPlay muted loop className="w-full h-full object-cover">
                  <source src={project.src} type="video/mp4" />
                </video>
                {hoveredIndex === index && (
                  <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 p-4">
                    <div className="font-bold text-center md:text-lg text-base">{project.title}</div>
                    <div className="links flex flex-col md:flex-row items-center justify-center gap-5">
                      <a
                        className="card-button md:text-lg text-base md:p-3 p-1 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faEye} />
                        Live Demo
                      </a>
                      <a
                        className="card-button md:text-lg text-base md:p-3 p-1 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        View Source
                      </a>
                    </div>
                    <div className="text-xs flex flex-col gap-1 items-center mt-4">
                      <span>Written in: {project.lang}</span>
                      <span>Tools: {project.tools}</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button - only shows when there are more than 4 projects */}
      {projects.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-8 py-3 rounded-full font-bold text-base tracking-wide border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
        >
          {showAll ? "Show Less ▲" : "Load More ▼"}
        </button>
      )}
    </div>
  );
};

export default Projects;
