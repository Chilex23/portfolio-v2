import React from "react";

const SkillItem = ({ skill, icon }) => (
  <div className="p-4 mt-2">
    <p className="text-3xl flex justify-center">{icon}</p>
    <span className="font-semibold">{skill}</span> 
  </div>
);

export default SkillItem;