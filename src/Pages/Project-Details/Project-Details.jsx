import React from "react";
import pic from "../../assets/images/techstack.png";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  return (
    <div className="py-8">
      <h1 className="text-5xl font-semibold text-center mb-8">{projectId}</h1>
      <figure className="overflow-hidden h-[10%] w-[80%] mx-auto">
        <img src={pic} alt={`${projectId} project`} />
      </figure>
      <h2 className="text-center mt-8 text-5xl font-semibold">Links</h2>
      <div className="flex justify-center gap-5">
        <button className="block py-2 px-4 bg-black text-white my-4 text-center rounded-md hover:scale-105 transition-all">
          Live Site
        </button>
        <button className="block py-2 px-4 bg-black text-white my-4 text-center rounded-md hover:scale-105 transition-all">
          Github
        </button>
      </div>

      <h2 className="text-center mt-8 text-5xl font-semibold">Details</h2>
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
    </div>
  );
};

export default ProjectDetails;
