import React from "react";
import pic from "../../assets/images/techstack.png";
import projects from "../../data/projects";
import ProjectCard from "../../Components/Project-Card/Project-Card";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  window.scrollTo(0, 0);
  const { projectId } = useParams();
  return (
    <div className="py-8">
      <h1 className="text-5xl font-semibold text-center mb-8">{projectId}</h1>
      <div className="flex justify-center mb-5 gap-x-10">
        <div>
          <h2 className="text-xl font-medium text-center">Stack</h2>
          <div className="flex gap-x-4 mt-4">
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>Python</p>
            <p>PostgreSQL</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-center">Links</h2>
          <div className="flex gap-x-4 mt-4">
            <p className="cursor-pointer underline underline-offset-4">
              View Live Site
            </p>
            <p className="cursor-pointer underline underline-offset-4">
              Source Code
            </p>
          </div>
        </div>
      </div>
      <figure className="overflow-hidden h-[10%] w-[80%] mx-auto">
        <img src={pic} alt={`${projectId} project`} />
      </figure>

      <h2 className="text-center mt-8 text-5xl font-semibold">
        Web Stack And Explanation
      </h2>
      <p className="mt-8 text-lg leading-loose w-[80%] mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <h2 className="text-center mt-8 text-5xl font-semibold">
        Lessons Learned
      </h2>
      <p className="mt-8 text-lg leading-loose w-[80%] mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <h2 className="text-center mt-8 text-5xl font-semibold">
        View Other Projects
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-10 w-[80%] mx-auto">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard title={project.title} desc={project.desc} />
        ))}
      </div>
      <p className="mt-10 text-center">Made with ❤ by Onumaegbu Chima.</p>
    </div>
  );
};

export default ProjectDetails;
