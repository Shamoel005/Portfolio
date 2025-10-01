// import React from "react";

// const experienceData = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "XYZ Pvt Ltd",
//     date: "June 2025 – August 20XX",
//     description: "Developed scalable features in a React/Node.js-based dashboard for enterprise clients. Focused on authentication, protected routes, and API integration.",
//   },
//   {
//     title: "Deloitte Virtual Internship (Forage)",
//     company: "Deloitte",
//     date: "2025",
//     description: "Completed a project simulating a real-time manufacturing dashboard for Daikibo Industrials using modern full-stack tools.",
//   },
//   {
//     title: "B.Tech in Electronics & Communication Engineering",
//     company: "NIT Patna",
//     date: "2023 – 2027",
//     description: "Studying core ECE subjects along with a strong focus on Data Structures, Web Technologies, and AI/ML. Building projects using the MERN stack and Python ML libraries.",
//   },
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className="p-10 bg-gradient-to-r from-blue-100 to-blue-200 ">
//       <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Experience & Education</h2>
//       <ul className="space-y-6 max-w-3xl mx-auto">
//         {experienceData.map((exp, i) => (
//           <li key={i} className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded shadow-sm">
//             <h3 className="text-xl font-semibold text-blue-700">{exp.title}</h3>
//             <p className="text-sm text-gray-500 font-medium">{exp.company} • {exp.date}</p>
//             <p className="mt-1 text-gray-700">{exp.description}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "XYZ Pvt Ltd",
    date: "June 2025 – August 2025",
    description: "Developed scalable features in a React/Node.js-based dashboard for enterprise clients. Focused on authentication, protected routes, and API integration.",
    type: "work",
    skills: ["React", "Node.js", "MongoDB", "JWT", "REST APIs"],
    icon: FaBriefcase,
    color: "blue"
  },
  {
    title: "Deloitte Virtual Internship",
    company: "Deloitte (Forage)",
    date: "2025",
    description: "Completed a project simulating a real-time manufacturing dashboard for Daikibo Industrials using modern full-stack tools and data visualization techniques.",
    type: "internship",
    skills: ["Data Visualization", "Dashboard Design", "Analytics", "UI/UX"],
    icon: FaBriefcase,
    color: "green"
  },
  {
    title: "B.Tech in Electronics & Communication Engineering",
    company: "NIT Patna",
    date: "2023 – 2027",
    description: "Studying core ECE subjects along with a strong focus on Data Structures, Web Technologies, and AI/ML. Building projects using the MERN stack and Python ML libraries.",
    type: "education",
    skills: ["Data Structures", "MERN Stack", "AI/ML", "Python", "Algorithms"],
    icon: FaGraduationCap,
    color: "purple"
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-emerald-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      green: "bg-green-50 border-green-200",
      purple: "bg-purple-50 border-purple-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional and educational path in technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${getColorClasses(exp.color)} border-4 border-white transform -translate-x-1/2 z-10 hidden md:block`}></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-0 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className={`${getBgColorClasses(exp.color)} rounded-2xl p-8 shadow-lg border-l-4 border-${exp.color}-500 hover:shadow-xl transition-all duration-300`}>
                    
                    {/* Header */}
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-xl bg-${exp.color}-100 mr-4`}>
                        <exp.icon className={`w-6 h-6 text-${exp.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="w-4 h-4 mr-2" />
                          <span>{exp.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-${exp.color}-100 text-${exp.color}-700 rounded-full text-sm font-medium border border-${exp.color}-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Type badge */}
                    <div className={`mt-4 inline-block px-3 py-1 bg-${exp.color}-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide`}>
                      {exp.type}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
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
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
