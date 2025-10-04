import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ClickSpark from './ClickSpark';

import LogoLoop from './Animations/LogoLoop';
import { FaCss3, FaGitAlt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';


import { SiReact, SiTypescript, SiTailwindcss,SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <BiLogoMongodb />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaGitAlt />, title: "Github", href: "https://github.com/" },
  { node: <FaHtml5 />, title: "Github", href: "https://github.com/" },
  { node: <SiExpress />, title: "Github", href: "https://github.com/" },
  { node: <FaCss3 />, title: "Github", href: "https://github.com/" }
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl text-primary"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const AboutSection = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <AnimatedSection id="about" className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About Me</h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Background Section */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">My Background</h3>
              <p className="mb-4 text-foreground/80">
                I'm a passionate full-stack developer with  web applications. I enjoy solving complex problems and turning
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

            {/* Reveal Links Section */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="grid gap-4">
                <FlipLink className="cursor-target" href="https://github.com/ishant37">Github</FlipLink>

                <FlipLink className="cursor-target" href="https://www.linkedin.com/in/ishaant-singh-288b70291/">LINKEDIN</FlipLink>
                <FlipLink className="cursor-target" href="https://www.instagram.com/__ishant05/">Instagram</FlipLink>
              </div>
            </div>
          </div>
        </div>
      <div style={{  width:'50rem',
  height: '200px',
  justifyContent:'center',
  margin:'auto',
  marginTop:'3rem',
  position: 'ablsolute',
  overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        // fadeOut
        // fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
      </AnimatedSection>
    </ClickSpark>
  );
};

export default AboutSection;
