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
            Sofware Developer Intern at XPC Quantum Private Limited.{" "}
          </h2>
          <span>JULY 2021 - JAN 2022</span>
        </div>
        <ul className="mt-5 list-disc leading-loose">
          <li>
            Designed and developed a landing page for a woman's rights NGO that
            was able to increase their awareness among their end users.
          </li>
          <li>
            Implemented a Solana wallet adapter interface a minting site that
            allowed users to see all the crypto holdings and NFTs from all their
            various wallets.
          </li>
          <li>Implemented Restful API server for Car rental Application.</li>
        </ul>
      </div>

      <div className="relative before:content-[''] before:absolute before:-left-[3.4rem] before:-top-2 before:w-10 before:h-10 before:rounded-full before:bg-black before:dark:bg-gray-300 mb-10">
        <div className="md:flex items-center justify-between">
          <h2 className="font-medium text-xl">
            Reservoir Analyst Intern at Danco Petroleum.{" "}
          </h2>
          <span>JAN 2021 - JUN 2021</span>
        </div>

        <ul className="mt-5 list-disc leading-loose">
          <li>
            Modelled and visualized reservoir data using Python and Tableau that
            was able to increase the ease of finding relevant information.
          </li>
          <li>
            Performed quality control for geodetic data for validation of
            coordinates from Drilling Location Requests.
          </li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default Experience;
