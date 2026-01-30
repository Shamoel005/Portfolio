import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaTimes } from "react-icons/fa";

const projectData = [
  {
    title: "Hostel Hungry – Real-time Food Delivery Platform",
    description: "Full-stack food delivery platform with separate interfaces for users, shop owners, and delivery personnel. Features real-time order tracking, live rider location, OTP verification, and nearby shop discovery using Geolocation API.",
    fullDescription: "A comprehensive Zomato-like food delivery platform built with the MERN stack featuring three distinct user interfaces (customer, restaurant owner, delivery partner). Implements real-time order tracking with live location updates using Google Maps API, email-based OTP verification for secure deliveries, geolocation-based shop discovery, and complete order management system from placement to delivery confirmation. The platform handles the entire delivery workflow with real-time updates via Socket.io.",
    github: "https://github.com/Shamoel005/Hostel-Hungry", // Update with actual URL
    live: "https://hostel-hungry-0.onrender.com", // Update with actual URL
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Google Maps API", "Nodemailer", "JWT", "Tailwind CSS", "Geolocation API", "Redux Toolkit"],
    image: "/api/placeholder/600/400",
    features: [
      "Multi-role Dashboard (User/Owner/Delivery)",
      "Real-time Order Tracking",
      "Live Rider Location with Google Maps",
      "Email OTP Verification",
      "Nearby Shops Discovery via Geolocation",
      "Payment Integration",
      "Order Management System",
      "Real-time Notifications"
    ],
    category: "Full Stack"
  },
  {
    title: "RAG-Based AI Knowledge System",
    description: "Advanced document retrieval system using Retrieval-Augmented Generation architecture with Vector Databases, LangChain, and Oracle Cloud Infrastructure for high-volume intelligent query processing.",
    fullDescription: "Developed an enterprise-grade AI knowledge system that handles high-volume document retrieval using RAG (Retrieval-Augmented Generation) architecture powered by Vector Databases and LangChain. The system optimizes API response times through refined document chunking and semantic search algorithms, enabling intelligent query processing over large document collections. Built on Oracle Cloud Infrastructure (OCI) for scalability and reliability, with rigorous testing to ensure model accuracy and actionable insights.",
    github: "https://github.com/Shamoel005/rag-ai-system", // Update with actual URL
    live: "https://rag-ai-demo.onrender.com", // Update with actual URL
    tech: ["Python", "LangChain", "Vector Databases", "Oracle Cloud Infrastructure", "OpenAI API", "FastAPI", "RAG Architecture", "Semantic Search"],
    image: "/api/placeholder/600/400",
    features: [
      "RAG Architecture Implementation",
      "Vector Database Integration",
      "Semantic Search Algorithms",
      "Document Chunking Optimization",
      "High-Volume Query Processing",
      "OCI Cloud Deployment",
      "API Response Optimization",
      "Model Accuracy Testing"
    ],
    category: "AI/ML"
  },
  {
    title: "Glamzy – AI-Driven E-commerce Platform",
    description: "Full-featured MERN e-commerce fashion site with AI voice assistant, responsive UI, secure authentication, payment integration, and comprehensive admin dashboard for inventory management.",
    fullDescription: "A comprehensive e-commerce platform built with the MERN stack featuring an AI-powered voice shopping assistant using Web Speech API and OpenAI API. Implements secure payment integration, user authentication with Email/Password and Google OAuth (Firebase), shopping cart functionality, and a complete admin dashboard for inventory management. Includes advanced features like AI-driven product recommendations, order tracking, and real-time inventory updates with optimized routing and state management.",
    github: "https://github.com/Shamoel005/Glamzy",
    live: "https://glamzy-frontend.onrender.com/",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS", "Firebase OAuth", "Web Speech API", "OpenAI API", "Stripe/Razorpay"],
    image: "/api/placeholder/600/400",
    features: [
      "AI Voice Shopping Assistant",
      "Secure Payment Gateway",
      "Admin Dashboard with CRUD",
      "Real-time Inventory Updates",
      "AI Product Recommendations",
      "Order Tracking System",
      "Multi-Auth (Email/Google OAuth)",
      "Responsive Cross-Device UI"
    ],
    category: "Full Stack"
  },
  {
    title: "Vibely – Real-time Chat Application",
    description: "Real-time 1:1 messaging application with live typing indicators, online status tracking, secure JWT authentication, Cloudinary image uploads, and seamless responsive UI/UX.",
    fullDescription: "A modern real-time messaging application enabling seamless 1:1 conversations with live typing indicators, user online status tracking, secure JWT authentication, and media sharing capabilities. Built with Socket.io for instant real-time communication and Cloudinary for efficient image upload and management. Features Redux Toolkit for state management, ensuring responsive UI/UX across all devices with optimized performance and secure data handling using MongoDB and Mongoose.",
    github: "https://github.com/Shamoel005/Vibely-live-chat",
    live: "https://vibely-frontend-rdhy.onrender.com/login",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.io", "Tailwind CSS", "Cloudinary", "JWT"],
    image: "/api/placeholder/600/400",
    features: [
      "Real-time Messaging with Socket.io",
      "Live Typing Indicators",
      "Image Sharing via Cloudinary",
      "Online/Offline Status Tracking",
      "Secure JWT Authentication",
      "Responsive UI/UX Design",
      "State Management with Redux",
      "MongoDB Data Persistence"
    ],
    category: "Real-time"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Real-time", "AI/ML"];

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
        staggerChildren: 0.15
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
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce"></div>
      
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing my expertise in full-stack development, real-time systems, and AI/ML integration through production-ready applications.
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
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'AI/ML' 
                      ? 'bg-purple-500 text-white' 
                      : project.category === 'Real-time'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openModal(project)}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-300 shadow-lg"
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
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-green-600 transition-colors duration-300 shadow-lg"
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
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
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
          <p className="text-gray-600 mb-6 text-lg">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/Shamoel005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
          >
            <FaGithub className="text-2xl" />
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
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {selectedProject.title}
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedProject.category === 'AI/ML' 
                        ? 'bg-purple-500 text-white' 
                        : selectedProject.category === 'Real-time'
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <FaTimes className="text-2xl text-gray-600" />
                  </motion.button>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-blue-500 rounded"></div>
                      Project Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-purple-500 rounded"></div>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-green-500 rounded"></div>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-lg font-medium border border-blue-200 hover:border-blue-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-gray-200">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 flex-1 justify-center shadow-md hover:shadow-lg"
                    >
                      <FaGithub className="text-xl" />
                      View Source Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex-1 justify-center shadow-md"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      View Live Demo
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


