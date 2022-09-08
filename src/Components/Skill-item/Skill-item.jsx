import React from "react";

const SkillItem = ({ skill, icon }) => (
  <div className="p-4 mt-2 hover:bg-black hover:text-white rounded-lg cursor-pointer">
    <p className="text-3xl flex justify-center">{icon}</p>
    <span className="font-semibold">{skill}</span>
  </div>
);

export default SkillItem;
