import React from "react";
// import pic from "../../assets/images/headshot.jpg";
import webpPic from "../../assets/images/headshot-1.webp";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const CTA = () => (
  <>
    <div
      className={`relative z-10 mt-7 mx-5 sm:mx-20 text-4xl tablet:text-5xl font-semibold leading-tight md:flex gap-5 tablet:gap-28 quote before:absolute before:text-[30rem] before:-left-[2rem] before:-top-[6rem] before:dark:text-gray-600 before:text-gray-300 before:-z-20`}
    >
      <motion.div
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="w-full md:w-[80%] overflow-hidden pt-10 leading-[4rem]"
      >
        <h1>Hello 👋,</h1>
        <p>
          I'm <span className="heading">Onumaegbu Chima</span>, Software Engineer.
        </p>
        <p>I build things for the web.</p>
      </motion.div>
      <motion.figure
        initial={{ translateX: 2000 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1, ease: [0.31, 0.1, 0.66, 0.66], delay: 0.6 }}
        className="overflow-clip w-fit mx-auto md:mx-0 relative -z-10 flex justify-center items-center mt-16 md:mt-4 md:ml-16 p-4 before:content-[''] before:border-2 before:border-black before:w-[85%] before:h-[90%] before:absolute before:right-[5px] before:top-0 before:rounded-lg before:dark:border-gray-600 "
      >
        <img
          src={webpPic}
          alt="Headshot"
          title="headshot"
          className="relative object-cover w-52 h-52 rounded-lg"
        />
      </motion.figure>
    </div>

    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66], delay: 1 }}
      className="mx-5 sm:mx-20 mt-16 flex gap-x-5 relative before:content-[''] before:absolute before:h-[3px] before:w-[70%] before:left-0 before:-top-[15px] before:bg-gray-400 before:dark:bg-gray-600"
    >
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
      <a
        href="mailto: onumaegbuchilex@gmail.com"
        target="blank"
        className="cursor-pointer text-3xl hover:text-red-700"
      >
        <SiGmail />
      </a>
    </motion.div>
  </>
);

export default CTA;
