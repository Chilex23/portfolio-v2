import React from "react";
import SkillCard from "../Skill-Card/Skill-Card";
import SkillItem from "../Skill-item/Skill-item";

const skills = [
  "CSS",
  "JavaScript",
  "React",
  "NodeJS",
  "Python",
  "BootStrap",
  "Python",
  "TailwindCSS",
  "JQuery",
  "Docker",
  "Kubernetes",
  "AWS",
  "MaterialUI",
  "StyledComponents",
];

const Skills = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold text-center">What I do and Skills</h1>
    <div className="mt-8 flex justify-center gap-x-10">
      <SkillCard title="Frontend Development" />
      <SkillCard title="Backend Development and API Development" />
    </div>
    <div className="flex mt-8 justify-around flex-wrap">
      {
        skills.map(skill => <SkillItem skill={skill}/>)
      }
    </div>
  </section>
);

export default Skills;
