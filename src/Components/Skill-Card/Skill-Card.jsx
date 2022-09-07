import React from "react";

const SkillCard = ({ title, icon }) => (
  <div className="w-[20%] p-4 border-stone-800 rounded-md border-2">
    <div className="flex justify-center">
      <span className="text-4xl">{icon}</span>
    </div>
    <h2 className="mt-2 text-center font-semibold">{title}</h2>
  </div>
);

export default SkillCard;
