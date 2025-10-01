// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 text-center min-h-screen flex flex-col justify-center items-center"
//     >
//       <h2 className="text-4xl font-bold mb-10 text-gray-800 uppercase tracking-wider">
//         Contact Me
//       </h2>

//       <form
//         action="https://formspree.io/f/movlvokw"
//         method="POST"
//         className="w-full max-w-xl space-y-4 text-left bg-white p-6 rounded-xl shadow-md"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full border border-gray-300 p-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="w-full border border-gray-300 p-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           className="w-full border border-gray-300 p-3 rounded-md h-32 resize-none text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>

//       <div className="mt-10 flex gap-8 text-2xl text-blue-700">
//         <a
//           href="https://github.com/Shamoel005"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-black transition"
//         >
//           <FaGithub title="GitHub" />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/md-shamoel/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-black transition"
//         >
//           <FaLinkedin title="LinkedIn" />
//         </a>
//         <a
//           href="mailto:farooquishamoel@gmail.com"
//           className="hover:text-black transition"
//         >
//           <FaEnvelope title="Email" />
//         </a>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully! I'll get back to you soon.");
    }, 2000);
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Shamoel005",
      label: "GitHub",
      color: "hover:text-gray-800"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/md-shamoel/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: SiLeetcode,
      href: "#",
      label: "LeetCode",
      color: "hover:text-orange-500"
    },
    {
      icon: FaEnvelope,
      href: "mailto:farooquishamoel@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "farooquishamoel@gmail.com",
      subtext: "Email me anytime"
    },
    {
      icon: FaMapMarkerAlt,
      text: "Based in India",
      subtext: "Open to remote opportunities"
    },
    {
      icon: FaPhone,
      text: "Available on request",
      subtext: "Let's connect first"
    }
  ];

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

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="mr-3 text-blue-500" />
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{info.text}</p>
                      <p className="text-sm text-gray-600">{info.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
              <div className="flex gap-4">
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 bg-white rounded-xl shadow-lg border border-gray-100 text-2xl text-gray-600 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-2">🚀 Quick Response</h4>
              <p className="text-blue-50">
                I typically respond within 24 hours. Let's start an amazing project together!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
