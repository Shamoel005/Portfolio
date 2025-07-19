import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";

const skills = [
  // 🔵 Web Development
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },

  // 🧠 AI/ML Tools
  { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-indigo-500 text-4xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-black text-4xl" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400 text-4xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600 text-4xl" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-blue-700 text-4xl" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center text-center space-y-6 p-10 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800 uppercase tracking-wider">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <span className="mt-3 text-lg font-semibold text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
