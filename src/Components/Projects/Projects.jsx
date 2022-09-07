import React from "react";
import projects from "../../data/projects";
import ProjectCard from "../Project-Card/Project-Card";

const Projects = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold text-center">Projects</h1>
    <p className="my-6 text-lg">
      I like to stay busy to improve my skills and always have a project in the works. Take a look at
      some of the applications I have built.
    </p>
    <div className="grid grid-cols-2 gap-24 mt-20">
      {projects.map((project) => (
        <ProjectCard title={project.title} desc={project.desc} />
      ))}
    </div>
    {/* <button className="block py-3 hover:scale-105 transition-all px-10 bg-black text-white mx-auto my-4 text-center rounded-3xl mt-8">
      View More
    </button> */}
  </section>
);

export default Projects;
