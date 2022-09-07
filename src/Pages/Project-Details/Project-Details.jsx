import React from "react";
import pic from "../../assets/images/techstack.png";
import projects from "../../data/projects";
import ProjectCard from "../../Components/Project-Card/Project-Card";
import { useParams } from "react-router-dom";
import getProject from "../../utils/getProject";

const ProjectDetails = () => {
  window.scrollTo(0, 0);
  const { projectId } = useParams();
  console.log(getProject(projects, projectId));
  const project = getProject(projects, projectId);
  return (
    <div className="py-8 w-[90%] mx-auto">
      <h1 className="text-5xl font-semibold mb-8">{projectId}</h1>
      <p className="my-8 text-lg leading-loose max-w-[60%]">{project[0].explanation}</p>
      <div className="flex mb-5 gap-x-10">
        <div>
          <h2 className="text-xl font-semibold">Stack</h2>
          <div className="flex gap-x-4 mt-4">
            {
              project[0].stack.map((el, i) => <p key={i}>{el}</p>)
            }
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="flex gap-x-4 mt-4 font-semibold">
            <p className="cursor-pointer border-b-2 border-black">
              View Live Site
            </p>
            <p className="cursor-pointer border-b-2 border-black">
              Source Code
            </p>
          </div>
        </div>
      </div>
      <figure className="overflow-hidden h-[10%] mx-auto">
        <img src={pic} alt={`${projectId} project`} />
      </figure>

      <h2 className="mt-8 text-5xl font-semibold">
        Web Stack And Explanation
      </h2>
      <p className="mt-8 text-lg leading-loose max-w-[60%]">
        {project[0]["web_stack"]}
      </p>

      <h2 className="mt-8 text-5xl font-semibold">
        Lessons Learned
      </h2>
      <p className="mt-8 text-lg max-w-[60%] leading-loose">
      {project[0]["lessons"]}
      </p>

      <h2 className="mt-8 text-5xl font-semibold">
        Other Projects
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-10 mx-auto">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard title={project.title} desc={project.desc} />
        ))}
      </div>
      <p className="mt-10 text-center">Made with ❤ by Onumaegbu Chima.</p>
    </div>
  );
};

export default ProjectDetails;
