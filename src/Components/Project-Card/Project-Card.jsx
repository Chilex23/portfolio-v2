import React from "react";
import pic from "../../assets/images/techstack.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, desc }) => (
  <div className="overflow-hidden">
    <figure className="hover:scale-105 transition-all rounded-lg overflow-hidden">
      <img src={pic} alt="project" />
    </figure>
    <div>
      <h1 className="text-4xl font-semibold mt-5">{title}</h1>
      <p className="mt-4">{desc}</p>
      <Link
        to={`/projects/${title}`}
        className="w-max my-4 uppercase font-semibold relative before:content-['>'] before:absolute before:top-0 before:left-[7rem] flex items-center transition-all border-b-2 border-transparent hover:border-black"
      >
        View Project
      </Link>
    </div>
  </div>
);

export default ProjectCard;
