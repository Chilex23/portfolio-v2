import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, webpPic, pngPic }) => (
  <motion.div initial={{translateY: 100 }} whileInView={{translateY: 0}} className="overflow-hidden transition-all">
    <figure className="hover:scale-105 transition-all rounded-lg overflow-hidden">
      <img src={webpPic ? webpPic : pngPic} alt="project" />

    </figure>
    <div>
      <h1 className="text-4xl font-semibold mt-5">{title}</h1>
      <p className="mt-4">{desc}</p>
      <Link
        to={`/projects/${title}`}
        className="w-max my-4 uppercase font-semibold relative flex items-center transition-all border-b-2 border-transparent hover:border-black hover:dark:border-gray-300"
      >
        View Project
        <span className="ml-1"><AiOutlineRight /></span>
      </Link>
    </div>
  </motion.div>
);

export default ProjectCard;
