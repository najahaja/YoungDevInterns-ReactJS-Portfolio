import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-amber-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* 404 Number */}
      <motion.div
        className="text-[10rem] md:text-[14rem] font-extrabold text-amber-400/20 leading-none select-none font-mono"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        404
      </motion.div>

      {/* Message */}
      <motion.div
        className="flex flex-col items-center gap-4 -mt-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="font-mono text-amber-400 text-xl font-bold tracking-widest">
          ..// page not found
        </span>
        <p className="text-white/60 text-center max-w-sm px-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 rounded-full bg-amber-400 text-black font-bold hover:bg-amber-300 transition-all duration-300 text-sm"
          >
            ← Back to Home
          </Link>
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded-full border-2 border-amber-400 text-amber-400 font-bold hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Animated floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-30"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default NotFound;
