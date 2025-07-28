import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Contact from "./components/Contact";
import FeaturedProject from './components/FeaturedProject';
import Pivotal from './components/Pivotal';
import Tangerine from './components/Tangerine';
import Footer from "./components/Footer";
import Quote from './components/Quote'; // Make sure this is imported!
import TechStack from './components/TechStack';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Quote />
            <FeaturedProject />
            <TechStack/>
            <Contact/>
          </>
        } />
        <Route path="/projects" element={<FeaturedProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pivotal" element={<Pivotal />} />
        <Route path="/tangerine" element={<Tangerine />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
};

export default App;
