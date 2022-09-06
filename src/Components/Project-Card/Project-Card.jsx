import React from "react";
import pic from "../../assets/images/DSC_1825.jpg";

const ProjectCard = ({ title, desc }) => (
  <div className="overflow-hidden rounded-lg border-stone-800 border-[1px]">
    <figure>
      <img src={pic} alt="project" />
    </figure>
    <div className="p-2">
      <h1 className="text-2xl font-medium mt-5 uppercase">{title}</h1>
      <p className="mt-4">{desc}</p>
      <button className="block py-2 px-4 bg-black text-white mx-auto my-4 text-center rounded-md hover:scale-105 transition-all">
        View Project
      </button>
    </div>
  </div>
);

export default ProjectCard;
