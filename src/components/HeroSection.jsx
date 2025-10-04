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
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div
          className="absolute bottom-10 left-[15%] w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-light"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto my-24 px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
  {/* Left: Text Content */}
  <div
    className={`space-y-6 transform transition-all duration-700 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } max-w-xl`}
  >
    <div className="w-full flex justify-center md:justify-start">
      <h1 className="text-4xl md:text-6xl font-bold gradient-heading mb-3 text-center md:text-left">
        <BlurText text="Hello, I'm Ishaant" className="text-purple-700 dark:text-purple-400" />
      </h1>
    </div>

    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
      <RotatingText
        texts={['Fullstack-Developer', 'Designer', 'Creator']}
        mainClassName="px-2 sm:px-2 md:px-3 dark:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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

    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-8">
      I build beautiful, responsive web applications with modern technologies.
      Passionate about creating intuitive user experiences and clean, efficient code.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      {/* <TargetCursor
        
      /> */}
      
     <Button
              size="lg"
              variant="primary"
              className="cursor-target bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium"
              onClick={() => {
                const link = document.createElement("a");
                link.href ="./Ishant_resume.pdf";
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
  <div className="relative mt-10 md:mt-0">
    <div className="w-74 h-70 rounded-full relative overflow-hidden shadow-xl shadow-purple-300 dark:shadow-purple-800 animate-glow-border">
        <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
      <img
        src="https://i.postimg.cc/zGm9r5Cm/Whats-App-Image-2025-01-28-at-22-42-40-26a643c6.jpg" // Replace with your image path
        alt="Ishaant"
        className="w-full h-full object-cover rounded-full"
        
      />
      </GlareHover>
      <div className="absolute inset-0 rounded-full ring-4 ring-purple-400/40 animate-pulse-glow" />
    </div>
  </div>
</div>


</section>
);
}
export default HeroSection;