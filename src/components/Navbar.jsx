import React from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import FeaturedProject from "./FeaturedProject";


const Navbar = () => {
  return (
    <section className="section-nav">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <div className="logo-content">
          <a href="#">About Me</a>
          <a href="#">Projects</a>
        </div>
        <button className="nav-button">Contact Me</button>
      </div>
    </section>
  );
};

export default Navbar;
