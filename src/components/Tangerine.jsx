import React from "react";
import "./Tangerine.css";
import ProjectImage1 from "../assets/images/project1.png";

const Tangerine = () => {
  return (
    <div className="tangerine-container">
      <div className="tangerine-project-title">
        <h1 className="animated-title">Tangerine</h1>
        <p>HTML | CSS | JAVASCRIPT | FUNCTIONALITY</p>
      </div>

      <div className="tangerine-project-showcase">
        <img src={ProjectImage1} />
      </div>

      <div className="tangerine-project-content">
        <h4>
          Overview:
          <span>
            A responsive clone of the South Himal Hospital website built with
            React and CSS. It replicates key UI elements and structure for
            educational practice in frontend development and modern styling
            techniques.
          </span>
        </h4>

        <h4>Role: 
          <span>Frontend Developer</span>
        </h4>

         <h4>Toolkit: 
          <span>Vite, Figma, and Vscode</span>
        </h4>

        <button className="tangerine-showcase-button">Visit Live Website</button>
      </div>
    </div>
  );
};

export default Tangerine;
