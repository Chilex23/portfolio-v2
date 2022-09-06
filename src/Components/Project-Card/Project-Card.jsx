import React from "react";
import pic from "../../assets/images/DSC_1825.jpg";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, desc }) => (
  <div className="overflow-hidden rounded-bl-lg rounded-t-lg border-stone-800 border-l-2 border-b-2">
    <figure>
      <img src={pic} alt="project" />
    </figure>
    <div className="p-4">
      <h1 className="text-2xl font-medium mt-5 uppercase">{title}</h1>
      <p className="mt-4">{desc}</p>
      <Link
        to={`/projects/${title}`}
        className="block w-2/4 mx-auto text-center py-2 px-4 bg-black text-white my-4 rounded-md hover:scale-105 transition-all"
      >
        View Project
      </Link>
    </div>
  </div>
);

export default ProjectCard;
