import AnimatedSection from './AnimatedSection';
import Button from './Button';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { FiMousePointer } from "react-icons/fi";
const projects = [
  {
    id: "project1",
    title: "E-Commerce Platform- Apni Dukan",
    description:
      "A full-featured online store with cart, payment processing, and admin dashboard.",
    image: "https://i.postimg.cc/wjPHNCSm/image.png",
    longDescription:
      "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, cart management, secure payment processing, order tracking, and an admin dashboard for inventory management.",
    tags: ["React", "Node.js", "MongoDB", "React-Redux"],
    links: {
      github: "https://github.com/ishant37/My-Shop",
      demo: "https://my-shop-chi-mocha.vercel.app/",
    },
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and wishlist",
      "Payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "TextForm is basically used to copy, Uppercase and lowercase any text which you can paste at another place.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
    longDescription:
      "A productivity tool inspired by Trello and Asana, built with React, Redux, and Firebase. Users can create boards, add tasks with details, set due dates, assign team members, and track progress through customizable workflows.",
    tags: ["React", "Redux", "Tailwind", "CSS"],
    links: {
      github: "https://github.com/ishant37/Textform",
      demo: "https://textform.vercel.app/textform",
    },
    features: [
      "Drag-and-drop interface for task management",
      "Custom board and column creation",
      "Task attachments and comments",
      "Team member assignment",
      "Due dates and reminders",
      "Activity tracking and notifications",
    ],
  },
  {
    id: "project3",
    title: "My personal GYM",
    description:
      "A mobile-first fitness app for tracking workouts, nutrition, and progress.",
    image: "https://i.postimg.cc/FKt8NNMD/image.png",
    longDescription:
      "A comprehensive fitness application built with React Native and a Node.js backend. The app enables users to track workouts, monitor nutrition intake, set fitness goals, visualize progress with charts, and connect with fitness communities.",
    tags: ["React", "Tailwind", "CSS"],
    links: {
      github: "https://github.com/ishant37/Gym-site",
      demo: "https://gym-site-beta.vercel.app/",
    },
    features: [
      "Workout logging and routines",
      "Nutrition tracking and meal planning",
      "Progress visualization with charts",
      "Goal setting and achievements",
      "Social features and challenges",
      "Integration with fitness wearables",
    ],
  },
  {
    id: "project4",
    title: "Weather Dashboard",
    description:
      "Real-time weather forecasting with interactive maps and alerts.",
    image: "https://i.postimg.cc/Y9H5fM8h/image.png",
    longDescription:
      "A weather application that provides real-time forecasts, interactive maps, and weather alerts. Built with React and integrating multiple weather APIs, it delivers accurate weather data with a clean, intuitive interface.",
    tags: ["React", "Weather API", "Chart.js", "Mapbox"],
    links: {
      github: "https://github.com/ishant37/weather-app",
      demo: "https://weather-app-git-main-ishant37s-projects.vercel.app/",
    },
    features: [
      "Real-time weather updates",
      "5-day forecasting",
      "Interactive weather maps",
      "Location-based services",
    ],
  },
  {
    id: "project5",
    title: "Job-Junction",
    description: "A job portal for job seekers and employers to connect.",
    image: "https://i.postimg.cc/cLGHYRGk/Screenshot-2025-05-10-143521.png",
    longDescription:
      "A comprehensive job portal that connects job seekers with potential employers. Built with React and Node.js, it features job listings, resume uploads, application tracking, and employer profiles.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/ishant37/job-junction",
      demo: "https://job-junction-frontend.vercel.app/",
    },
    features: [
      "Job listings and search",
      "Resume upload and management",
      "Application tracking system",
      "Employer profiles and reviews",
      "Email notifications for job matches",
    ],
  },
  {
    id: "project6",
    title: "Student Management System",
    description:
      "A Python application for managing student records, grades, and attendance.",
    image: "https://www.slideshare.net/slideshow/stdent-infromation/66678121", // Replaced link for reliability
    longDescription:
      "A Python-based student-grade-management system that allows schools to manage student records, grades, and attendance. The application features a user-friendly interface for teachers and administrators to add, update, and view student information.",
    tags: ["Python", "Tkinter"],
    links: {
      github: "https://github.com/ishant37/student-grade-management",
      demo: "", // optional: add a live link or leave empty
    },
    features: [
      "Student record management",
      "Grade tracking and reporting",
      "Attendance tracking",
    ],
  },
];


const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0); 

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const zSpring = useSpring(z);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

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
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="card h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 0.5 : 0
          }}
        ></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button href={project.links.demo} variant="primary" className="flex-1 text-sm">
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Button>
          <Button href={project.links.github} variant="outline" className="flex-1 text-sm">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};


const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 box-shadow: var(--shadow-2xl)">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
