import React from 'react'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FeaturedProject from './components/FeaturedProject'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedProject/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
