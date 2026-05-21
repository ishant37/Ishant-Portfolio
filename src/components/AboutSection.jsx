import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ClickSpark from "./ClickSpark";
import LogoLoop from "./Animations/LogoLoop";

import { FaCss3, FaGitAlt, FaHtml5 } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <BiLogoMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
  { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <FaCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl text-primary cursor-target"
      style={{ lineHeight: 0.8 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
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
      <AnimatedSection id="about" className="relative bg-muted/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <h2 className="section-title text-3xl sm:text-4xl">About Me</h2>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                My Background
              </h3>

              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                I'm Ishaant Singh, a Full Stack Developer and AI & Data Science
                student passionate about building responsive, scalable, and
                user-friendly web applications.
              </p>

              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                I work with React, Tailwind CSS, Node.js, Express, MongoDB, and
                modern frontend tools to create clean interfaces and practical
                full-stack projects.
              </p>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                I enjoy solving DSA problems, building real-world projects, and
                continuously improving my development skills for internships and
                software engineering roles.
              </p>

              {/* Job-ready cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-7">
                <div className="p-4 rounded-2xl bg-background/80 shadow border border-border hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-purple-600">10+</h4>
                  <p className="text-sm text-foreground/70">Projects Built</p>
                </div>

                <div className="p-4 rounded-2xl bg-background/80 shadow border border-border hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-purple-600">MERN</h4>
                  <p className="text-sm text-foreground/70">Main Stack</p>
                </div>

                <div className="p-4 rounded-2xl bg-background/80 shadow border border-border hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-purple-600">DSA</h4>
                  <p className="text-sm text-foreground/70">Problem Solving</p>
                </div>
              </div>
            </div>

            {/* Right Links */}
            <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
              <div className="grid gap-3 sm:gap-4 w-full sm:w-auto">
                <FlipLink href="https://github.com/ishant37">Github</FlipLink>
                <FlipLink href="https://www.linkedin.com/in/ishaant-singh-288b70291/">
                  Linkedin
                </FlipLink>
                <FlipLink href="/singhishant37.pdf">Resume</FlipLink>
                <FlipLink href="mailto:singhishant37@gmail.com">Email</FlipLink>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Logo Loop */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-full max-w-5xl px-4 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology stack"
          />
        </div>
      </AnimatedSection>
    </ClickSpark>
  );
};

export default AboutSection;