import React from "react";
import "./FeaturedProject.css";
import ProjectCard from "./ProjectCard";
import Tangerine from "../assets/images/tangerine.png";
import HealthLogo from "../assets/images/HealthLogo.svg";

const cardsData = [
  {
    logo: HealthLogo,
    title: "Tangerine-Meringue",
    description:
      "A stylish, responsive hospital website clone built with React and eye-catching CSS effects. Explore expert care, services, and more — all wrapped in a smooth, modern design.",
    infoText: "Read case study",
    mainImage: Tangerine,
  },


];

const FeaturedProject = () => {
  return (
    <div className="feature-container">
      <div className="feature-projects">
        <div className="feature-title">
          <h1>Featured projects</h1>
          <p>
            Find out about my works: read through my case studies, have look at
            final designs and try out prototypes I’ve built.
          </p>
        </div>

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
  );
};

export default FeaturedProject;
