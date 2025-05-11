
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ClickSpark from './ClickSpark';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'SIH Hackathon',
    period: 'Sep 2024',
    description: 'Worked as a web developer and team lead on Job Junction, a finalist project in Smart India Hackathon 2023. Built an AI-driven employment platform for the Government of Punjab featuring job matching, skill assessment, resume building.',
    tasks: [
      'Developed key modules including AI-powered job matching, skill assessment, training course recommendations, and real-time job market insights.',
      'Collaborated with a cross-functional team to deliver a scalable solution addressing unemployment and career development challenges.',
      // 'Optimized database queries resulting in 30% faster API responses'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Bharat internet Pvt. Ltd.',
    period: 'Aug 2024 - Sep 2024',
    description: 'Contributed to the development of client websites and internal tools using modern JavaScript frameworks and CSS preprocessors.',
    tasks: [
      'Built multiple responsive and interactive websites using HTML, CSS, JavaScript, and React.js',
      'Maintained and updated existing websites for improved performance and SEO',
      "Designed and deployed a weather application using React and APIs to show real-time weather based on the user's location",
    ]
  }
];

const ExperienceSection = () => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <AnimatedSection id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-16 last:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 
                  ? 'right-0 md:right-auto md:-left-1.5 md:translate-x-0' 
                  : 'right-0 md:-right-1.5'
              } transform md:translate-x-0 w-3 h-3 rounded-full bg-primary`}></div>
              
              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-1 text-primary font-medium">{exp.period}</div>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <div className="mb-3 text-muted-foreground">{exp.company}</div>
                <p className="mb-4 text-foreground/80">{exp.description}</p>
                <ul className="list-disc ml-5 space-y-1 text-foreground/70">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
    </ClickSpark>
  );
};

export default ExperienceSection;
