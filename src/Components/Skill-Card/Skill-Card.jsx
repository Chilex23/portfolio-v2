import React from "react";

const SkillCard = ({ title }) => (
  <div className="w-[20%] p-4 border-stone-800 rounded-md border-2">
    <div>Logo</div>
    <h2 className="mt-2">{title}</h2>
  </div>
);


export default SkillCard;