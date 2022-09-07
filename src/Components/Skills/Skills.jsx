import React from "react";
import SkillCard from "../Skill-Card/Skill-Card";
import SkillItem from "../Skill-item/Skill-item";
import { RiCss3Fill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const skills = [
  { name: "CSS", icon: <RiCss3Fill /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "BootStrap", icon: <FaBootstrap /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "MaterialUI", icon: <SiMaterialui /> },
  { name: "StyledComponents", icon: <SiStyledcomponents /> },
  { name: "JQuery", icon: <SiJquery /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <SiAmazonaws /> },
];

const Skills = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold text-center">What I do and Skills</h1>
    <p className="my-6 text-lg">
      I've gained a solid understanding of computer science and web development
      concepts by taking online courses like{" "}
      <span className="font-semibold">Udacity's Full Stack Nanodegree</span> and
      by self-studying, and have dedicated a lot of my free time to apply these
      concepts to real-world scenarios and applications.
    </p>
    <div className="mt-8 flex justify-center gap-x-10">
      <SkillCard
        title="Frontend Development and Responsve Design"
        icon={<FaLaptopCode />}
      />
      <SkillCard
        title="Backend Development and API Development"
        icon={<FaServer />}
      />
    </div>
    <div className="flex mt-8 justify-around flex-wrap">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill.name} icon={skill.icon} />
      ))}
    </div>
  </section>
);

export default Skills;
