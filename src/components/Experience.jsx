import React from "react";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "XYZ Pvt Ltd",
    date: "June 2024 – August 2024",
    description: "Developed scalable features in a React/Node.js-based dashboard for enterprise clients. Focused on authentication, protected routes, and API integration.",
  },
  {
    title: "Deloitte Virtual Internship (Forage)",
    company: "Deloitte",
    date: "2024",
    description: "Completed a project simulating a real-time manufacturing dashboard for Daikibo Industrials using modern full-stack tools.",
  },
  {
    title: "B.Tech in Electronics & Communication Engineering",
    company: "NIT Patna",
    date: "2021 – 2025",
    description: "Studying core ECE subjects along with a strong focus on Data Structures, Web Technologies, and AI/ML. Building projects using the MERN stack and Python ML libraries.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="p-10 bg-gradient-to-r from-blue-100 to-blue-200 ">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Experience & Education</h2>
      <ul className="space-y-6 max-w-3xl mx-auto">
        {experienceData.map((exp, i) => (
          <li key={i} className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700">{exp.title}</h3>
            <p className="text-sm text-gray-500 font-medium">{exp.company} • {exp.date}</p>
            <p className="mt-1 text-gray-700">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
