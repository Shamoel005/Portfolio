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
  FaDatabase,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiExpress,
  SiFirebase,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiGo,
  SiOracle,
  SiLangchain,
  SiOpenai,
  SiCloudinary,
  SiRender,
  SiGooglemaps,
  SiStripe,
  SiRazorpay,
  SiJest,
  SiFastapi,
  SiGithub,
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: FaJava, level: 95, color: "text-red-600", description: "Expert in DSA/OOP" },
      { name: "JavaScript", icon: FaJsSquare, level: 92, color: "text-yellow-400", description: "ES6+" },
      { name: "Python", icon: FaPython, level: 88, color: "text-yellow-500", description: "AI/ML & Backend" },
      { name: "SQL", icon: FaDatabase, level: 80, color: "text-blue-600", description: "Database Queries" },
      { name: "Go", icon: SiGo, level: 60, color: "text-cyan-500", description: "Learning" },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: FaReact, level: 93, color: "text-blue-500", description: "Component-based UI" },
      { name: "Redux Toolkit", icon: SiRedux, level: 85, color: "text-purple-500", description: "State Management" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-teal-500", description: "Utility-first CSS" },
      { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500", description: "Semantic Markup" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-600", description: "Responsive Design" },
    ]
  },
  {
    category: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 90, color: "text-green-600", description: "Server-side JS" },
      { name: "Express.js", icon: SiExpress, level: 88, color: "text-gray-700", description: "RESTful APIs" },
      { name: "MongoDB", icon: SiMongodb, level: 87, color: "text-green-500", description: "NoSQL Database" },
      { name: "Mongoose", icon: SiMongodb, level: 85, color: "text-red-800", description: "ODM for MongoDB" },
      { name: "Firebase", icon: SiFirebase, level: 80, color: "text-orange-500", description: "Auth & Hosting" },
      { name: "JWT", icon: SiJsonwebtokens, level: 88, color: "text-pink-600", description: "Authentication" },
      { name: "Socket.io", icon: SiSocketdotio, level: 85, color: "text-black", description: "Real-time Apps" },
    ]
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "LangChain", icon: SiLangchain, level: 82, color: "text-green-700", description: "LLM Framework" },
      { name: "OpenAI API", icon: SiOpenai, level: 85, color: "text-emerald-600", description: "GPT Integration" },
      { name: "RAG Architecture", icon: FaDatabase, level: 80, color: "text-purple-600", description: "Vector DBs" },
      { name: "NumPy", icon: SiNumpy, level: 83, color: "text-indigo-500", description: "Numerical Computing" },
      { name: "Pandas", icon: SiPandas, level: 85, color: "text-blue-700", description: "Data Analysis" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 75, color: "text-orange-400", description: "ML Library" },
      { name: "FastAPI", icon: SiFastapi, level: 78, color: "text-teal-600", description: "Python APIs" },
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Oracle Cloud (OCI)", icon: SiOracle, level: 82, color: "text-red-500", description: "Cloud Infrastructure" },
      { name: "Render", icon: SiRender, level: 85, color: "text-purple-500", description: "Deployment Platform" },
      { name: "Git/GitHub", icon: FaGitAlt, level: 90, color: "text-orange-600", description: "Version Control" },
      { name: "Cloudinary", icon: SiCloudinary, level: 80, color: "text-blue-500", description: "Media Management" },
    ]
  },
  {
    category: "Specialized Tools & APIs",
    skills: [
      { name: "Google Maps API", icon: SiGooglemaps, level: 80, color: "text-green-600", description: "Geolocation" },
      { name: "Stripe/Razorpay", icon: SiStripe, level: 78, color: "text-indigo-600", description: "Payment Gateways" },
      { name: "Web Speech API", icon: TbApi, level: 75, color: "text-pink-500", description: "Voice Assistant" },
      { name: "REST APIs", icon: TbApi, level: 90, color: "text-blue-600", description: "API Development" },
      { name: "Nodemailer", icon: FaNodeJs, level: 80, color: "text-blue-500", description: "Email OTP" },
    ]
  },
  {
    category: "Testing & Best Practices",
    skills: [
      { name: "Unit Testing", icon: SiJest, level: 80, color: "text-red-500", description: "unittest framework" },
      { name: "Code Reviews", icon: SiGithub, level: 85, color: "text-gray-800", description: "Quality Assurance" },
      { name: "Systems Design", icon: FaDatabase, level: 82, color: "text-purple-600", description: "Architecture" },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages");

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
        delay: 0.3
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Comprehensive technical stack spanning full-stack development, AI/ML integration, and cloud infrastructure
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">1600+ LeetCode Rating</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">500+ DSA Problems</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">OCI Certified</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillsData.map((category, index) => (
            <motion.button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
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
                  <div className="p-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                    <skill.icon className={`text-4xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
                  </div>
                </div>

                {/* Proficiency Level */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                  <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    className={`h-2.5 rounded-full ${
                      skill.level >= 90 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                        : skill.level >= 80 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                        : skill.level >= 70
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                        : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}
                  />
                </div>

                {/* Skill Level Badge */}
                <div className="flex justify-end">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    skill.level >= 90 
                      ? 'bg-green-100 text-green-700' 
                      : skill.level >= 80 
                      ? 'bg-blue-100 text-blue-700'
                      : skill.level >= 70
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Learning'}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Technical Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Complete Tech Stack</h3>
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
                  key={`${skill.name}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="flex flex-col items-center group cursor-pointer"
                  title={skill.description}
                >
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-transparent group-hover:border-blue-200">
                    <skill.icon className={`text-3xl ${skill.color}`} />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-2">Full-Stack</h4>
              <p className="text-blue-100">MERN stack expertise with production-ready applications</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-2">AI/ML</h4>
              <p className="text-purple-100">RAG architecture, LangChain, and intelligent systems</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-2">Real-time</h4>
              <p className="text-green-100">Socket.io, live tracking, and instant messaging</p>
            </div>
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
          <p className="text-gray-600 mb-6 text-lg">
            Ready to see these skills in action?
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

