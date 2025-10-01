// import React from "react";

// const projectData = [
//   {
//     title: "E-Commerce Web App",
//     description:
//       "Full-featured MERN e-commerce fashion site with responsive UI, AI voice assistant, authentication, cart, payments, and admin dashboard.",
//     github: "https://github.com/Shamoel005/Glamzy",
//     live: "https://glamzy-frontend.onrender.com/",
//     tech: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Express",
//       "JWT",
//       "Tailwind CSS",
//       "Firebase OAuth",
//       "Web Speech API",
//       "OpenAI API",
//     ],
//   },
//   {
//     title: "Vibely – Real-time Chat App",
//     description:
//       "Real-time 1:1 chat application with live typing indicators, online status, secure JWT authentication, Cloudinary image uploads, and responsive UI/UX.",
//     github: "https://github.com/Shamoel005/Vibely-live-chat",
//     live: "https://vibely-frontend-rdhy.onrender.com/login",
//     tech: [
//       "React",
//       "Redux Toolkit",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Mongoose",
//       "Socket.io",
//       "Tailwind CSS",
//       "Cloudinary",
//     ],
//   },
// ]; // <-- make sure to close the array here

// export default function Projects() {
//   return (
//     <section id="projects" className="p-10 bg-gradient-to-r from-gray-50 to-blue-100">
//       <h2 className="text-5xl font-bold mb-10 text-center text-black">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         {projectData.map((project, idx) => (
//           <div
//             key={idx}
//             className="border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 bg-white space-y-4"
//           >
//             <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
//             <p className="text-base text-black">{project.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-6 text-blue-600 text-sm mt-2 font-semibold">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 GitHub
//               </a>
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaTimes } from "react-icons/fa";

const projectData = [
  {
    title: "E-Commerce Web App",
    description: "Full-featured MERN e-commerce fashion site with responsive UI, AI voice assistant, authentication, cart, payments, and admin dashboard.",
    fullDescription: "A comprehensive e-commerce platform built with the MERN stack featuring AI-powered voice shopping assistant, secure payment integration, user authentication, shopping cart functionality, and a complete admin dashboard for inventory management. Includes advanced features like product recommendations, order tracking, and real-time inventory updates.",
    github: "https://github.com/Shamoel005/Glamzy",
    live: "https://glamzy-frontend.onrender.com/",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS", "Firebase OAuth", "Web Speech API", "OpenAI API"],
    image: "/api/placeholder/600/400", // Replace with actual image path
    features: ["AI Voice Assistant", "Secure Payments", "Admin Dashboard", "Real-time Inventory", "Product Recommendations"],
    category: "Full Stack"
  },
  {
    title: "Vibely – Real-time Chat App",
    description: "Real-time 1:1 chat application with live typing indicators, online status, secure JWT authentication, Cloudinary image uploads, and responsive UI/UX.",
    fullDescription: "A modern real-time messaging application enabling seamless 1:1 conversations with live typing indicators, user online status, secure authentication, and media sharing capabilities. Built with Socket.io for real-time communication and Cloudinary for efficient image uploads and management.",
    github: "https://github.com/Shamoel005/Vibely-live-chat",
    live: "https://vibely-frontend-rdhy.onrender.com/login",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.io", "Tailwind CSS", "Cloudinary"],
    image: "/api/placeholder/600/400", // Replace with actual image path
    features: ["Real-time Messaging", "Typing Indicators", "Image Sharing", "Online Status", "Secure Auth"],
    category: "Real-time"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Real-time", "AI/ML", "Frontend"];

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
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
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of my recent works that showcase my skills in full-stack development and modern technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openModal(project)}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      title="View Details"
                    >
                      <FaEye className="text-lg" />
                    </motion.button>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-green-600 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 flex-1 justify-center"
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
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
            href="https://github.com/Shamoel005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
          >
            <FaGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <FaTimes className="text-xl text-gray-600" />
                  </motion.button>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-medium border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 flex-1 justify-center"
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
