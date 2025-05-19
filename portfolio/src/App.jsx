import { useState } from 'react';
import './index.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="bg-gradient-to-br from-[#06041d] via-[#110c45] to-[#03031f] min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Projects /> 
          <Contact />
          <Footer />
        </div>
        
    )
}

export default App;
