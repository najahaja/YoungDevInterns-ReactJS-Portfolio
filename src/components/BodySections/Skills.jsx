import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Agentic AI & LLM Serving",
    items: [
      "LangGraph",
      "LangChain",
      "vLLM (PagedAttention)",
      "QLoRA / PEFT",
      "AWQ / GPTQ Quantization",
      "RAG Architectures",
      "FAISS & ChromaDB",
      "LiveKit & Retell AI (Voice)",
      "LangSmith",
    ],
  },
  {
    title: "Backend & Systems Engineering",
    items: [
      "Python (Asyncio)",
      "FastAPI",
      "Pydantic",
      "Node.js / Express",
      "REST APIs",
      "PostgreSQL (Neon)",
      "MySQL",
      "MongoDB",
      "SQLAlchemy",
      "JWT / RBAC",
    ],
  },
  {
    title: "MLOps, Testing & Infra",
    items: [
      "Docker",
      "GitHub Actions (CI/CD)",
      "MLflow",
      "Pytest (90+ Automated Tests)",
      "Ruff",
      "Drift Detection (PSI/KS)",
      "Linux / Bash",
      "Git",
    ],
  },
  {
    title: "Deep Learning & Classical ML",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "Scikit-learn",
      "Stable-Baselines3 (Deep RL)",
      "YOLO11 / SAM2",
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="EducationBody flex flex-col justify-center items-center min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-slate-800 dark:text-slate-200 transition-colors duration-300"
      id="skills"
    >
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

      <div className="w-full max-w-7xl px-4 md:px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 justify-items-stretch">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="flex flex-col gap-3 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 min-h-[360px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="text-xl md:text-2xl font-bold border-b-2 border-amber-500 dark:border-amber-400 pb-2 text-amber-500 dark:text-amber-400">
                {group.title}
              </span>

              <ul className="flex flex-col gap-2 font-semibold text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed list-none m-0 p-0">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
