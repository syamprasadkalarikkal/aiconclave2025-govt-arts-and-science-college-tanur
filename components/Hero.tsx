import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-22T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scrolls smoothly to the section with the given selector
  function scrollToSection(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/ai-updated.jpg')",
      }}
    >
      {/* Top Right Logos - Professional Layout */}
      <div className="absolute top-14 right-4 sm:top-16 sm:right-6 md:top-18 md:right-8 z-20">
        <div className="flex flex-col items-end gap-2">
          {/* Top row - RESA and CHMKM logos */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Logo 1 - 1.5cm size */}
            <div className="flex-shrink-0 bg-white rounded-lg shadow-sm">
              <Image 
                src="/images/resa.png" 
                alt="RESA Logo" 
                width={64}
                height={64}
                className="h-14 w-14 object-contain p-1"
                priority
              />
            </div>
            
            {/* Logo 2 - 1.5cm size */}
            <div className="flex-shrink-0 bg-white rounded-lg shadow-sm">
              <Image 
                src="/images/chmkm.png" 
                alt="CHMKM Logo" 
                width={64}
                height={64}
                className="h-14 w-14 object-contain p-1"
                priority
              />
            </div>
          </div>
          
          {/* Bottom row - TechByHeart Logo spanning width of both above */}
          <div className="flex-shrink-0 bg-white rounded-lg shadow-sm">
            <Image 
              src="/images/inassoc.png" 
              alt="TechByHeart Logo" 
              width={200}
              height={200}
              className="h-16 object-contain p-1"
              style={{ width: 'calc(3.5rem + 3.5rem + 0.75rem)' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 flex items-end justify-center min-h-screen relative z-10">
        <div className="text-center max-w-4xl pb-2 mb-2 w-full px-2 sm:px-4">
          {/* Countdown Timer */}
          <div className="mb-12">
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-4 rounded-2xl mb-6 border border-white border-opacity-30">
              <div className="text-sm font-medium mb-2 text-black">Event Starts In</div>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.days}</div>
                  <div className="text-xs text-black">Days</div>
                </div>
                <div className="text-2xl font-bold text-white self-center">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-black">Hours</div>
                </div>
                <div className="text-2xl font-bold text-white self-center">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-black">Minutes</div>
                </div>
                <div className="text-2xl font-bold text-white self-center">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-black">Seconds</div>
                </div>
              </div>
              <div className="text-xs text-black mt-2">July 22, 2025 • Kerala, India</div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            AI Conclave
            <span className="block text-3xl sm:text-4xl md:text-6xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Kerala 2025
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 text-white max-w-2xl mx-auto bold">
            Empowering the Future with Artificial Intelligence - Where Innovation Meets Intelligence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <button
              onClick={() => scrollToSection('#register')}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Register Now - Early Bird
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}