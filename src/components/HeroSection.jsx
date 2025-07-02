import React from "react";
import "./HeroSection.css";
import Shekhar from "../assets/images/shekhar.png";
import Quote from "./Quote";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {


const navigate=useNavigate("")


  return (
    <section>
      <div className="hero-container">
        <div className="hero-image">
          <img src={Shekhar} />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Who am I?</h1>
          <p className="hero-intro">
            I'm Virus, a frontend developer passionate about crafting sleek,
            interactive user interfaces that enhance digital experiences. I
            specialize in modern web technologies, bringing designs to life with
            dynamic effects, responsive layouts, and engaging animations.{" "}
          </p>
          <button className="hero-button">Learn more</button>
        </div>
      </div>

      <div className="hero-arrow" onClick={navigate(<Quote/>)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          color="#fff"
          stroke-linejoin="round"
          class="lucide lucide-arrow-down-icon lucide-arrow-down"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
     
    </section>
  );
};

export default HeroSection;
