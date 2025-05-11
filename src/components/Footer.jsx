import { Square } from 'lucide-react';
import React from 'react';
import GradientText from './Animations/GradientText'; // Import the GradientText component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-foreground/70 text-center"
          >
            © {currentYear} Made by React. All rights reserved.
          </GradientText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
