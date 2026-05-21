import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code2, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ClickSpark from "./ClickSpark";

const experiences = [
  {
    role: "Full-Stack Developer / Team Lead",
    company: "Smart India Hackathon",
    period: "Sep 2024",
    type: "Hackathon Project",
    icon: <Trophy size={18} />,
    description:
      "Led the development of Job Junction, an AI-driven employment platform designed for the Government of Punjab to improve job matching, skill assessment, and career guidance.",
    tasks: [
      "Built modules for AI-powered job matching, skill assessment, resume building, and training recommendations.",
      "Worked on responsive frontend screens and user-friendly dashboards for job seekers.",
      "Collaborated with the team to design a scalable solution for unemployment and career development challenges.",
    ],
    stack: ["React", "Node.js", "MongoDB", "AI", "Tailwind"],
  },
  {
    role: "Web Development Intern",
    company: "Bharat Intern Pvt. Ltd.",
    period: "Aug 2024 - Sep 2024",
    type: "Internship",
    icon: <Briefcase size={18} />,
    description:
      "Worked on frontend web development projects using HTML, CSS, JavaScript, and React.js with a focus on responsive UI and real-world API integration.",
    tasks: [
      "Built responsive and interactive websites using HTML, CSS, JavaScript, and React.js.",
      "Created a weather application using React and APIs to show real-time weather data.",
      "Improved UI structure, responsiveness, and user experience across projects.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "API"],
  },
];

const ExperienceSection = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <AnimatedSection id="experience" className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Work Experience</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-3">
              Practical experience through internships, hackathons, and real-world
              development projects.
            </p>
          </div>

          <div className="relative mt-12 md:mt-16">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 last:mb-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                } pl-12 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-2 left-0 md:left-auto ${
                    index % 2 === 0
                      ? "md:-right-5"
                      : "md:-left-5"
                  } w-10 h-10 rounded-full bg-background border-2 border-purple-500 flex items-center justify-center text-purple-500 shadow-lg shadow-purple-500/30 z-10`}
                >
                  {exp.icon}
                </div>

                <motion.div
                  className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/50 via-blue-500/40 to-pink-500/50 hover:from-purple-500 hover:via-blue-500 hover:to-pink-500 transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="card rounded-3xl p-5 sm:p-6 bg-background/90 backdrop-blur-xl h-full">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-500 font-medium">
                        <Calendar size={15} />
                        {exp.period}
                      </span>

                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-purple-500 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="mb-4 text-sm text-muted-foreground">
                      {exp.company}
                    </div>

                    <p className="mb-5 text-foreground/80 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 text-foreground/75 text-xs sm:text-sm">
                      {exp.tasks.map((task, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-foreground/80 border border-border"
                        >
                          <Code2 size={12} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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