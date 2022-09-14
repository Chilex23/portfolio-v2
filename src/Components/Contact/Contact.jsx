import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => (
  <section className="mx-5 sm:mx-20 mt-32">
    <motion.h1
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="text-5xl font-semibold"
    >
      Contact Me!
    </motion.h1>
    <div className="w-full md:w-2/4 mt-6">
      <h2 className="text-3xl font-medium">Let's Work together.</h2>
      <p className="my-5 leading-loose">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <div className="flex">
        <a
          href="mailto: onumaegbuchilex@gmail.com"
          className="border-2 border-stone-800 dark:border-gray-300 rounded-lg py-3 px-6 hover:bg-black hover:text-white"
        >
          Say Hello
        </a>
        <a
          href="/"
          className="ml-5 border-2 border-stone-800 dark:border-gray-300 rounded-lg py-3 px-6 hover:bg-black hover:text-white"
        >
          View Resume
        </a>
      </div>
      {/* <form className="mt-6">
        <div className="mb-10 grid grid-cols-form">
          <label className="font-bold mr-8">Name :</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-stone-800 w-full h-10 p-2 rounded-sm"
          />
        </div>
        <div className="grid grid-cols-form">
          <label className="font-bold mr-3">Message :</label>
          <textarea className="border-2 border-stone-800 w-full p-2 rounded-sm h-32"></textarea>
        </div>
        <button className="block py-4 px-20 bg-black text-white mx-auto my-4 text-center rounded-3xl mt-8 hover:scale-105 transition-all">
          Send!
        </button>
      </form> */}
    </div>
    <div className="mt-8 flex gap-x-5">
      <a
        href="https://linkedin.com/in/chima-onumaegbu"
        target="blank"
        className="cursor-pointer text-3xl hover:text-sky-800"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Chilex23"
        target="blank"
        className="cursor-pointer text-3xl hover:text-gray-400"
      >
        <AiFillGithub />
      </a>
    </div>
    <p className="mt-10">Made with ❤ by Onumaegbu Chima.</p>
  </section>
);

export default Contact;
