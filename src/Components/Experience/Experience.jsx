import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <section className="mx-5 sm:mx-20 mt-32">
    <motion.h1
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="text-5xl font-semibold relative"
    >
      Experience
    </motion.h1>
    <motion.p
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="mt-10"
    >
      These are some of the companies and places that I have been able to gain
      valuable experience that have shaped me.
    </motion.p>
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.31, 0.1, 0.66, 0.66] }}
      className="mt-10 border-l-2 border-black dark:border-gray-300 px-8 w-full md:max-w-[80%]"
    >
      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">
            Operations Intern at Transport Services Limited.{" "}
          </h2>
          <span>NOV 2024 - NOV 2025</span>
        </div>
        <ul className="mt-5 list-disc leading-loose">
          <li>
            Sanitized and reconciled telematics data from MiX Telematics with
            operational records.
          </li>
          <li>Developed a tracking program to monitor field assets.</li>
        </ul>
      </div>

      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">Freelancing (Several Roles). </h2>
          <span>JAN 2024 - OCT 2024</span>
        </div>

        <ul className="mt-5 list-disc leading-loose">
          <li>
            During this period of time, I worked on Getrolla
            <a
              href={`https://getrolla.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:border-black hover:dark:border-gray-300 inline-block mx-2"
            >
              (https://getrolla.com/)
            </a>
            for an independent agency from Canada, delivering a payment platform
            that allows remote workers access opportunities from different firms
            and access relocation opportunities from different agencies and
            access to USD accounts, Built UI components using ReactJS and
            Tailwind CSS.
          </li>
          <li>
            Worked and collaborated on full-stack web projects with final-year
            computer-science students in different Nigerian universities. The
            projects can be found here{" "}
            <a
              href={`https://gitlab.com/onumaegbuchilex`}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:border-black hover:dark:border-gray-300 inline-block mx-2"
            >
              https://gitlab.com/onumaegbuchilex
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default Experience;
