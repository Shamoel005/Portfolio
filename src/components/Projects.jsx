import React from "react";

const projectData = [
  {
    title: "E-Commerce Web App",
    description: "A full-featured MERN stack e-commerce site with authentication, cart, payments, and admin dashboard.",
    github: "https://github.com/Shamoel005/Glamzy",
    live: "https://glamzy-frontend.onrender.com/",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    title: "Employee Management System",
    description: "Web-based system for managing employees, roles, and leaves with secure login.",
    github: "https://github.com/yourusername/ems",
    live: "#",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gradient-to-r from-gray-50 to-blue-100 ">
      <h2 className="text-5xl font-bold mb-10 text-center text-black">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 bg-white space-y-4"
          >
            <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
            <p className="text-base text-black">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6 text-blue-600 text-sm mt-2 font-semibold">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
