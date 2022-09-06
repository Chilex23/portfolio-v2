import React from "react";

const Contact = () => (
  <section className="mx-20 mt-32">
    <h1 className="text-5xl font-semibold text-center">Contact Me!</h1>
    <div className="w-2/4 mt-6">
      <h2 className="text-3xl font-medium">Let's Work together.</h2>
      <form className="mt-6">
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
          <textarea className="border-2 border-stone-800 w-full p-2 rounded-sm"></textarea>
        </div>
        <button className="block py-4 px-20 bg-black text-white mx-auto my-4 text-center rounded-md mt-8 hover:scale-105 transition-all">
          Send!
        </button>
      </form>
    </div>
    <div className="mt-8 flex gap-x-5">
      <span className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer">
        Github
      </span>
      <span className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer">
        LinkedIn
      </span>
    </div>
    <p className="mt-10">Made with ❤ by Onumaegbu Chima.</p>
  </section>
);

export default Contact;
