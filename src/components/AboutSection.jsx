
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ClickSpark from './ClickSpark';
const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'Git', 'Docker', 'AWS', 'Figma'
];

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <AnimatedSection id="about" className="bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-row lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Background</h3>
            <p className="mb-4 text-foreground/80">
              I'm a passionate full-stack developer with over 5 years of experience 
              building web applications. I enjoy solving complex problems and turning 
              ideas into reality through elegant interfaces.
            </p>
            <p className="mb-4 text-foreground/80">
              I began my journey as a self-taught developer and later formalized my 
              education with a degree in Computer Science. Throughout my career, 
              I've worked with startups and established companies alike, helping them 
              achieve their digital transformation goals.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me hiking, reading tech blogs, or 
              contributing to open source projects. I'm constantly learning new technologies 
              and techniques to stay at the forefront of web development.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="tag hover:bg-primary hover:text-primary-foreground transform transition-all duration-300"
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
    </ClickSpark>
  );
};

export default AboutSection;
