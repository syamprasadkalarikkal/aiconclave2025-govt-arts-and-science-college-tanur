import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const PosterSlider = () => {
  
  const posters = [
    "/images/events/cover.jpg",
    "/images/workshop/WORKSHOP 1.jpg",
    "/images/workshop/WORKSHOP 2.jpg",
    "/images/events/trea.jpg",
    "/images/events/ESC.jpg",
    "/images/events/pubg.jpg",
    "/images/events/EF.jpg",
    "/images/events/FIREFREE.jpg",
    "/images/events/IDEA.jpg",
    "/images/events/debu.jpg",
    "/images/events/typin.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % posters.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, posters.length]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + posters.length) % posters.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index:number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePosterClick = () => {
    window.location.href = '/events';
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(147, 51, 234, 0.1) 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Event Highlights</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the essence of our program through these visual highlights
        </p>
      </div>

      {/* Main Slider */}
      <div className="container mx-auto px-4">
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="relative aspect-[1152/500] w-full">
              <div
                className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {posters.map((poster, index) => (
                  <div 
                    key={index} 
                    className="relative w-full flex-shrink-0 h-full cursor-pointer group"
                    onClick={handlePosterClick}
                  >
                    <Image
                      src={poster}
                      alt={`Event poster ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm z-10"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm z-10"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 shadow-lg transform scale-125'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/4 right-20 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-10 animate-pulse delay-500"></div>
    </section>
  );
};

export default PosterSlider;