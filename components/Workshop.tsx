import React, { useState } from 'react';
import Image from 'next/image';
import { X, Clock, Users, Calendar, MapPin, User, ChevronRight } from 'lucide-react';

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopType | null>(null);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdCdAfFXdFEfBCZibZZM29Rrb79zWqYIV4QoVQD6aooEXFPmQ/viewform";

  const workshops = [
    {
  id: 1,
  title: "From Scratch to Prediction: Building and Fine-Tuning AI Models",
  subtitle: "Session 1: Build an AI Model from Scratch, Fine-Tune, and Predict",
  instructor: "TECHBYHEART",
  duration: "3 hours",
  capacity: "100+ participants",
  date: "July 22, 2025",
  time: "2:00 PM - 5:00 PM",
  location: "CHMKM Arts and Science College, Tanur",
  actualPrice: "₹200",
  level: "Beginner",
  imageUrl: "/images/workshop/workshop2.jpg",
  description: "Learn the full lifecycle of building an AI model from the ground up. This hands-on session covers everything from data preprocessing to model deployment, ideal for beginners eager to explore real-world AI applications.",
  highlights: [
    "Understand the complete AI model development pipeline",
    "Hands-on model building and fine-tuning",
    "Use real-world datasets for practical learning",
    "Interactive Q&A and mentoring session",
    "Network with 100+ participants and industry mentors"
  ],
  prerequisites: [
    "Basic Python programming knowledge",
    "Familiarity with machine learning concepts is helpful but not mandatory",
    "Laptop with internet access and Python installed",
    "Interest in AI, data science, or model development"
  ],
  whatYouLearn: [
    "End-to-end AI model development workflow",
    "Build machine/deep learning models from scratch",
    "Fine-tune models to improve accuracy",
    "Implement prediction logic for unseen/test data",
    "Evaluate and validate your AI model effectively"
  ]
},

   {
  id: 2,
  title: "Business-Driven Data Analysis: Foundations for Data Science",
  subtitle: "Session 2: Introduction to Data Analysis from a Business Perspective",
  instructor: "TECHBYHEART",
  duration: "3 hours",
  capacity: "100+ participants",
  date: "July 23, 2025",
  time: "10:00 AM - 01:00 PM",
  location: "CHMKM Arts and Science College, Tanur",
  actualPrice: "₹200",
  level: "Beginner",
  imageUrl: "/images/workshop/workshop1.jpg",
  description: "Step into the world of business-focused data analysis. This beginner-friendly session helps participants understand how to extract, clean, and explore data to uncover insights that drive real-world business decisions. Learn how to interpret trends, visualize data, and communicate findings using Python-based tools.",
  highlights: [
    "Explore how businesses use data to solve real problems",
    "Hands-on analysis with real-world datasets",
    "Interactive demonstrations with EDA tools",
    "Learn to communicate data findings clearly and effectively",
    "Network with peers and industry practitioners"
  ],
  prerequisites: [
    "Basic familiarity with Python programming",
    "Interest in business, analysis, or data-driven decision-making",
    "Laptop with Python and required libraries installed",
    "No prior data science experience needed"
  ],
  whatYouLearn: [
    "The role of data analysis in business decision-making",
    "How to extract, clean, and explore datasets",
    "Perform exploratory data analysis (EDA)",
    "Visualize trends and insights using Pandas, Matplotlib, and Seaborn",
    "Present clear, data-driven insights to a non-technical audience"
  ]
}

  ];

  type WorkshopType = typeof workshops[number];

  const openModal = (workshop: WorkshopType) => {
    setSelectedWorkshop(workshop);
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
  };

  const handleRegistration = () => {
    // Open Google Form in a new tab
    window.open(googleFormUrl, '_blank');
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="workshops" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}  
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Professional Workshops
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on learning experiences with industry experts. Limited seats available.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center max-w-4xl mx-auto">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Workshop Image - Matched to Events Page */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-200 to-purple-200 overflow-hidden">
                <Image
                  src={workshop.imageUrl}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                      (img.nextSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-300 items-center justify-center text-white font-bold text-2xl hidden">
                  {workshop.title.split(' ').map(word => word[0]).join('')}
                </div>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(workshop.level)}`}>
                    {workshop.level}
                  </span>
                </div>
                
                {/* Price Badge with Discount */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex flex-col items-center">
                    <span className="text-indigo-600 font-bold text-sm">{workshop.actualPrice}</span>
                  </div>
                </div>
              </div>

              {/* Workshop Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                <p className="text-indigo-600 font-medium mb-3">{workshop.subtitle}</p>
                
                {/* Instructor */}
                <div className="flex items-center mb-4">
                  <User className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{workshop.instructor}</p>
                  </div>
                </div>

                {/* Workshop Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{workshop.capacity}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {workshop.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(workshop)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedWorkshop && (
          <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header - Fixed at top */}
              <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between z-20 relative">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedWorkshop.title}</h3>
                  <p className="text-indigo-600 font-medium">{selectedWorkshop.subtitle}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                  title="Close"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      {/* Workshop Image - Matched to Events Page */}
                      <div className="relative h-48 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl overflow-hidden mb-6">
                        <Image
                          src={selectedWorkshop.imageUrl}
                          alt={selectedWorkshop.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                            if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                              (img.nextSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-300 items-center justify-center text-white font-bold text-3xl hidden">
                          {selectedWorkshop.title.split(' ').map(word => word[0]).join('')}
                        </div>
                      </div>

                      {/* Workshop Details */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <User className="w-5 h-5 text-indigo-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-800">{selectedWorkshop.instructor}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
                          <span className="text-gray-700">{selectedWorkshop.date} | {selectedWorkshop.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                          <span className="text-gray-700">{selectedWorkshop.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-indigo-600 mr-3" />
                          <span className="text-gray-700">{selectedWorkshop.capacity}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-indigo-600 mr-3" />
                          <span className="text-gray-700">{selectedWorkshop.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <p className="text-gray-600 mb-6">{selectedWorkshop.description}</p>

                      {/* What You'll Learn */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">What You&apos;ll Learn:</h4>
                        <ul className="space-y-2">
                          {selectedWorkshop.whatYouLearn.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Workshop Highlights:</h4>
                        <ul className="space-y-2">
                          {selectedWorkshop.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prerequisites */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Prerequisites:</h4>
                        <ul className="space-y-2">
                          {selectedWorkshop.prerequisites.map((prerequisite, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{prerequisite}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between sm:justify-start sm:flex-1">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getLevelColor(selectedWorkshop.level)}`}>
                        {selectedWorkshop.level}
                      </span>
                      <div className="flex flex-col items-end sm:items-start sm:ml-4">
                        <span className="text-2xl font-bold text-indigo-600">{selectedWorkshop.actualPrice}</span>
                      </div>
                    </div>
                    <button 
                      onClick={handleRegistration}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}