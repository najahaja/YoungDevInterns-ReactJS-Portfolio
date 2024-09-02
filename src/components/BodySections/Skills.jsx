import React from "react";

const Skills = () => {
  return (
    <div
      className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
      id="skills"
    >
      <div className="skills-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
        ..// skills
      </div>

      <div className="flex w-9/12 gap-16 justify-center items-center">
        <div className="skill-sec1 flex flex-col text-left gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
          <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
            Web Technologies
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript-ES6</li>
            <li>React</li>
            <li>Vite</li>
            <li>TailWindCSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-sec2 flex flex-col text-center gap-5 pt-6 pb-6 pr-12 pl-12 rounded bg-white/10 hover:bg-black/40">
          <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
            Tools
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>Git,Github </li>
            <li>MATLAB</li>
            <li>Multisim</li>
            <li>IntelliJ IDEA</li>
            <li>Eclipse</li>
            <li>PyCharm</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="skill-sec3 flex flex-col text-right gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
          <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
            Others
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>React Router</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>VHDL,DLD</li>
            <li>Assembly Language</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
