import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollActive } from '../hooks/useScrollActive';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useScrollActive();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
  };

  const navItemVariants = {
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/70 backdrop-blur-md shadow-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.a
          href="#hero"
          className="font-extrabold text-xl md:text-2xl text-primary tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-all duration-200 px-1 py-1 font-medium ${
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              } group`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-primary to-pink-500 ${
                  activeSection === link.href.substring(1) ? 'scale-x-100' : ''
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col justify-between h-5 transform transition duration-300">
            <span
              className={`h-0.5 w-full bg-foreground transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 bg-foreground transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-foreground transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="fixed inset-0 bg-background/90 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center space-y-10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-foreground"
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
