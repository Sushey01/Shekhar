import React from "react";
import "./Pivotal.css";
import ProjectImage2 from "../assets/images/pivotalm.png";

const Pivotal = () => {
  return (
    <div className="pivotal-container">
      <div className="pivotal-project-title">
        <h1 className="animated-title">PivotalErp</h1>
        <p>HTML | CSS | JAVASCRIPT | FUNCTIONALITY</p>
      </div>

      <div className="pivotal-project-showcase">
        <img src={ProjectImage2} alt="PivotalErp Project" />
      </div>

      <div className="pivotal-project-content">
        <div className="project-section">
          <h4 className="section-title">Overview:</h4>
          <p className="section-detail">
            PivotalErp is a modern ERP solution for managing business operations like invoicing, banking, HR, and inventory. Built with responsiveness in mind, it’s tailored to small businesses and freelancers.
          </p>
        </div>

        <div className="project-section">
          <h4 className="section-title">Role:</h4>
          <p className="section-detail">Frontend Developer</p>
        </div>

        <div className="project-section">
          <h4 className="section-title">Toolkit:</h4>
          <p className="section-detail">Vite, Figma, Vscode</p>
        </div>

        <button
          className="pivotal-showcase-button"
          onClick={() => window.open("https://dynamic-six-iota.vercel.app/", "_blank")}
        >
          Visit Live Website
        </button>
      </div>
    </div>
  );
};

export default Pivotal;
