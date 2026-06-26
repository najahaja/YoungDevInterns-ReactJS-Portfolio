import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "AI Engineer",
  "ML Engineer",
  "React Developer",
  "Full-Stack Developer",
  "LLM Specialist",
  "NLP Engineer",
];

const TypewriterText = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }, isDeleting ? 60 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-amber-500 dark:text-amber-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home = () => {
  return (
    <div
      className="HomeBody flex flex-col md:flex-row justify-center items-center gap-8 relative min-h-screen w-full transition-colors duration-300 text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 p-6 md:p-12 font-bold bg-cover bg-no-repeat bg-center"
      id="home"
    >
      {/* Left: Profile Image */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative group flex items-center justify-center">
          {/* Subtle Glow Effect behind Avatar */}
          <div className="absolute inset-0 bg-amber-400/20 dark:bg-amber-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          
          <div className="avatar h-48 w-48 md:h-64 md:w-64 bg-cover bg-center rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-xl group-hover:scale-105 group-hover:border-amber-400 transition-all duration-500 relative z-10"></div>
        </div>

        {/* Greeting + Name */}
        <div className="text-center">
          <motion.span
            className="block font-dancingScript text-xl md:text-2xl tracking-widest text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey there!
          </motion.span>
          <motion.span
            className="block text-3xl md:text-5xl font-extrabold text-center font-dm-serifDisplay tracking-wider text-amber-500 dark:text-amber-400 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I am Ahamed Najah
          </motion.span>
        </div>
      </motion.div>

      {/* Right: Roles + Description */}
      <motion.div
        className="flex flex-col items-center md:items-start gap-5 max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Typewriter Role */}
        <div className="text-2xl md:text-3xl font-semibold font-mono min-h-[2.5rem]">
          <TypewriterText />
        </div>

        {/* Role Tags */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {roles.map((role, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-semibold border border-amber-500/50 dark:border-amber-400/50 text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-400/10 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-300 cursor-default"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          An AI Engineer specializing in Agentic RAG and LLM orchestration for
          scalable product integration. Proven at optimizing production workflows
          to reduce latency by 25% while architecting data-intensive systems that
          leverage proprietary data to drive social good.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
