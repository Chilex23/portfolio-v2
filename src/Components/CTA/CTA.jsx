import React from "react";
import pic from "../../assets/images/DSC_1825.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const CTA = () => (
  <>
    <div className="relative z-10 mt-24 mx-20 text-5xl font-semibold leading-normal flex gap-x-28">
      <div className="w-2/4">
        <h1>Hello <span className="heading">👋</span>,</h1>
        <p>I'm <span className="heading">Onumaegbu Chima</span>, based in <span className="heading">Lagos, Nigeria.</span></p>
        <p>I am a Software Developer.</p>
      </div>
      <figure className="overflow-clip relative -z-10 flex justify-center items-center ml-16">
        <img src={pic} alt="Chima" className="border-stone-800 border-2 object-cover w-52 h-52 rounded-full" />
      </figure>
    </div>

    <div className="mx-20 mt-8 flex gap-x-5">
        <span className="cursor-pointer text-3xl hover:text-sky-800"><AiFillLinkedin /></span>
        <span className="cursor-pointer text-3xl hover:text-gray-400"><AiFillGithub /></span>
    </div>
  </>
);

export default CTA;
