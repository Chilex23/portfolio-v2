import React from "react";
import pic from "../../assets/images/techstack.png";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const ProjectCard = ({ title, desc, webpPic }) => (
  <div className="overflow-hidden">
    <figure className="hover:scale-105 transition-all rounded-lg overflow-hidden">
      <img src={webpPic ? webpPic : pic} alt="project" />
    </figure>
    <div>
      <h1 className="text-4xl font-semibold mt-5">{title}</h1>
      <p className="mt-4">{desc}</p>
      <Link
        to={`/projects/${title}`}
        className="w-max my-4 uppercase font-semibold relative flex items-center transition-all border-b-2 border-transparent hover:border-black"
      >
        View Project
        <span className="ml-1"><AiOutlineRight /></span>
      </Link>
    </div>
  </div>
);

export default ProjectCard;
