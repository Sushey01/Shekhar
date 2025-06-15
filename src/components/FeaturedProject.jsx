import React from 'react'
import './FeaturedProject.css'
import Quote from "../assets/images/quote.png"

const FeaturedProject = () => {
  return (
    <div className='feature-container'>
             <div className="quote-img">
        <img src={Quote}></img>
      </div>
    </div>
  )
}

export default FeaturedProject
