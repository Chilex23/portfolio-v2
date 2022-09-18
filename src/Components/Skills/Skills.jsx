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
// import { SiKubernetes } from "react-icons/si";
// import { SiAmazonaws } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

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
];

const Skills = () => (
  <section className="mx-5 sm:mx-20 mt-32">
    <motion.h1
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [.31,.1,.66,.66] }}
      className="text-5xl font-semibold transition-all"
    >
      What I do and Skills
    </motion.h1>
    <motion.p
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [.31,.1,.66,.66] }}
      className="my-6 text-lg w-full md:max-w-[70%] leading-loose transition-all"
    >
      I've gained a solid understanding of computer science and web development
      concepts by taking online courses like{" "}
      <span className="font-semibold">Udacity's Full Stack Nanodegree</span>, attending an on-site bootcamp at <span className="font-semibold">Moat Academy for Software Developers</span> and
      by self-studying, and I have dedicated a lot of my free time to apply
      these concepts to real-world scenarios and applications.
    </motion.p>

    <div className="mt-8 flex gap-x-10">
      <SkillCard
        title="Frontend Development and Responsive Design"
        icon={<FaLaptopCode />}
        delay={1}
      />
      <SkillCard
        title="Backend Development and API Development"
        icon={<FaServer />}
        delay={1}
      />
    </div>

    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, ease: [.31,.1,.66,.66] }}
      className="flex mt-8 flex-wrap w-full md:max-w-[70%] gap-5 transition-all"
    >
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          skill={skill.name}
          icon={skill.icon}
        />
      ))}
    </motion.div>
  </section>
);

export default Skills;
