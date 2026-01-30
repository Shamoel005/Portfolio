import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCode } from "react-icons/fa";
import { SiPython, SiMongodb, SiReact } from "react-icons/si";

const experienceData = [
  {
    title: "Virtual Intern – Software Development",
    company: "Deloitte (Remote)",
    location: "Remote",
    date: "April 2025 – June 2025",
    description: "Engineered production-quality Python scripts to reconcile telemetry data for 50+ industrial IoT devices. Developed a robust testing suite using the unittest framework, ensuring high code coverage and minimal defects in data processing pipelines. Actively participated in virtual design discussions and code reviews to improve system reliability and maintainability.",
    type: "internship",
    skills: ["Python", "JSON", "Unit Testing", "Git", "IoT Data Processing", "Code Reviews"],
    achievements: [
      "Reconciled data from 50+ IoT devices",
      "Executed 25+ automated test cases",
      "Reduced debugging time significantly",
      "Collaborated in virtual team of 5"
    ],
    icon: FaBriefcase,
    color: "blue"
  },
  {
    title: "B.Tech in Electronics and Communication",
    company: "National Institute of Technology (NIT) Patna",
    location: "Patna, Bihar",
    date: "2023 – 2027 (Expected)",
    description: "Pursuing Bachelor of Technology in Electronics and Communication Engineering with a strong focus on software development, data structures, algorithms, and full-stack web development. Actively building projects using MERN stack, AI/ML technologies, and contributing to open-source communities.",
    type: "education",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Web Development", "MERN Stack"],
    achievements: [
      "1550+ LeetCode Rating",
      "300+ DSA Problems Solved",
      "Multiple Full-Stack Projects",
      "Oracle Cloud Infrastructure Certified"
    ],
    icon: FaGraduationCap,
    color: "purple"
  },
];

const certificationsData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Validated expertise in building intelligent systems and handling large-scale datasets with high-fidelity outputs.",
    icon: FaAward,
    color: "orange"
  },
  {
    title: "Google Cloud Skills Boost",
    issuer: "Google Cloud",
    date: "2025",
    description: "Completed Introduction to Generative AI Studio, gaining practical exposure to AI/ML concepts and model lifecycle management.",
    icon: FaAward,
    color: "green"
  },
  {
    title: "LeetCode Competitive Programming",
    issuer: "LeetCode",
    date: "2025",
    description: "Achieved 1550+ rating with 300+ problems solved in Java, demonstrating ability to optimize complex algorithms for performance and scale.",
    icon: FaCode,
    color: "yellow"
  }
];

export default function Experience() {
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
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      yellow: "from-yellow-500 to-yellow-600"
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      green: "bg-green-50 border-green-200",
      purple: "bg-purple-50 border-purple-200",
      orange: "bg-orange-50 border-orange-200",
      yellow: "bg-yellow-50 border-yellow-200"
    };
    return colors[color] || colors.blue;
  };

  const getIconBgColor = (color) => {
    const colors = {
      blue: "bg-blue-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      orange: "bg-orange-100",
      yellow: "bg-yellow-100"
    };
    return colors[color] || colors.blue;
  };

  const getIconTextColor = (color) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      yellow: "text-yellow-600"
    };
    return colors[color] || colors.blue;
  };

  const getSkillBgColor = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200"
    };
    return colors[color] || colors.blue;
  };

  const getBadgeColor = (color) => {
    const colors = {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white",
      yellow: "bg-yellow-500 text-white"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-20"
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
                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${getColorClasses(exp.color)} border-4 border-white transform -translate-x-1/2 z-10 shadow-lg hidden md:block`}></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-0 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className={`${getBgColorClasses(exp.color)} rounded-2xl p-8 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300`}>
                    
                    {/* Header */}
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-xl ${getIconBgColor(exp.color)} mr-4`}>
                        <exp.icon className={`w-6 h-6 ${getIconTextColor(exp.color)}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-gray-700 mb-2 font-semibold">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaCalendarAlt className="w-4 h-4 mr-2" />
                          <span>{exp.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className={`mb-4 inline-block px-3 py-1 ${getBadgeColor(exp.color)} rounded-full text-xs font-semibold uppercase tracking-wide`}>
                      {exp.type}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Achievements:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className={`w-2 h-2 rounded-full ${getBadgeColor(exp.color)} mt-1.5 flex-shrink-0`}></div>
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 ${getSkillBgColor(exp.color)} rounded-full text-sm font-medium border`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Awards & Certifications
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${getBgColorClasses(cert.color)} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4`}
              >
                <div className={`p-4 ${getIconBgColor(cert.color)} rounded-xl inline-block mb-4`}>
                  <cert.icon className={`w-8 h-8 ${getIconTextColor(cert.color)}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="font-semibold">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl text-center">
              <div className="text-4xl font-bold mb-2">1550+</div>
              <div className="text-blue-100">LeetCode Rating</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-purple-100">DSA Problems</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl text-center">
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-green-100">Major Projects</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl text-center">
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-orange-100">Certifications</div>
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
            Interested in working together or learning more about my experience?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block border-2 border-gray-200 hover:border-blue-300"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const experienceData = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "XYZ Pvt Ltd",
//     date: "June 2025 – August 2025",
//     description: "Developed scalable features in a React/Node.js-based dashboard for enterprise clients. Focused on authentication, protected routes, and API integration.",
//     type: "work",
//     skills: ["React", "Node.js", "MongoDB", "JWT", "REST APIs"],
//     icon: FaBriefcase,
//     color: "blue"
//   },
//   {
//     title: "Deloitte Virtual Internship",
//     company: "Deloitte (Forage)",
//     date: "2025",
//     description: "Completed a project simulating a real-time manufacturing dashboard for Daikibo Industrials using modern full-stack tools and data visualization techniques.",
//     type: "internship",
//     skills: ["Data Visualization", "Dashboard Design", "Analytics", "UI/UX"],
//     icon: FaBriefcase,
//     color: "green"
//   },
//   {
//     title: "B.Tech in Electronics & Communication Engineering",
//     company: "NIT Patna",
//     date: "2023 – 2027",
//     description: "Studying core ECE subjects along with a strong focus on Data Structures, Web Technologies, and AI/ML. Building projects using the MERN stack and Python ML libraries.",
//     type: "education",
//     skills: ["Data Structures", "MERN Stack", "AI/ML", "Python", "Algorithms"],
//     icon: FaGraduationCap,
//     color: "purple"
//   },
// ];

// export default function Experience() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: "from-blue-500 to-blue-600",
//       green: "from-green-500 to-emerald-600",
//       purple: "from-purple-500 to-purple-600"
//     };
//     return colors[color] || colors.blue;
//   };

//   const getBgColorClasses = (color) => {
//     const colors = {
//       blue: "bg-blue-50 border-blue-200",
//       green: "bg-green-50 border-green-200",
//       purple: "bg-purple-50 border-purple-200"
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
//       <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//             Journey
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             My professional and educational path in technology
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="relative"
//         >
//           {/* Timeline line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 hidden md:block"></div>

//           <div className="space-y-12">
//             {experienceData.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className={`relative flex items-center ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Timeline dot */}
//                 <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${getColorClasses(exp.color)} border-4 border-white transform -translate-x-1/2 z-10 hidden md:block`}></div>

//                 {/* Content card */}
//                 <motion.div
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   className={`ml-0 md:ml-0 md:w-5/12 ${
//                     index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
//                   }`}
//                 >
//                   <div className={`${getBgColorClasses(exp.color)} rounded-2xl p-8 shadow-lg border-l-4 border-${exp.color}-500 hover:shadow-xl transition-all duration-300`}>
                    
//                     {/* Header */}
//                     <div className="flex items-start mb-4">
//                       <div className={`p-3 rounded-xl bg-${exp.color}-100 mr-4`}>
//                         <exp.icon className={`w-6 h-6 text-${exp.color}-600`} />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
//                         <div className="flex items-center text-gray-600 mb-3">
//                           <FaMapMarkerAlt className="w-4 h-4 mr-2" />
//                           <span className="font-semibold">{exp.company}</span>
//                         </div>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <FaCalendarAlt className="w-4 h-4 mr-2" />
//                           <span>{exp.date}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-700 leading-relaxed mb-6 text-lg">
//                       {exp.description}
//                     </p>

//                     {/* Skills */}
//                     <div className="flex flex-wrap gap-2">
//                       {exp.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           className={`px-3 py-1 bg-${exp.color}-100 text-${exp.color}-700 rounded-full text-sm font-medium border border-${exp.color}-200`}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Type badge */}
//                     <div className={`mt-4 inline-block px-3 py-1 bg-${exp.color}-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide`}>
//                       {exp.type}
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
//           >
//             Let's Work Together
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
