import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold">Contact Me!</h1>
    <div className="w-2/4 mt-6">
      <h2 className="text-3xl font-medium">Let's Work together.</h2>
      <p className="my-5">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
      <a href="mailto: onumaegbuchilex@gmail.com">onumaegbuchilex@gmail.com</a>
      {/* <form className="mt-6">
        <div className="mb-10 grid grid-cols-form">
          <label className="font-bold mr-8">Name :</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-stone-800 w-full h-10 p-2 rounded-sm"
          />
        </div>
        <div className="grid grid-cols-form">
          <label className="font-bold mr-3">Message :</label>
          <textarea className="border-2 border-stone-800 w-full p-2 rounded-sm h-32"></textarea>
        </div>
        <button className="block py-4 px-20 bg-black text-white mx-auto my-4 text-center rounded-3xl mt-8 hover:scale-105 transition-all">
          Send!
        </button>
      </form> */}
    </div>
    <div className="mt-8 flex gap-x-5">
      <span className="cursor-pointer text-3xl hover:text-sky-800">
       <AiFillLinkedin />
      </span>
      <span className="cursor-pointer text-3xl hover:text-gray-400">
        <AiFillGithub />
      </span>
    </div>
    <p className="mt-10">Made with ❤ by Onumaegbu Chima.</p>
  </section>
);

export default Contact;
