
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

// import WaterDropGrid from '../components/WaterDropGrid';
const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll blue-gradient-scrollbar">
      <Navbar />
      <ThemeToggle />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        {/* <WaterDropGrid/> */}
        <ProjectsSection />
        <Interest/>
        {/* <Cards/> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
