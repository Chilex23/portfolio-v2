import React from "react";

const Contact = () => (
    <section className="mx-20 mt-32">
        <h1 className="text-5xl font-semibold text-center">Contact Me!</h1>
        <div className="w-2/4 mt-6">
            <h2 className="text-3xl font-medium">Let's Work together</h2>
            <form>
                <label className="font-bold mr-8">Name :</label>
                <input type="text" placeholder="Enter your name" className="border-2 border-stone-800 w-[80%]" />
            </form>
        </div>
    </section>
);

export default Contact;