import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { data } from "../utils/data";
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_au3ekr5",         // your service ID
        "template_v4uooer",        // your template ID
        form.current,
        "c1erAVdOOq2tZBi3R"        // your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-purple-400 mb-3">
        Contact <span className="text-white">Me</span>
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Feel free to connect with me!
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdEmail size={30} className="text-purple-400" />
            <span>{data.gmail}</span>
          </div>
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdPhone size={30} className="text-purple-400" />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-4 bg-[#121235] p-4 rounded-xl shadow-md text-gray-300">
            <MdLanguage size={30} className="text-purple-400" />
            <span>{data.website}</span>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full md:w-1/2">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="bg-[#121235] p-4 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
