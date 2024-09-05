import React from "react";

const Home = () => {
  return (
    <div
      className="HomeBody flex flex-col justify-center items-center gap-5 relative min-h-screen w-full text-white bg-black p-6 md:p-12 font-bold bg-cover bg-no-repeat bg-center"
      id="home"
    >
      <div className="body-image-container h-48 w-48 md:h-64 md:w-64 flex items-center justify-center mb-8">
        <div className="rotating-background-container h-full w-full flex items-center justify-center">
          <div className="img-border h-full w-full border-4 border-amber-400 rounded-full"></div>
          <div className="avatar-container flex items-center justify-center h-full w-full absolute">
            <div className="avatar h-32 w-32 md:h-44 md:w-44 bg-cover bg-center rounded-full border-4 border-amber-400"></div>
          </div>
        </div>
      </div>

      <span className="relative font-dancingScript text-xl md:text-2xl tracking-widest">
        Hey there!
      </span>
      <span className="text-4xl md:text-5xl font-extrabold relative font-dm-serifDisplay tracking-wider text-amber-400">
        I am Ahamed Najah
      </span>
      <span className="text-lg md:text-2xl text-center relative font-genos">
        A Frontend Developer with a passion for creating user-friendly websites, aspiring to transition into AI Engineering to merge design and technology with intelligent systems.
      </span>
    </div>
  );
};

export default Home;
