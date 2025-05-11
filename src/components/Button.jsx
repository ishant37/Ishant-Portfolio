
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 gap-2";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-primary text-primary hover:bg-primary/10"
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;
  
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
