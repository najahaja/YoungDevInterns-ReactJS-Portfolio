import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center relative min-h-screen w-full transition-colors duration-300 text-slate-800 dark:text-slate-200 font-bold bg-cover bg-no-repeat py-20"
      id="about"
    >
      <div className="wrapper flex flex-col md:flex-row h-full w-full px-4 md:px-8">
        <motion.div 
          className="about-body-left flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* You can add an image or other content here */}
        </motion.div>
        
        <motion.div 
          className="about-body-right flex-1 flex flex-col gap-10 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-body-right-title text-3xl text-amber-500 dark:text-amber-400 pt-10 md:pt-0">
            About me:
          </div>
          <div className="about-body-right-content text-justify px-4 md:px-8 font-normal leading-relaxed text-slate-600 dark:text-slate-300">
            I am a Computer Engineering graduate (Gold Medalist & Rank #1 in Batch, 3.94/4.00 CGPA) specializing in AI platform engineering, stateful multi-agent systems, and production MLOps.<br/><br/>
            Across three engineering internships—including building real-time voice AI agents handling 200+ daily calls with LangGraph and LiveKit at Artificizen-I bridge the gap between frontier models and fault-tolerant production infrastructure. My technical stack centers on Python, FastAPI, vLLM inference optimization, QLoRA/AWQ quantization, and rigorous CI/CD test automation.<br/><br/>
            I am passionate about building reliable, production-grade agentic architectures and automated systems that solve complex, real-world problems.
          </div>
          <Link to="/resume">
            <motion.div
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 font-semibold tracking-wide"
              title="Click to view Resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
