import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [formState, handleSubmit] = useForm("najahaja00@gmail.com");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    toggleModal();
    e.target.reset();
  };

  return (
    <div
      className="ContactBody flex flex-col justify-between items-center min-h-screen w-full relative bg-cover bg-no-repeat text-slate-800 dark:text-slate-200 transition-colors duration-300 pt-20"
      id="contact"
    >
      <div className="flex flex-col w-11/12 md:w-9/12 flex-1 justify-center items-center relative mb-16">
        {/* Title */}
        <motion.div 
          className="ContactBody-title w-full text-center md:text-right text-3xl font-extrabold font-mono text-amber-500 dark:text-amber-400 mb-8 md:pr-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ..// contact
        </motion.div>

        <form onSubmit={handleFormSubmit} className="w-full max-w-3xl">
          <motion.div 
            className="flex flex-col gap-5 pt-8 pb-10 px-6 md:px-10 bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="firstName" className="font-semibold text-slate-600 dark:text-slate-300">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 p-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  name="firstName"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="lastName" className="font-semibold text-slate-600 dark:text-slate-300">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 p-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  name="lastName"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="eMail" className="font-semibold text-slate-600 dark:text-slate-300">Enter E-mail:</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="example@coolmail.com"
                required
                className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 p-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-semibold text-slate-600 dark:text-slate-300">Subject:</label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 p-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                name="subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-slate-600 dark:text-slate-300">Write Message:</label>
              <textarea
                placeholder="Message..."
                className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 h-32 p-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none"
                name="message"
                rows={4}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-6">
              <button
                type="submit"
                className="px-6 py-3.5 w-full md:w-auto rounded-lg bg-emerald-600 dark:bg-emerald-700 text-white font-semibold flex justify-center gap-2 items-center hover:bg-amber-500 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                Submit
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <span className="text-slate-500 dark:text-slate-400 font-medium">or</span>
              <a
                href="mailto:najahaja00@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 w-full md:w-auto rounded-lg bg-emerald-600 dark:bg-emerald-700 text-white font-semibold flex justify-center gap-2 items-center hover:bg-amber-500 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                Mail Directly
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </motion.div>
        </form>
        {modal && (
          <div className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-50">
            <div
              onClick={toggleModal}
              className="bg-black/60 backdrop-blur-sm w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"
            ></div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col justify-center items-center gap-4 rounded-2xl pt-8 pb-8 pl-12 pr-12 text-center">
              <span className="text-emerald-600 dark:text-emerald-500 font-bold text-2xl">
                Message Sent Successfully!
              </span>
              <span className="text-slate-600 dark:text-slate-400 font-semibold text-lg mt-2">Thank You.</span>
              <button
                onClick={toggleModal}
                className="mt-6 pt-3 pb-3 pl-10 pr-10 rounded-lg font-bold text-white bg-emerald-600 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-slate-900 transition-colors duration-300 shadow-md hover:-translate-y-0.5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="footer w-full py-6 bg-slate-100 dark:bg-black/30 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-sm gap-1 transition-colors duration-300 mt-auto">
        <span>A Vite + TailwindCSS + React App</span>
        <span className="font-semibold text-slate-700 dark:text-slate-300">Designed and Developed by Ahamed Najah</span>
        <span>All Rights Reserved @ 2026</span>
      </div>
    </div>
  );
};

export default Contact;
