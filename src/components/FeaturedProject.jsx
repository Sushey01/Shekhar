import React from 'react'
import './FeaturedProject.css'
import Quote from "../assets/images/quote.png"

const FeaturedProject = () => {
  return (
    <div className='feature-container'>
             <div className="quote-img">
        <img src={Quote}></img>

        <div className="feature-projects">
            <div className="feature-title">
                <h1>Featured projects</h1>
                <p>Find out about my works: read through my case studies, have look at final designs and try out prototypes I’ve built.</p>
            </div>

            <div className="card-container">
                <div className="card-logo">
                    <img></img>
                </div>
                <div className="card-content">
                    <h1>Tangerine-Meringue</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem optio debitis corporis modi est iste, totam neque reiciendis doloremque asperiores quam accusantium temporibus recusandae beatae dicta, unde fugit praesentium?</p>
                    <div className="card-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
