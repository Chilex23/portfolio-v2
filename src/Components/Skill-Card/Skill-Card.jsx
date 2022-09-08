import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ title, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 * delay, duration: 1 }}
    className="w-[20%] p-4 border-stone-800 rounded-md border-2 group hover:bg-black hover:text-white cursor-pointer transition-all"
  >
    <div className="flex justify-center">
      <span className="text-4xl">{icon}</span>
    </div>
    <h2 className="mt-2 text-center font-semibold">{title}</h2>
  </motion.div>
);

export default SkillCard;
