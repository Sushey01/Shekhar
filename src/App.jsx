import React from 'react'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FeaturedProject from './components/FeaturedProject'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Tangerine from './components/Tangerine'
import Pivotal from './components/Pivotal'
import { BrowserRouter, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Routes path="/" element={<HeroSection/>}/>
      {/* <Navbar/>
      <HeroSection/>
      <Quote/>
      <FeaturedProject/>
      <Contact/>
      <Footer/>
      <Tangerine/>
      <Pivotal/> */}

    </Router>
    </BrowserRouter>
  )
}

export default App
