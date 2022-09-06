import React from "react";
import projects from "../../data/projects";
import ProjectCard from "../Project-Card/Project-Card";

const Projects = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold text-center">Projects</h1>
    <div className="grid grid-cols-3 gap-5 mt-10">
      {projects.map((project) => (
        <ProjectCard title={project.title} desc={project.desc} />
      ))}
    </div>
    <button className="block py-2 px-4 bg-black text-white mx-auto my-4 text-center rounded-md mt-8">View More</button>
  </section>
);

export default Projects;
