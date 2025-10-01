import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
  FaJava,
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
  SiExpress,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, level: 90, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJsSquare, level: 85, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "text-teal-500" },
      { name: "Redux", icon: SiRedux, level: 80, color: "text-purple-500" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, level: 82, color: "text-gray-600" },
      { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, level: 75, color: "text-orange-500" },
    ]
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "Python", icon: FaPython, level: 88, color: "text-yellow-500" },
      { name: "TensorFlow", icon: SiTensorflow, level: 75, color: "text-orange-600" },
      { name: "OpenCV", icon: SiOpencv, level: 70, color: "text-blue-700" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 78, color: "text-orange-400" },
      { name: "Pandas", icon: SiPandas, level: 85, color: "text-black" },
      { name: "NumPy", icon: SiNumpy, level: 83, color: "text-indigo-500" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 87, color: "text-red-500" },
      { name: "Java", icon: FaJava, level: 80, color: "text-red-600" },
      { name: "Next.js", icon: SiNextdotjs, level: 75, color: "text-black" },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend Development");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillsData.map((category, index) => (
            <motion.button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData
            .find(cat => cat.category === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <skill.icon className={`text-3xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-600">Proficiency</span>
                      <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                  />
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">Beginner</span>
                  <span className="text-xs text-gray-500">Intermediate</span>
                  <span className="text-xs text-gray-500">Advanced</span>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Technologies I Use</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
            >
              {skillsData.flatMap(category => category.skills).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex flex-col items-center group"
                >
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <skill.icon className={`text-3xl ${skill.color}`} />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
          >
            See My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
