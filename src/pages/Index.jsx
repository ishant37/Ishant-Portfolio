
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import Interest from '../components/Interest';
// import Cards from "../components/Cards"
// App.jsx or App.js
import '../App.css';
import TargetCursor from '../components/Animations/TargetCursor';

// import WaterDropGrid from '../components/WaterDropGrid';
const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll blue-gradient-scrollbar">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      < Navbar className='cursor-target'/>
      <ThemeToggle />
      <main>
        <HeroSection className='cursor-target'/>
        <AboutSection className='cursor-target'/>
        <ExperienceSection className='cursor-target' />
        {/* <WaterDropGrid/> */}
        <ProjectsSection className='cursor-target' />
        <Interest className='cursor-target'/>
        {/* <Cards/> */}
        <ContactSection className='cursor-target' />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
