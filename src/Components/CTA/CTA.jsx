import React from "react";
import pic from "../../assets/images/DSC_1825.jpg";

const CTA = () => (
  <>
    <div className="relative z-20 mt-24 mx-20 text-5xl font-semibold leading-normal flex justify-between gap-x-10">
      <div className="w-2/4">
        <h1>Hello 👋</h1>
        <p>I'm Onumaegbu Chima but you can call me Chilex.</p>
        <p>I am a Software Developer.</p>
      </div>
      <figure className="w-1/3 rounded-xl overflow-clip">
        <img src={pic} alt="Chima" className="object-cover" />
      </figure>
    </div>

    <div className="mx-20 mt-8 flex gap-x-5">
        <span className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer">Github</span>
        <span className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer">LinkedIn</span>
    </div>
  </>
);

export default CTA;
