import React from 'react';
import { data } from "../utils/data";
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className=" py-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-purple-400 mb-3">Contact 
        <span className="text-white"> Me </span>
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Feel free to connect with me!
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
        
        {/* Left Info Side */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdEmail size={30} className="text-purple-400" />
            <span> {data.gmail} </span>
          </div>
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdPhone size={30} className="text-purple-400" />
            <span> {data.phone} </span>
          </div>
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdLanguage size={30} className="text-purple-400" />
            <span> {data.website} </span>
          </div>
        </div>

        {/* Right Form Side */}
        <form className="flex flex-col gap-6 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className=" bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
