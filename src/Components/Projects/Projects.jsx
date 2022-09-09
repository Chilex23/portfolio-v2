import React from "react";
import projects from "../../data/projects";
import ProjectCard from "../Project-Card/Project-Card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const Projects = () => (
  <section className="mx-5 sm:mx-20 mt-32">
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="text-5xl font-semibold"
    >
      Projects
    </motion.h1>
    <motion.p
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="my-6 text-lg w-full md:max-w-[70%] leading-loose"
    >
      I like to stay busy to improve my skills and always have a project in the
      works. Take a look at some of the applications I have built.
    </motion.p>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid md:grid-cols-2 gap-24 mt-20"
    >
      {projects.map(({ title, desc, webpscreenshot }, i) => (
        <ProjectCard
          key={i}
          title={title}
          desc={desc}
          webpPic={webpscreenshot}
        />
      ))}
    </motion.div>
    {/* <button className="block py-3 hover:scale-105 transition-all px-10 bg-black text-white mx-auto my-4 text-center rounded-3xl mt-8">
      View More
    </button> */}
  </section>
);

export default Projects;
