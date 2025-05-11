
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
import WaterDropGrid from '../components/WaterDropGrid';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ThemeToggle />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WaterDropGrid/>
        <ProjectsSection />
        <Interest/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
