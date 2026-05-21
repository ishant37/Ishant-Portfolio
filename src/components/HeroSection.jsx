import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import BlurText from "./Animations/BlurText"; // Import the BlurText component
import Particles from "./Animations/Particles"; // Import the Particles component
import RotatingText from "./Animations/RotatingText"; // Import the RotatingText component
import GlareHover from "./Animations/GlareHover";
import TargetCursor from "./Animations/TargetCursor";
// import "./HeroBackground.css";

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen items-center  justify-center hero-background px-4 pt-16 overflow-hidden  relative bg-cover "
    >
      {/* --- Particles Background --- */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* --- Background Blur Effects --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-16 md:top-20 right-[5%] sm:right-[10%] md:right-[10%] w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div
          className="absolute bottom-5 sm:bottom-10 md:bottom-10 left-[5%] sm:left-[15%] md:left-[15%] w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-light"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto my-16 md:my-24 px-4 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
  {/* Left: Text Content */}
  <div
    className={`space-y-4 sm:space-y-6 transform transition-all duration-700 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } max-w-xl w-full md:w-auto`}
  >
    <div className="w-full flex justify-center md:justify-start">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading mb-2 sm:mb-3 text-center md:text-left">
        <BlurText text="Hello, I'm Ishaant" className="text-purple-700 dark:text-purple-400" />
      </h1>
    </div>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
      <RotatingText
        texts={['Fullstack-Developer', 'Designer', 'Creator']}
        mainClassName="px-1.5 sm:px-2 md:px-3 dark:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </p>

    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8">
      I build beautiful, responsive web applications with modern technologies.
      Passionate about creating intuitive user experiences and clean, efficient code.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
      {/* <TargetCursor
        
      /> */}
      
     <Button
              size="lg"
              variant="primary"
              className="cursor-target bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium"
              onClick={() => {
                const link = document.createElement("a");
                link.href ="./singhishant37.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2" />
              Download CV
            </Button>

      <Button
        variant="outline"
        size="lg"
        className=" cursor-target rounded-full border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/30 font-medium py-3"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        Contact Me
      </Button>
    </div>
  </div>

  {/* Right: Image with Glow */}
  <div
  className={`relative flex justify-center items-center transform transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  {/* Glow Background */}
  <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

  {/* Gradient Border */}
  <div className="relative p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-2xl hover:scale-105 transition-all duration-500">
    <div className="rounded-full bg-white dark:bg-black p-2">
      <img
        src="https://i.postimg.cc/HkSCXBqm/Ishaant-removebg-preview-(1).png"
        alt="Ishaant Singh"
       className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  </div>

  {/* Floating Badge */}
  <a
  href="https://www.linkedin.com/in/ishaant-singh-288b70291/"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-2 right-2 md:bottom-8 md:right-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-lg border border-purple-200 dark:border-purple-800 text-sm font-medium hover:scale-105 transition-all duration-300"
>
  🚀 Open to Opportunities
</a>
</div>
</div>


</section>
);
}
export default HeroSection;