import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <section className="mx-5 sm:mx-20 mt-32">
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="text-5xl font-semibold relative"
    >
      Education
    </motion.h1>
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="mt-10 border-l-2 border-black dark:border-gray-300 px-8 w-full md:max-w-[80%]"
    >
      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">
            FULL STACK DEVELOPER NANODEGREE, UDACITY.{" "}
          </h2>
          <span>MAY 2022 - AUGUST 2022</span>
        </div>
        <ul className="mt-5 list-disc leading-loose">
          <li>Learnt how to build Data Driven Full Stack Applications.</li>
          <li>
            Learnt about Authorization and Authentication by using RBAC and JWT
            using Oauth.
          </li>
          <li>Learnt how to build, test and document RESTful APIs.</li>
          <li>
            Containerization using Docker, Orchestration using Kubernetes and
            EKS on AWS, CI/CD using CodePipeline and CodeBuild and Deployment on
            AWS.{" "}
          </li>
        </ul>
      </div>

      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">
            MOAT ACADEMY FOR SOFTWARE DEVELOPERS.{" "}
          </h2>
          <span>JAN 2022 - MAY 2022</span>
        </div>

        <ul className="mt-5 list-disc leading-loose">
          <li>Frontend Development using Javascript, ReactJS.</li>
          <li>Backend Development using Python.</li>
          <li>Database Administration.</li>
        </ul>
      </div>

      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">
            FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI, IMO STATE, NIGERIA.{" "}
          </h2>
          <span>JAN 2018 - FEB 2022</span>
        </div>

        <ul className="mt-5 list-disc">
          <li>Bachelor's Degree in Geology(Geophysics).</li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default Education;
