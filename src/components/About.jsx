// import React from "react";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="flex flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-gray-50 to-blue-100 min-h-screen"
//     >
//       <h2 className="text-6xl font-bold mb-6 text-center text-gray-800">
//         About Me
//       </h2>
//       <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed text-gray-700">
//         I'm a <strong className="text-blue-600">MERN Stack Developer</strong> with a deep passion for building
//         scalable, responsive, and user-centric web applications. With hands-on experience in <strong>MongoDB, Express.js, React.js, and Node.js</strong>, I craft full-stack solutions that are both efficient and elegant.
//         <br /><br />
//         In addition to web development, I have a growing interest and practical experience in the field of{" "}
//         <strong className="text-purple-600">Artificial Intelligence and Machine Learning</strong>. I have worked on projects involving <strong>data preprocessing, supervised/unsupervised learning, computer vision</strong>, and <strong>natural language processing (NLP)</strong> using tools like <strong>Python, Pandas, NumPy, Scikit-learn, TensorFlow, and OpenCV</strong>.
//         <br /><br />
//         I enjoy creating intelligent systems that can learn, adapt, and enhance user experiences. My AI/ML journey complements my development skills by enabling smarter features such as recommendation systems, sentiment analysis, and image classification.
//         <br /><br />
//         I thrive in collaborative environments, value clean and maintainable code, and continuously explore new technologies. With a strong foundation in full-stack development and a growing expertise in AI/ML, I'm driven to build impactful solutions that bridge technology and innovation.
//       </p>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, SparklesIcon } from "@heroicons/react/24/outline";

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
      category: "Web Development",
      icon: CodeBracketIcon,
      items: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "blue"
    },
    {
      category: "AI/ML",
      icon: CpuChipIcon,
      items: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "NLP"],
      color: "purple"
    },
    {
      category: "Specialties",
      icon: SparklesIcon,
      items: ["Full-Stack Solutions", "Computer Vision", "Data Analysis", "Responsive Design"],
      color: "green"
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium"
            >
              I'm a <span className="text-blue-600 font-bold">MERN Stack Developer</span> with a deep passion for building
              scalable, responsive, and user-centric web applications. With hands-on experience in modern technologies,
              I craft full-stack solutions that are both efficient and elegant.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium"
            >
              My journey extends beyond web development into the fascinating world of{" "}
              <span className="text-purple-600 font-bold">Artificial Intelligence and Machine Learning</span>. 
              I've worked on projects involving data preprocessing, supervised/unsupervised learning, computer vision,
              and natural language processing.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium"
            >
              I thrive in collaborative environments, value clean and maintainable code, and continuously explore new 
              technologies. With a strong foundation in full-stack development and growing expertise in AI/ML, 
              I'm driven to build impactful solutions that bridge technology and innovation.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
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
                      className={`px-3 py-1 bg-${skill.color}-50 text-${skill.color}-700 rounded-full text-sm font-medium border border-${skill.color}-200`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
