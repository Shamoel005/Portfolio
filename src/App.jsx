import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
  className="min-h-screen bg-cover bg-center text-white font-sans"
  
>
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
</div>

  );
}
