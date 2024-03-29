import React from "react";
import projects from "../../data/projects";
import ProjectCard from "../../Components/Project-Card/Project-Card";
import ImgWithFallback from "../../Components/ImgWithFallBack/ImgWithFallBack";
import { useParams } from "react-router-dom";
import getProject from "../../utils/getProject";
import { motion } from "framer-motion";

const headerAnimate = {
  hidden: { translateX: -100, opacity: 0 },
  show: { translateX: 0, opacity: 1 },
};

const ProjectDetails = () => {
  window.scrollTo(0, 0);
  const { projectId } = useParams();
  // console.log(getProject(projects, projectId));
  const project = getProject(projects, projectId);
  return (
    <div className="py-8 w-[90%] mx-auto">
      <motion.h1
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="text-5xl font-semibold mb-8"
      >
        {projectId}
      </motion.h1>
      <motion.p
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="my-8 text-lg leading-loose w-full md:max-w-[60%]"
      >
        {project[0].explanation}
      </motion.p>
      <div className="md:flex mb-5 gap-x-10">
        <div>
          <motion.h2
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
            className="text-xl font-semibold"
          >
            Stack
          </motion.h2>
          <div className="flex flex-wrap gap-x-4 mt-4">
            {project[0].stack.map((el, i) => (
              <p className="my-2" key={i}>
                {el}
              </p>
            ))}
          </div>
        </div>
        <div>
          <motion.h2
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold"
          >
            Links
          </motion.h2>
          <div className="flex gap-x-4 mt-4 font-semibold">
            <p className="cursor-pointer border-b-2 border-black dark:border-gray-300">
              <a href={project[0].liveLink} target="blank">
                View Live Site
              </a>
            </p>
            <p className="cursor-pointer border-b-2 border-black dark:border-gray-300">
              <a href={project[0].githubLink} target="blank">
                Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
      <motion.figure
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="overflow-hidden h-[10%] mx-auto"
      >
        <ImgWithFallback
          fallback={project[0].pngscreenshot}
          src={project[0].webpscreenshot}
          alt={`${projectId} screenshot`}
          classList=""
        />
      </motion.figure>
      <motion.figure
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="overflow-hidden h-[10%] mx-auto mt-16"
      >
        <ImgWithFallback
          fallback={project[0].pngscreenshot2}
          src={project[0].webpscreenshot2}
          alt={`${project[0].title} screenshot`}
          classList=""
        />
      </motion.figure>

      <motion.h2
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="mt-8 text-5xl font-semibold"
      >
        Web Stack And Explanation
      </motion.h2>
      <motion.p
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="mt-8 text-lg leading-loose w-full md:max-w-[60%]"
      >
        {project[0]["web_stack"]}
      </motion.p>

      <motion.h2
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="mt-8 text-5xl font-semibold"
      >
        Lessons Learned
      </motion.h2>
      <motion.p
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="mt-8 text-lg w-full md:max-w-[60%] leading-loose"
      >
        {project[0]["lessons"]}
      </motion.p>

      <motion.h2
        variants={headerAnimate}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
        className="mt-8 text-5xl font-semibold"
      >
        Other Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-5 mt-10 mx-auto">
        {projects
          .filter((el) => el.title !== projectId)
          .slice(0, 3)
          .map(({ title, desc, webpscreenshot }, i) => (
            <ProjectCard
              key={i}
              title={title}
              desc={desc}
              webpPic={webpscreenshot}
            />
          ))}
      </div>
      <p className="mt-10 text-center">Made with ❤ by Onumaegbu Chima.</p>
    </div>
  );
};

export default ProjectDetails;
