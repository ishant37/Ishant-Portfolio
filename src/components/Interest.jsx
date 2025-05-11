import React, { useState, useEffect, useRef } from 'react';

const interests = [
  {
    title: 'Photography',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'I love capturing moments through my lens, exploring nature, people, and urban life, always aiming to tell a story with every shot.'
  },
  {
    title: 'Coding',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80',
    description: 'Building cool websites, apps, and solving problems with code is my passion. I enjoy learning new technologies and improving my skills.'
  },
  {
    title: 'Traveling',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    description: 'Exploring different cultures and landscapes broadens my perspective and inspires my creativity in both life and work.'
  },
  {
    title: 'Reading',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description: 'Immersing myself in books, from fiction to tech manuals, fuels my mind and relaxes my spirit, helping me grow personally and professionally.'
  }
];

const BASE_WIDTH = 300;
const AUTOPLAY_DELAY = 3000;

export default function InterestsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const carouselRef = useRef(null);

  // Autoplay effect
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // cleanup on unmount
  }, [currentIndex]);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % interests.length);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }

  function onMouseEnter() {
    stopAutoplay();
  }

  function onMouseLeave() {
    startAutoplay();
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row md:gap-10">
      {/* Left side */}
      <section
        aria-label="Currently selected interest description"
        className="flex flex-col justify-center flex-1 px-2 md:px-0"
      >
        <h1 className="text-3xl font-bold mb-6 border-l-6 border-blue-700 pl-4 text-gray-900">
          My Interests
        </h1>
        <div aria-live="polite" aria-atomic="true" role="region" className="min-h-[150px]">
          <h2 className="text-2xl font-extrabold text-blue-700 mb-4">
            {interests[currentIndex].title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {interests[currentIndex].description}
          </p>
        </div>
      </section>

      {/* Right side */}
      <section
        aria-label="Interest carousel"
        className="relative flex-none w-[320px] h-[390px] dark:bg-[hsl(var(--card))] rounded-lg shadow-lg overflow-hidden box-shadow: var(--shadow-md) select-none mt-8 md:mt-0"
      >
        <div
          ref={carouselRef}
          className="h-full w-full overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="flex h- transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (BASE_WIDTH + 20)}px)` }}
            aria-live="off"
          >
            {interests.map(({ title, img, description }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[310px] mx-2 rounded-lg shadow-md flex flex-col items-center justify-center p-5 text-blue-200 font-semibold text-center"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${interests.length}`}
              >
                <img
                  src={img}
                  alt={title}
                  className="max-w-[90%] max-h-[180px] object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
          role="tablist"
          aria-label="Carousel navigation dots"
        >
          {interests.map((_, idx) => (
            <button
              key={idx}
              className={`w-3.6 h-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                idx === currentIndex ? 'bg-blue-700 shadow-lg' : 'bg-gray-400'
              }`}
              aria-selected={idx === currentIndex}
              role="tab"
              tabIndex={idx === currentIndex ? 0 : -1}
              onClick={() => goToSlide(idx)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goToSlide(idx);
                }
              }}
              aria-controls="carousel"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

