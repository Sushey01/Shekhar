import React from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import FeaturedProject from "./FeaturedProject";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate();
  return (
    <section className="section-nav">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <div className="logo-content">
          <Link to="/projects">Projects</Link>
          <Link to="/">About Me</Link>
        </div>
        <button className="nav-button" onClick={()=>navigate('/contact')} >Contact Me</button>
      </div>
    </section>
  );
};

export default Navbar;
