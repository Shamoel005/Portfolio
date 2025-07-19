import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-gray-50 to-blue-100 min-h-screen"
    >
      <h2 className="text-6xl font-bold mb-6 text-center text-gray-800">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed text-gray-700">
        I'm a <strong className="text-blue-600">MERN Stack Developer</strong> with a deep passion for building
        scalable, responsive, and user-centric web applications. With hands-on experience in <strong>MongoDB, Express.js, React.js, and Node.js</strong>, I craft full-stack solutions that are both efficient and elegant.
        <br /><br />
        In addition to web development, I have a growing interest and practical experience in the field of{" "}
        <strong className="text-purple-600">Artificial Intelligence and Machine Learning</strong>. I have worked on projects involving <strong>data preprocessing, supervised/unsupervised learning, computer vision</strong>, and <strong>natural language processing (NLP)</strong> using tools like <strong>Python, Pandas, NumPy, Scikit-learn, TensorFlow, and OpenCV</strong>.
        <br /><br />
        I enjoy creating intelligent systems that can learn, adapt, and enhance user experiences. My AI/ML journey complements my development skills by enabling smarter features such as recommendation systems, sentiment analysis, and image classification.
        <br /><br />
        I thrive in collaborative environments, value clean and maintainable code, and continuously explore new technologies. With a strong foundation in full-stack development and a growing expertise in AI/ML, I'm driven to build impactful solutions that bridge technology and innovation.
      </p>
    </section>
  );
}
