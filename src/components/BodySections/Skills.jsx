import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      className="EducationBody flex flex-col justify-center items-center min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-slate-800 dark:text-slate-200 transition-colors duration-300"
      id="skills"
    >
      {/* Title Section */}
      <motion.div 
        className="absolute top-10 w-full text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="skills-body-title text-3xl font-extrabold font-mono text-amber-500 dark:text-amber-400">
          ..// skills
        </div>
      </motion.div>

      {/* Skills Content */}
      <div className="flex flex-col md:flex-row w-full md:w-9/12 gap-8 md:gap-16 justify-center items-center px-4 md:px-0 mt-32"> {/* Increased margin-top */}
        <motion.div 
          className="skill-sec1 flex flex-col text-left gap-3 pt-6 pb-6 pr-4 pl-4 rounded-xl bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:pr-8 md:pl-8 w-full md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="text-2xl md:text-3xl font-bold border-b-2 border-amber-500 dark:border-amber-400 p-2 text-amber-500 dark:text-amber-400">
            AI/ML
          </span>
          <ul className="flex flex-col gap-0 font-semibold text-base text-slate-600 dark:text-slate-300 leading-relaxed text-left pl-0 list-none mt-2">
            <li>Python</li>
            <li>TensorFlow/PyTorch</li>
            <li>LLM Integration (RAG)</li>
            <li>Agentic Orchestration</li>
            <li>MLOps Principles</li>
            <li>Stable-Baselines3 (RL)</li>
            <li>GeoPandas / OSMnx</li>
            <li>Scikit-learn</li>
            <li>Pandas, NumPy</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="skill-sec2 flex flex-col text-center gap-5 pt-6 pb-6 pr-2 pl-2 rounded-xl bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:pr-3 md:pl-3 w-full md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-2xl md:text-3xl font-bold border-b-2 border-amber-500 dark:border-amber-400 p-2 text-amber-500 dark:text-amber-400">
            Tools
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-slate-600 dark:text-slate-300 mt-2">
            <li>Git, GitHub</li>
            <li>Vector Databases (Pinecone/Chroma)</li>
            <li>Visual Studio Code</li>
            <li>AWS (AI Services)</li>
            <li>Snowflake</li>
            <li>Jupyter Lab</li>
            <li>Google Colab</li>
            <li>Docker</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="skill-sec3 flex flex-col text-right gap-5 pt-6 pb-6 pr-4 pl-4 rounded-xl bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:pr-10 md:pl-10 w-full md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-2xl md:text-3xl font-bold border-b-2 border-amber-500 dark:border-amber-400 p-2 text-amber-500 dark:text-amber-400">
            Web & Others
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-slate-600 dark:text-slate-300 mt-2">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>SQL</li>
            <li>REST APIs</li>
            <li>Redux</li>
            <li>FastAPI / Flask</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
