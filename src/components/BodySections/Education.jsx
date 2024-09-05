import React, { useState } from "react";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      id="education"
      className="EducationBody flex flex-col justify-center items-center h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-white"
    >
      <div className="flex flex-col md:flex-row w-full md:w-9/12 relative">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 md:pl-10 flex flex-col items-end">
          <div className="education-body-title text-2xl md:text-3xl font-extrabold font-mono text-amber-400 
            text-right md:relative md:right-0 md:top-0 
            mb-4 mt-4 md:mt-0 md:pt-0 pt-16 whitespace-nowrap md:pr-0 pr-10">
            ..// academic history
          </div>
          <ul className="flex flex-row justify-center w-full p-2  md:p-8">
            <li
              className={`cursor-pointer text-md md:text-lg font-semibold p-3 mx-2  rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 1 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              B.Sc
            </li>
            <li
              className={`cursor-pointer text-md md:text-lg font-semibold p-3 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 2 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              A/L's
            </li>
          </ul>
        </div>
        {/* Content Box */}
        <div className="flex-1 p-4 w-auto mt-4 md:mt-16">
          {selectedOption === 1 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-6 pb-6 pr-4 pl-4 flex flex-col gap-4 md:gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-xl md:text-3xl font-semibold text-amber-300">
                  Bachelor of Science in Computer Engineering
                </div>
                <div className="d-address text-base md:text-lg">
                  The University of Lahore, <br /> Lahore, Pakistan.
                </div>
              </div>
              <div className="degree-extra flex flex-row md:flex-row gap-4 md:gap-6">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-xl md:text-2xl font-medium text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-base md:text-lg">
                    Artificial Intelligence
                  </div>
                 
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center">
                  <div className="text-xl md:text-2xl font-medium text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-base md:text-lg">4 Years</div>
                  <div className="text-sm md:text-base">2022-Present</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-xl md:text-2xl font-medium text-amber-300">
                    Grades Achieved:
                  </div>
                  <div className="text-base md:text-lg">3.87/4.00</div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 2 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-6 pb-6 pr-4 pl-4 flex flex-col gap-4 md:gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-xl md:text-3xl font-semibold text-amber-300">
                  Higher Secondary Education
                </div>
                <div className="d-address text-base md:text-lg">
                  Ak/Addalaichenai M.M.V (National School)
                  <br /> Addalachenai, Sri Lanka
                </div>
              </div>
              <div className="degree-extra flex flex-row md:flex-row gap-4 md:gap-6">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-xl md:text-2xl font-medium text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-base md:text-lg">Physical Science</div>
                  
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center">
                  <div className="text-xl md:text-2xl font-medium text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-base md:text-lg">3 Years</div>
                  <div className="text-sm md:text-base">2017-2020</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-xl md:text-2xl font-medium text-amber-300">
                    Grades Achieved:
                  </div>
                  <div className="text-base md:text-lg">
                    <div className="maths a"> Combined Mathematics: B</div>
                    <div className="chemistry a">Chemistry: B</div>
                    <div className="physics a">Physics: C</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
