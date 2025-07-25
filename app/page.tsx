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
        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl relative overflow-hidden border "
        style={{
          backgroundImage: `url('/images/skyford.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-black hover:bg-opacity-30 z-10 transition-all duration-200"
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Popup content */}
        <div className="p-6 text-white">
          <div className="text-center">
            
            <p className="text-sm mb-4 text-black leading-relaxed">
              Premier aviation services & training programs
            </p>
            
            <div className="flex items-center justify-center">
              <a
                href="https://www.skyfordaviation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                <span className="text-sm mr-2">Visit Website</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
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
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after initial page load delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Optional: Keep the original announcement logic if needed
  useEffect(() => {
    // Check if user has seen the announcement in this session
    const hasSeenInSession = sessionStorage?.getItem('aiConclave2025AnnouncementSeen');
    
    if (!hasSeenInSession && typeof window !== 'undefined') {
      setShowAnnouncement(true);
    }
  }, []);

  // Alternative logic: Show popup when announcement is closed
  useEffect(() => {
    if (!showAnnouncement && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAnnouncement]);

  const closePopup = () => {
    setShowPopup(false);
    // Optional: Set a flag to prevent showing again in this session
    if (typeof window !== 'undefined') {
      sessionStorage?.setItem('skyfordPopupSeen', 'true');
    }
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
