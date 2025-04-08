
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Workflow from '../components/Workflow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import { useScrollAnimation } from '../utils/scrollAnimations';

const Index = () => {
  useScrollAnimation();

  // Change the page title
  useEffect(() => {
    document.title = 'Manual QA Engineer Portfolio';
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen">
      <ParticlesBackground />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
