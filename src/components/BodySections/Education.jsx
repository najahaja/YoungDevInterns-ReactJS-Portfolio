import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      id="education"
      className="EducationBody flex flex-col justify-center items-center min-h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-slate-800 dark:text-slate-200 transition-colors duration-300 p[...]
    >
      <div className="flex flex-col md:flex-row w-full md:w-9/12 relative mt-16 md:mt-0">
        {/* Sidebar */}
        <motion.div 
          className="w-full md:w-1/4 md:pl-10 flex flex-col items-center md:items-end md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl md:text-3xl font-extrabold font-mono text-amber-500 dark:text-amber-400 text-center md:text-right mb-6 whitespace-nowrap">
            ..// academic history
          </div>
          <ul className="flex flex-row md:flex-col justify-center w-full md:w-auto gap-4 p-2 md:p-0">
            <li
              className={`cursor-pointer text-md md:text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm border ${
                selectedOption === 1 
                  ? "bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-500/50 shadow-md transform md:translate-x-2" 
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
              onClick={() => handleOptionClick(1)}
            >
              B.Sc
            </li>
            <li
              className={`cursor-pointer text-md md:text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm border ${
                selectedOption === 2 
                  ? "bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-500/50 shadow-md transform md:translate-x-2" 
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
              onClick={() => handleOptionClick(2)}
            >
              A/L's
            </li>
          </ul>
        </motion.div>
        
        {/* Content Box */}
        <div className="flex-1 p-4 md:p-6 w-full mt-4 md:mt-0 relative min-h-[350px]">
          <AnimatePresence mode="wait">
            {selectedOption === 1 && (
              <motion.div 
                key="bsc"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col gap-6 shadow-xl"
              >
                <div className="flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">
                    Bachelor of Science in Computer Engineering
                  </div>
                  <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium">
                    The University of Lahore, <br /> Lahore, Pakistan.
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400">
                      Major:
                    </div>
                    <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium">
                      Artificial Intelligence
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-1 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm text-center">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400">
                      Tenure:
                    </div>
                    <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium">4 Years</div>
                    <div className="text-sm md:text-base text-slate-500 dark:text-slate-400">2022-2026</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm text-right">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400">
                      Grades Achieved:
                    </div>
                    <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-bold">3.93/4.00</div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {selectedOption === 2 && (
              <motion.div 
                key="als"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col gap-6 shadow-xl"
              >
                <div className="flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">
                    Higher Secondary Education
                  </div>
                  <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium">
                    Ak/Addalaichenai M.M.V (National School)
                    <br /> Addalachenai, Sri Lanka
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400">
                      Major:
                    </div>
                    <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium">Physical Science</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-1 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm text-center">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400">
                      Tenure:
                    </div>
                    <div className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium">3 Years</div>
                    <div className="text-sm md:text-base text-slate-500 dark:text-slate-400">2017-2020</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm text-right">
                    <div className="text-lg md:text-xl font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Grades Achieved:
                    </div>
                    <div className="text-sm md:text-base text-slate-700 dark:text-slate-200 font-medium flex flex-col gap-1">
                      <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
                        <span>Combined Maths:</span><span className="font-bold text-emerald-600 dark:text-emerald-400">B</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
                        <span>Chemistry:</span><span className="font-bold text-emerald-600 dark:text-emerald-400">B</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Physics:</span><span className="font-bold text-amber-500 dark:text-amber-400">C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Education;
