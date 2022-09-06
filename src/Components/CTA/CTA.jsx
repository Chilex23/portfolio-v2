import React from "react";
import pic from "../../assets/images/DSC_1825.jpg";

const CTA = () => (
  <div className="relative z-20 mt-24 mx-10 text-5xl font-semibold leading-normal flex justify-between">
    <div>
      <h1>Hello 👋</h1>
      <p>I'm Onumaegbu Chima but you can call me Chilex.</p>
      <p>Software Developer.</p>
    </div>
    <figure className="w-full h-full">
      <img src={pic} alt="Chima" className="h-fit" />
    </figure>
  </div>
);

export default CTA;
