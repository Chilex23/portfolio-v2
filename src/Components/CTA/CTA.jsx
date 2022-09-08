import React from "react";
// import pic from "../../assets/images/headshot.jpg";
import webpPic from "../../assets/images/headshot-1.webp";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const CTA = () => (
  <>
    <div className="relative z-10 mt-24 mx-20 text-5xl font-semibold leading-tight flex gap-x-28">
      <div className="w-[60%]">
        <h1>
          Hello <span className="heading">👋</span>,
        </h1>
        <p>
          I'm <span className="heading">Onumaegbu Chima</span>, based in{" "}
          <span className="heading">Lagos, Nigeria.</span>
        </p>
        <p>I build things for the web.</p>
      </div>
      <figure className="overflow-clip relative -z-10 flex justify-center items-center ml-16 box">
        <img
          src={webpPic}
          alt="Headshot"
          title="headshot"
          className="relative object-cover w-52 h-52 rounded-lg"
        />
      </figure>
    </div>

    <div className="mx-20 mt-8 flex gap-x-5">
      <a
        href="https://linkedin.com/in/chima-onumaegbu"
        target="blank"
        className="cursor-pointer text-3xl hover:text-sky-800"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Chilex23"
        target="blank"
        className="cursor-pointer text-3xl hover:text-gray-400"
      >
        <AiFillGithub />
      </a>
      <a
        href="mailto: onumaegbuchilex@gmail.com"
        target="blank"
        className="cursor-pointer text-3xl hover:text-red-700"
      >
        <SiGmail />
      </a>
    </div>
  </>
);

export default CTA;
