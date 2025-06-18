import React from 'react'
import './Tangerine.css'
import ProjectImage1 from "../assets/images/project1.png"


const Tangerine = () => {
  return (
    <div className="tangerine-container">
        <div className="tangerine-project-title">
            <h1>Tangerine</h1>
            <p>HTML | CSS | JAVASCRIPT | FUNCTIONALITY</p>
        </div>

        <div className="tangerine-project-showcase">
            <img src={ProjectImage1}/>

        </div>
    </div>
  )
}

export default Tangerine
