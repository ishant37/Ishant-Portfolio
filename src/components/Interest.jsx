import React, { useState, useEffect, useRef } from 'react';
import CardSwap, { Card } from './Animations/CardSwap';

const interests = [
  {
    title: 'Photography',
    
    description:
      'I love capturing moments through my lens, exploring nature, people, and urban life, always aiming to tell a story with every shot.',
  },
  {
    title: 'Coding',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80',
    description:
      'Building cool websites, apps, and solving problems with code is my passion. I enjoy learning new technologies and improving my skills.',
  },
  {
    title: 'Reading',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description:
      'Immersing myself in books, from fiction to tech manuals, fuels my mind and relaxes my spirit, helping me grow personally and professionally.',
  },
];

const AUTOPLAY_DELAY = 4000;

export default function InterestsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // cleanup on unmount
  }, []);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interests.length);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }

  return (
    <section
      id="interests"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-center gap-12"
    >
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white relative inline-block">
          <span className="border-l-4 border-blue-700 pl-4">My Interests</span>
        </h2>
        <div aria-live="polite" aria-atomic="true" role="region" className="min-h-[140px]">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            {interests[currentIndex].title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {interests[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Right: Carousel */}
      <div
        className="w-full md:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] relative"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <CardSwap cardDistance={40} verticalDistance={70} delay={5000} pauseOnHover={false}>
          <Card>
            <img
              src="https://i.postimg.cc/6psLjPBp/Whats-App-Image-2025-07-30-at-12-37-01-112b8c10.jpg"
              alt="Card 1"
              className="rounded-xl w-full h-full object-cover shadow-lg transition-transform hover:scale-105"
            />
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Card 2"
              className="rounded-xl w-full h-full object-cover shadow-lg transition-transform hover:scale-105"
            />
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80"
              alt="Card 3"
              className="rounded-xl w-full h-full object-cover shadow-lg transition-transform hover:scale-105"
            />
          </Card>
        </CardSwap>
      </div>
    </section>
  );
}
