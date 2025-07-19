import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center space-y-6 p-10 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen" 
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
        Hi, I'm <span className="text-blue-600 text-10xl" >MD SHAMOEL FAROOQUI</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        MERN Stack & AI/ML Developer | Java DSA | Open Source | Problem Solver
      </p>
      <a
  href="/Portfolio/resume.pdf"
  download
  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
>
  Download Resume
</a>
    </section>
  );
}
