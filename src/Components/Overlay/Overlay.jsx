import React from "react";

const Overlay = () => (
  <div className="overlay h-screen absolute top-0 w-full blur-lg -z-10 clippy dark:bg-stone-900">
    <div className="glass blur-xl w-full h-full -m-[34px] dark:bg-stone-900"></div>
  </div>
);

export default Overlay;
