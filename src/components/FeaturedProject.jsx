import React from "react";
import "./FeaturedProject.css";
import ProjectCard from "./ProjectCard";
import Tangerine from "../assets/images/tangerine.png";
import HealthLogo from "../assets/images/HealthLogo.svg";
import PivotalLogo from "../assets/images/PivotalLogo.svg"
import PivotalMain from "../assets/images/pivotalm.png"

const cardsData = [
  {
    logo: HealthLogo,
    title: "Tangerine-Meringue",
    description:
      "A stylish, responsive hospital website clone built with React and eye-catching CSS effects. Explore expert care, services, and more — all wrapped in a smooth, modern design.",
    infoText: "Read case study",
    mainImage: Tangerine,
  },

  {
    logo: PivotalLogo,
    title: "Pivotal-ERP",
    description:
    "Dynamic Technosoft Website that shares the dynamic's workflow and their journey of establishment. Exploring the hardwork and dedication of the dynamic technosoft in web-pages.",
    infoText:"Read case study",
    mainImage: PivotalMain,
  },


];

const FeaturedProject = () => {
  return (
    <div className="feature-container">
      <div className="feature-projects">
        <div className="feature-title">
          <h1>Featured projects</h1>
          <p>
            Find out about my latest works of my Intern: Read through my case studies, have look at
            final designs and try out prototypes I’ve built.
          </p>
        </div>

        <div className="project-showcase">
         {cardsData.map((card, index)=>(
          <ProjectCard 
          key={index}
          logo={card.logo}
          title={card.title}
          description={card.description}
          infoText={card.infoText}
          mainImage={card.mainImage}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
