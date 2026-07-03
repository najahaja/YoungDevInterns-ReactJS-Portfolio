import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer Intern ",
    company: "PINNACLOID",
    location: "Lahore, Pakistan",
    duration: "Aug 2025 – Oct 2025",
    type: "Internship",
    description: [
      "Build and scale foundational full-stack features using Node.js and React.js to support the integration of LLMs into production environments.",
      "Optimize 12+ REST API endpoints and data retrieval systems, reducing latency by 25% to facilitate real time Retrieval-Augmented Generation (RAG) workflows.",
      "Leverage Node.js for backend orchestration, ensuring seamless product integration and resolving 30+ critical bugs within the production cycle.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Node.js & Express",
      "PostgreSQL",
      "MongoDB",
      "Redux",
    ],
  },
  {
    role: "Machine Learning Intern ",
    company: "ARCH TECHNOLOGIES",
    location: "Remote",
    duration: "June 2025 – July 2025",
    type: "Internship",
    description: [
      "Integrate LLM technologies by fine-tuning LLaMA 3.2 (3B) using Prompt Engineering and medical chain-of-thought datasets to leverage proprietary healthcare data.",
      "Deploy brain tumor segmentation systems using YOLO 11 and SAM2, achieving 89.5% accuracy through optimized MLOps principles and model evaluation. ",
      "Build Agentic Workflows for medical data processing, implementing voice cloning pipelines and Vector databases for efficient information retrieval. ",
    ],
    tech: [
      "PyTorch",
      "Hugging Face",
      "NumPy & Pandas",
      "Scikit-learn",
      "Matplotlib & Seaborn",
    ],
  },
  {
    role: "React Developer ",
    company: "YoungDevInterns",
    location: "Remote",
    duration: "Sep 2024 – Oct 2024",
    type: "Internship",
    description: [
      "Build 3+ production-ready web applications leveraging React.js, Redux, and Tailwind CSS to deliver scalable UIs for proprietary data platforms. ",
      "Collaborate within Agile/SCRUM teams to integrate modular interfaces, ensuring the delivery of high-value tools for the non-profit sector and social good. ",
    ],
    tech: ["React.js", "TailwindCSS", "Vite", "Redux", "Context API"],
  },
  {
    role: "React Developer (Freelance)",
    company: "Self-Employed",
    location: "Remote",
    duration: "2026 – present",
    type: "Freelance",
    description: [
      "Developed responsive React web applications for clients using Vite, Redux, and Tailwind CSS.",
      "Integrated REST APIs and built dynamic dashboards with real-time data visualization.",
      "Delivered 3+ projects on time with high client satisfaction.",
    ],
    tech: ["React", "Vite", "Redux", "Tailwind CSS", "REST APIs"],
  },
];

const typeColors = {
  Internship: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500",
  Research: "bg-blue-500/10 text-blue-600 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500",
  Freelance: "bg-purple-500/10 text-purple-600 border-purple-500/30 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500",
};

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="EducationBody flex flex-col justify-center items-center min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-slate-800 dark:text-slate-200 py-20 px-4 md:px-12 transition-colors duration-300"
    >
      {/* Title */}
      <motion.div
        className="text-3xl font-extrabold font-mono text-amber-500 dark:text-amber-400 mb-12 self-start md:self-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ..// work experience
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Dot on timeline */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-500 dark:bg-amber-400 rounded-full border-2 border-white dark:border-slate-950 transform -translate-x-1/2 mt-6 z-10" />

            {/* Card */}
            <div
              className={`ml-10 md:ml-0 md:w-5/12 bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:shadow-xl rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
              }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-amber-600 dark:text-amber-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full border font-semibold ${typeColors[exp.type]}`}
                >
                  {exp.type}
                </span>
              </div>

              <p className="text-xs text-amber-600/80 dark:text-amber-400/80 font-mono mb-3">
                {exp.duration}
              </p>

              {/* Description */}
              <ul className="flex flex-col gap-1.5 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-amber-500 dark:text-amber-400 mt-0.5">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 dark:border-amber-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
