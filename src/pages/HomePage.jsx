import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Home from "../components/BodySections/Home";
import About from "../components/BodySections/About";
import WorkExperience from "../components/BodySections/WorkExperience";
import Education from "../components/BodySections/Education";
import Skills from "../components/BodySections/Skills";
import Projects from "../components/BodySections/Projects";
import Certificates from "../components/BodySections/Certificates";
import Contact from "../components/BodySections/Contact";
import ScrollToTopButton from "../components/ScrollUpButton";

// Reusable scroll-reveal wrapper
const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const variants = {
    up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="pt-16">
      <Navbar />
      <SideBar />

      {/* Home — no scroll reveal, it's the hero */}
      <Home />

      {/* About */}
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>

      {/* Work Experience */}
      <ScrollReveal direction="up" delay={0.1}>
        <WorkExperience />
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal direction="right">
        <Education />
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal direction="left" delay={0.1}>
        <Skills />
      </ScrollReveal>

      {/* Projects */}
      <ScrollReveal direction="up">
        <Projects />
      </ScrollReveal>

      {/* Certificates */}
      <ScrollReveal direction="up" delay={0.1}>
        <Certificates />
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal direction="fade">
        <Contact />
      </ScrollReveal>

      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
