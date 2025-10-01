import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Shamoel005",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/md-shamoel/",
      label: "LinkedIn",
      color: "hover:text-blue-300"
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/Shamoel_05/", 
      label: "LeetCode",
      color: "hover:text-orange-300"
    },
    {
      icon: FaEnvelope,
      href: "mailto:farooquishamoel@gmail.com",
      label: "Email",
      color: "hover:text-red-300"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 40%)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              MD SHAMOEL FAROQUI
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Full Stack Developer & AI/ML Enthusiast passionate about creating innovative digital solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 text-lg transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 py-1 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center md:justify-end">
                <FaEnvelope className="mr-2 text-blue-400" />
                farooquishamoel@gmail.com
              </p>
              <p className="text-sm">Based in India</p>
              <p className="text-sm">Open to opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span className="flex items-center">
              Made with <FaHeart className="mx-2 text-red-400 animate-pulse" /> and <FaCode className="mx-2 text-blue-400" />
            </span>
          </div>
          
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} MD SHAMOEL FAROQUI. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            title="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-10 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
    </footer>
  );
}
