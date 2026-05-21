import AnimatedSection from "./AnimatedSection";
import Button from "./Button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Code2, Star } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "Job Junction",
    description:
      "An AI-powered employment platform that connects job seekers with employers through smart recommendations, resume management, and skill-based matching.",
    image: "https://i.postimg.cc/cLGHYRGk/Screenshot-2025-05-10-143521.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "AI"],
    links: {
      github: "https://github.com/ishant37/job-junction",
    },
    featured: true,
  },
  {
    id: "project2",
    title: "HeartSync",
    description:
      "A personal AI chat application that allows users to interact with an AI trained on their own WhatsApp conversations.",
    image: "https://i.postimg.cc/dQBjH3gL/chat.png",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
    links: {
      github: "https://github.com/ishant37/HeartSync",
    },
    featured: true,
  },
  {
    id: "project3",
    title: "Apni Dukan",
    description:
      "A full-stack e-commerce platform with product catalog, cart management, authentication, payment integration, and admin dashboard.",
    image: "https://i.postimg.cc/wjPHNCSm/image.png",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    links: {
      github: "https://github.com/ishant37/My-Shop",
      demo: "https://my-shop-chi-mocha.vercel.app/",
    },
    featured: true,
  },
  {
    id: "project4",
    title: "AJAY Pragati",
    description:
      "A web portal for PM-AJAY Grant-in-Aid scheme with GIS-based visualization, scheme tracking, and interactive map features.",
    image: "https://i.postimg.cc/PqCffRjY/image.png",
    tags: ["React", "Tailwind", "Leaflet", "GIS", "GeoJSON"],
    links: {
      github: "https://github.com/ishant37/AJAY-Pragati",
      demo: "https://ajay-pragati.vercel.app/",
    },
  },
  {
    id: "project5",
    title: "Nyay Darpan",
    description:
      "An AI-powered legal decision-assist tool that summarizes consumer case files and retrieves similar judgments for dispute resolution.",
    image: "https://i.postimg.cc/NjMpdWTd/image.png",
    tags: ["React", "AI", "LegalTech", "Search", "NLP"],
    links: {
      github: "https://github.com/ishant37/NyayDarpan",
      demo: "https://nyay-darpan.vercel.app/",
    },
  },
  {
    id: "project6",
    title: "Personal Gym Website",
    description:
      "A responsive fitness website with modern UI sections, workout content, and clean design focused on user engagement.",
    image: "https://i.postimg.cc/FKt8NNMD/image.png",
    tags: ["React", "Tailwind", "CSS"],
    links: {
      github: "https://github.com/ishant37/Gym-site",
      demo: "https://gym-site-beta.vercel.app/",
    },
  },
];

const ROTATION_RANGE = 24;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {project.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            <Star size={13} />
            Featured
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-foreground/80 border border-border"
            >
              <Code2 size={12} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.links.demo && (
            <Button
              href={project.links.demo}
              variant="primary"
              className="flex-1 text-sm cursor-target hover:scale-105 transition-all duration-300"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}

          {project.links.github && (
            <Button
              href={project.links.github}
              variant="outline"
              className="flex-1 text-sm cursor-target hover:scale-105 transition-all duration-300"
            >
              GitHub
              <FaGithub className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-3">
            A collection of full-stack, AI-based, and frontend projects focused
            on real-world problem solving and clean user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-black text-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Want to see more?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. I'm constantly
            building new projects, improving my skills, and exploring modern web
            technologies.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://github.com/ishant37?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-target items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 text-xs sm:text-sm rounded-full hover:scale-105 transition-all duration-300"
            >
              <FaGithub />
              View All on GitHub
            </a>

            <a
              href="mailto:singhishant37@gmail.com"
              className="border cursor-target border-white text-white py-2 px-4 text-xs sm:text-sm rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;