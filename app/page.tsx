"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Speaker from "@/components/Speaker";
import Agenda from "@/components/Agenda";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Workshop from "@/components/Workshop";
import PosterSlider from "@/components/PosterSlider";
import ChiefGuests from "@/components/Cheifguest";

// Popup Advertisement Component
const SkyfordPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full mx-4">
      <div 
        className="bg-white rounded-lg shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/skyford.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-black hover:bg-opacity-20 z-10"
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Popup content */}
        <div className="p-4 text-white">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">
              Skyford Aviation
            </h3>
            <p className="text-sm mb-4 text-gray-100">
              Premier aviation services & training programs
            </p>
            
            <div className="flex items-center justify-center">
              <a
                href="https://www.skyfordaviation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-200"
              >
                <span className="text-sm font-semibold mr-2">Visit Website</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <PosterSlider />
      <About />
      <ChiefGuests />
      <Speaker />
      <Agenda />
      <Workshop />
      <Register />
      <Contact />
      <Footer />
      
      {/* Skyford Aviation Popup */}
      <SkyfordPopup isOpen={showPopup} onClose={closePopup} />
    </main>
  );
}