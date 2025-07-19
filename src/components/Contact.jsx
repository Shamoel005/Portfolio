import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 text-center min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800 uppercase tracking-wider">
        Contact Me
      </h2>

      <form
        action="https://formspree.io/f/movlvokw"
        method="POST"
        className="w-full max-w-xl space-y-4 text-left bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-md h-32 resize-none text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 flex gap-8 text-2xl text-blue-700">
        <a
          href="https://github.com/Shamoel005"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-shamoel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="mailto:farooquishamoel@gmail.com"
          className="hover:text-black transition"
        >
          <FaEnvelope title="Email" />
        </a>
      </div>
    </section>
  );
}
