import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    className="mx-20 mt-[10rem]"
  >
    <motion.h1
      initial={{ x: -1000, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-semibold"
    >
      About Me
    </motion.h1>
    <p className="mt-8 text-lg leading-loose max-w-[70%]">
      I had a background in data analysis as a Reservoir Analyst Intern, this
      experience developed my passion for software development with a keen
      interest in web development. I love creating scalable and visually
      appealing web applications.
    </p>
    <p className="text-lg leading-loose">
      At my spare time, I like to hike and collect rocks - A habit I developed
      as a Geophysicist.
    </p>
  </motion.section>
);

export default About;
