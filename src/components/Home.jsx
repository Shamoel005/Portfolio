// import React from "react";

// export default function Home() {
//   return (
//     <section
//       id="home"
//       className="flex flex-col justify-center items-center text-center space-y-6 p-10 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen" 
//     >
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
//         Hi, I'm <span className="text-blue-600 text-10xl" >MD SHAMOEL FAROOQUI</span>
//       </h1>
//       <p className="text-xl md:text-2xl text-gray-700 mb-6">
//         MERN Stack & AI/ML Developer | Java DSA | Open Source | Problem Solver
//       </p>
//       <a
//   href="/resume.pdf"
//   download
//   className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
// >
//   Download Resume
// </a>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["MERN Stack Developer", "AI/ML Enthusiast", "Problem Solver", "Open Source Contributor"];
  
  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, roles]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Shamoel005",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/md-shamoel/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: SiLeetcode,
      href: "#",
      label: "LeetCode",
      color: "hover:bg-orange-500"
    },
    {
      icon: FaEnvelope,
      href: "mailto:farooquishamoel@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="block text-gray-800">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-2">
              MD SHAMOEL
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FAROOQUI
            </span>
          </h1>
        </motion.div>

        {/* Animated Typing Text */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 min-h-[60px]">
            <span className="text-gray-600">I'm a </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative digital solutions with modern technologies. 
            Specializing in full-stack development and artificial intelligence.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>
          
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Explore More
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className={`p-4 bg-white rounded-2xl shadow-lg border border-gray-100 text-2xl text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:shadow-xl`}
              title={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            title="Scroll down"
          >
            <FaArrowDown className="text-2xl" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">2+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">5+</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">3+</div>
            <div className="text-sm text-gray-600">Open Source</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
