import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleResize = () => {
      // Optional responsive behavior
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="space-x-6 text-sm sm:text-base">
        <a href="#home" className="hover:text-blue-400 transition">Home</a>
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </nav>
  );
}
