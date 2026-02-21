import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faExternalLinkAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// Sorted by date: latest first
const certificates = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-06-04",
    credentialUrl: "https://coursera.org/verify/specialization/JIMOOX7CQM10",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Sequence Models",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-06-04",
    credentialUrl: "https://coursera.org/verify/FESNO7MMZWMO",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-05-27",
    credentialUrl: "https://coursera.org/verify/GBMQ7830W2O3",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-05-09",
    credentialUrl: "https://coursera.org/verify/OFKIFE1PC1YE",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title:
      "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-04-15",
    credentialUrl: "https://coursera.org/verify/UNEMFCB1MK1X",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-03-22",
    credentialUrl: "https://coursera.org/verify/4KBNNCED027M",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-02-28",
    credentialUrl: "https://coursera.org/verify/WT9XVBUDDMG7",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-02-15",
    credentialUrl: "https://coursera.org/verify/9QTXLXYO2053",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera – DeepLearning.AI",
    date: "2026-01-06",
    credentialUrl: "https://coursera.org/verify/O7LZ7W25X3TR",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "AI For Everyone",
    issuer: "Coursera – DeepLearning.AI",
    date: "2024-12-25",
    credentialUrl: "https://coursera.org/verify/2RLZL55OD6CQ",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "2024-12-21",
    credentialUrl:
      "https://www.freecodecamp.org/certification/developerN/data-analysis-with-python-v7",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "2024-11-17",
    credentialUrl:
      "https://www.freecodecamp.org/certification/developerN/scientific-computing-with-python-v7",
    category: "AI/ML",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/30",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024-08-12",
    credentialUrl:
      "https://www.freecodecamp.org/certification/developerN/front-end-development-libraries",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024-04-23",
    credentialUrl:
      "https://www.freecodecamp.org/certification/developerN/javascript-algorithms-and-data-structures",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "Coursera – University of Michigan",
    date: "2024-01-23",
    credentialUrl: "https://coursera.org/verify/DLJ7X6WXUG3L",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023-10-07",
    credentialUrl:
      "https://www.freecodecamp.org/certification/developerN/responsive-web-design",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Advanced React",
    issuer: "Coursera – Meta",
    date: "2023-09-30",
    credentialUrl: "https://coursera.org/verify/8WXN7KN5BQEA",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera – Meta",
    date: "2023-01-02",
    credentialUrl: "https://coursera.org/verify/C5QSGRP4V2GB",
    category: "Web Dev",
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30",
  },
];

const categoryColors = {
  "AI/ML": "bg-blue-500/20 text-blue-300 border-blue-400/40",
  Cloud: "bg-orange-500/20 text-orange-300 border-orange-400/40",
  "Web Dev": "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
  DevOps: "bg-red-500/20 text-red-300 border-red-400/40",
};

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certificates : certificates.slice(0, 4);

  return (
    <div
      id="certificates"
      className="EducationBody flex flex-col justify-center items-center min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-white py-20 px-4 md:px-12"
    >
      {/* Title */}
      <motion.div
        className="text-3xl font-extrabold font-mono text-amber-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ..// certificates
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        <AnimatePresence>
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.title + cert.date}
              className={`relative bg-gradient-to-br ${cert.color} border ${cert.border} rounded-xl p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Icon + Category */}
              <div className="flex items-center justify-between">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-amber-400 text-2xl"
                />
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${categoryColors[cert.category] || "bg-white/10 text-white/70 border-white/20"}`}
                >
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white leading-snug">
                {cert.title}
              </h3>

              {/* Issuer + Date */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm text-white/60">{cert.issuer}</p>
                <p className="text-xs text-amber-400/70 font-mono">
                  {cert.date}
                </p>
              </div>

              {/* View Credential */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                View Credential
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button — only shows when more than 4 */}
      {certificates.length > 4 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-8 py-3 rounded-full font-bold text-base tracking-wide border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {showAll ? (
            <>
              <FontAwesomeIcon icon={faChevronUp} /> Show Less
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faChevronDown} /> Load More (
              {certificates.length - 4} more)
            </>
          )}
        </motion.button>
      )}
    </div>
  );
};

export default Certificates;
