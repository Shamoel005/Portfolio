import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, SparklesIcon, AcademicCapIcon, TrophyIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { FaJava, FaReact, FaNodeJs, FaPython, FaAward } from "react-icons/fa";
import { SiLeetcode, SiOracle, SiLangchain } from "react-icons/si";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skills = [
    {
      category: "Full-Stack Development",
      icon: CodeBracketIcon,
      items: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
      color: "blue"
    },
    {
      category: "AI/ML & Cloud",
      icon: CpuChipIcon,
      items: ["RAG Architecture", "LangChain", "Vector Databases", "Oracle Cloud (OCI)", "OpenAI API"],
      color: "purple"
    },
    {
      category: "Programming & DSA",
      icon: SparklesIcon,
      items: ["Java (Expert)", "Python", "JavaScript", "1550+ LeetCode", "500+ Problems Solved"],
      color: "green"
    }
  ];

  const achievements = [
    {
      icon: SiLeetcode,
      title: "1600+ LeetCode Rating",
      description: "500+ DSA problems solved in Java",
      color: "orange"
    },
    {
      icon: SiOracle,
      title: "OCI Certified",
      description: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      color: "red"
    },
    {
      icon: FaAward,
      title: "Deloitte Intern",
      description: "Software Development Virtual Experience",
      color: "blue"
    }
  ];

  const highlights = [
    {
      icon: RocketLaunchIcon,
      stat: "5+",
      label: "Production Projects",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrophyIcon,
      stat: "5+",
      label: "Certifications",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: AcademicCapIcon,
      stat: "NIT",
      label: "Patna Student",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Software Engineering Student | Full-Stack Developer | AI/ML Enthusiast
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></div>
                Professional Summary
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                I'm a <span className="text-blue-600 font-bold">Software Engineering student at NIT Patna</span> with 
                a deep foundation in <span className="font-semibold">Java, Data Structures, and Algorithms</span> (1600+ LeetCode rating). 
                Experienced in building scalable web architectures using the <span className="font-semibold">MERN stack</span> and 
                integrating <span className="text-purple-600 font-bold">AI/ML components</span>.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                My expertise spans full-stack development with production-ready applications featuring 
                <span className="font-semibold"> real-time features</span> (Socket.io), 
                <span className="font-semibold"> secure authentication</span> (JWT, OAuth), and 
                <span className="font-semibold"> AI integration</span> (RAG, LangChain, OpenAI API).
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                I'm driven by a passion for rigorous code quality, systems thinking, and building high-impact solutions 
                that solve real-world problems. Currently seeking opportunities to contribute to innovative projects 
                and continue growing as a software engineer.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-lg bg-${achievement.color}-100 flex-shrink-0`}>
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-${skill.color}-100 mr-4`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
                  </div>
                  <h3 className={`text-xl font-bold text-${skill.color}-700`}>
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 bg-${skill.color}-50 text-${skill.color}-700 rounded-lg text-sm font-medium border border-${skill.color}-200 hover:shadow-md transition-shadow`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Highlights Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${highlight.color} rounded-xl p-4 shadow-lg text-white text-center`}
                >
                  <highlight.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{highlight.stat}</div>
                  <div className="text-xs opacity-90">{highlight.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* What I'm Looking For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl text-white mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What I'm Looking For</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
              I'm seeking <span className="font-bold">Software Engineering Internship opportunities</span> where I can 
              contribute to building scalable systems, work with cutting-edge technologies, and collaborate with talented 
              teams. Particularly interested in roles involving full-stack development, distributed systems, or AI/ML integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                Full-Stack Development
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                Systems Design
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                AI/ML Integration
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                Real-time Systems
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to discuss how I can contribute to your team?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block border-2 border-gray-200"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


