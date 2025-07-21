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

// Announcement Modal Component
const AnnouncementModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close announcement"
        >
          ×
        </button>
        
        {/* Modal content */}
        <div className="p-6 pr-12">
          <div className="text-center">
            {/* Round profile image */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/vs.avif"
                alt="Shri V. S. Achuthanandan"
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-300 shadow-lg"
              />
            </div>
            
            <h2 className="text-xl font-bold text-red-600 mb-4">
              IMPORTANT ANNOUNCEMENT
            </h2>
            
            <div className="text-gray-800 leading-relaxed">
              
              <p className="mb-4">
                <span className="font-bold">Due to the demise of former Chief Minister of Kerala, Shri V. S. Achuthanandan, the AI Conclave 2025 scheduled at CHMKM Govt. College, Tanur, has been rescheduled as a mark of respect.</span>
              </p>
              
              <div className="mb-4">
                <p className="font-semibold text-blue-700 mb-1">
                  🗓️ New Dates: July 28 & 29, 2025
                </p>
                <p className="font-semibold text-green-700 mb-3">
                  📍 Venue: Govt College, Tanur
                </p>
              </div>
              
              <p className="text-gray-700 italic">
                We express our deepest condolences and appreciate your understanding.
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Continue to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Popup Advertisement Component
const SkyfordPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm w-full mx-4">
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
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen the announcement in this session
    const hasSeenInSession = sessionStorage.getItem('aiConclave2025AnnouncementSeen');
    
    if (!hasSeenInSession) {
      setShowAnnouncement(true);
    } else {
      // If announcement was already seen in this session, show Skyford popup after delay
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Show Skyford popup after announcement is closed and a delay
    if (!showAnnouncement) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000); // 2 second delay after announcement is closed

      return () => clearTimeout(timer);
    }
  }, [showAnnouncement]);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);
    // Mark announcement as seen in this session only
    sessionStorage.setItem('aiConclave2025AnnouncementSeen', 'true');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Announcement Modal - appears first */}
      <AnnouncementModal isOpen={showAnnouncement} onClose={closeAnnouncement} />
      
      {/* Main website content - always visible unless announcement is showing */}
      {!showAnnouncement && (
        <>
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
        </>
      )}
    </main>
  );
}