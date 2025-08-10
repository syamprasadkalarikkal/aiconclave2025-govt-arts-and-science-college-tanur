"use client";
import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Home } from 'lucide-react';

interface Event {
  id: number;
  date: string;
  time: string;
  location: string;
  description: string;
 
  image: string;
  category: string;
  price: string;
  prize: string;
  rules: string[];
}

// Footer component placeholder
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2025 AI Conclave. All rights reserved.</p>
    </div>
  </footer>
);

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      date: "July 28, 2025",
      time: "11:00 AM",
      location: "annouced later",
      description: "Pitch your groundbreaking startup idea in 3 minutes to a panel of judges.Creativity and clarity win the game!",
      
      image: "/events/IDEA.jpg",
      category: "Competition",
      price: "₹200",
      prize: "₹2000 for the winning team",
      rules: [
        "Max 3 members per team",
        "3 minutes to pitch + 2 minutes Q&A",
        "PPT optional"
      ]
    },
    {
      id: 2,
      date: "July 29, 2025",
      time: "09:00 AM",
      location: "Entire Campus",
      description: "Solve clues and race against time to uncover hidden treasures around the campus. Team up for fun!",
     
      image: "/events/trea.jpg",
      category: "Entertainment",
      price: "₹200",
      prize: " ₹3000",
      rules: [
        "Teams of 2-4",
        "All clues must be solved in sequence",
        "Mobile phones allowed"
      ]
    },
    {
      id: 3,
      date: "July 28, 2025",
      time: "4:30 PM ",
      location: "anounced later",
      description: "Trapped in a themed room! Solve puzzles, unlock clues, and escape before time runs out. 15 min per group.",
      
      image: "/events/ESC.jpg",
      category: "Adventure",
      price: "₹200",
      prize: "Fastest escape team wins ₹3000",
      rules: [
        "Groups of 4",
        "No use of phones",
        "Time limit: 15 mins"
      ]
    },
    {
      id: 4,
      date: "July 29, 2025",
      time: "11:30 Am",
      location: "Computer Lab ",
      description: "Compete to show off your typing speed and accuracy! Bring your keyboard skills to the next level.",
      
      image: "/events/typin.jpg",
      category: "Technical",
      price: "₹50",
      prize: "Winner gets ₹1000 cash + certificate",
      rules: [
        "Individual event",
        "No external tools or macros",
        "Over 4 error = disqualification"
      ]
    },
    {
      id: 5,
      date: "July 28, 2025",
      time: "11:00 AM ",
      location: "Computer Lab",
      description: "Fix bugs in tricky C programs in record time. The fastest and cleanest code wins!",
      
      image: "/events/debu.jpg",
      category: "Technical",
      price: "₹50",
      prize: "  Winner gets ₹1000 cash + certificate",
      rules: [
        "Individual event",
        "C only",
        "Laptops provided"
      ]
    },
    {
      id: 6,
      date: "July 29, 2025",
      time: "12:00 PM ",
      location: "Anouced later",
      description: "Play competitive FIFA matches on PS5! Show off your dribbling, passing, and scoring skills.",
      
      image: "/events/EF.jpg",
      category: "Gaming",
      price: "₹50",
      prize: "Champions wins ₹1000 ",
      rules: [
        "1v1 knockout format",
        "Match duration: 5–6 minutes per half",
        "All participants must have a mobile device that supports eFootball 2024",
        "No cheating or Glitches allowed"

      ]
    },
    {
      id: 7,
      date: "July 28, 2025",
      time: "12:00 PM",
      location: "Anounced later",
      description: "Form your squad and drop into the battleground. Only one squad will survive and win the prize!",
      
      image: "/events/pubg.jpg",
      category: "Gaming",
      price: "₹200",
      prize: "₹1000 for winning squad",
      rules: [
        "4 members per squad",
        "TDM mode",
        "All players must use their own PUBG Mobile accounts and devices",
        "No cheating or hacks allowed"

      ]
    },
    {
      id: 8,
      date: "July 29, 2025",
      time: "11:30 AM",
      location: "anounced later",
      description: "Step into the ultimate battleground with your squad in this intense 4v4 Free Fire Room Knockout Tournament!",
      
      image: "/events/FIREFREE.jpg",
      category: "Adventure",
      price: "₹200",
      prize: " ₹1000 for winning squad",
      rules: [
        "Groups of 4",
        "All participants must have a mobile device that supports Free Fire",
        "No cheating or hacks allowed",
        "knockout format"
        
      ]
    },
  ];

  const handleBackToHome = () => {
    window.history.back();
  };

  

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Entertainment: 'bg-pink-100 text-pink-800',
      Competition: 'bg-teal-100 text-teal-800',
      Adventure: 'bg-orange-100 text-orange-800',
      Technical: 'bg-purple-100 text-purple-800',
      Gaming: 'bg-blue-100 text-blue-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              title="Back to Home"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Home className="w-5 h-5" />
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">AI Conclave Events</h1>
              <p className="text-gray-600 mt-2">Discover all our exciting tech & gaming events</p>
            </div>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
              {/* Event Header with Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-0 pb-[43.4%] relative">
                  <img
                    src={`/images/${event.image}`}
                    alt={`${event.category} event`}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)} bg-white`}>
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details - Flexible content area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-indigo-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-indigo-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-indigo-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-semibold">Prize:</span> {event.prize}
                </p>
                
                <div className="text-gray-700 text-sm mb-4">
                  <span className="font-semibold">Rules:</span>
                  <ul className="mt-1 ml-4">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="text-sm leading-relaxed">
                        • {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-gray-700 font-bold text-sm mb-4 flex-grow">
                  {event.description}
                </p>

                {/* Price and Registration - Always at bottom */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">
                      {event.price}
                    </div>
                    <button
                      
                      className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                    >
                      <span>Registeration closed</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      
    </div>
  );
}