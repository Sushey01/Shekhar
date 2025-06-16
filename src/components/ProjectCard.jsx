import React from 'react'
import './ProjectCard.css'




const ProjectCard = ({logo, title, description, infoText, mainImage}) => {
  return (
    <>
      <div className="card-container">
          <div className="card-logo">
            <img src={logo} alt={`${title}`}/>
          </div>
          <div className="card-content">
            <h3>{title}</h3>
            <p>
             {description}
            </p>
          </div>
          <div className="card-info">
            <p>{infoText}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </div>
          <img src={mainImage} alt={`${title}`} className='main-image'></img>
        </div>
    </>
  )
}

export default ProjectCard
