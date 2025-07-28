import React from "react";
import "./TechStack.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaJava,
  FaCode,
  FaProjectDiagram,
  FaMicrochip,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiVite,
  SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStackData = [
  {
    category: "Languages",
    techs: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    category: "Web Development",
    techs: [
      { name: "React", icon: <FaReact /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    category: "Data & Architecture",
    techs: [
      { name: "DSA", icon: <FaCode /> },
      { name: "System Design", icon: <FaProjectDiagram /> },
    ],
  },
  {
    category: "IoT & Embedded",
    techs: [
      { name: "IoT", icon: <FaMicrochip /> },
    ],
  },
  {
    category: "Tools",
    techs: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Figma", icon: <FaFigma /> },
      // VS Code removed to avoid issue
    ],
  },
];

const TechStack = () => {
  return (
    <motion.div
      className="techstack-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="techstack-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        My Tech Stack
      </motion.h1>

      {techStackData.map((section, idx) => (
        <motion.div
          key={section.category}
          className="techstack-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{section.category}</h2>
          <div className="techstack-grid">
            {section.techs.map((tech) => (
              <motion.div
                key={tech.name}
                className="tech-card"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
