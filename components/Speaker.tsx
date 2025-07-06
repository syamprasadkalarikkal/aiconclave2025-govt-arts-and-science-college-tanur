import React from 'react';
import Image from 'next/image';

export default function Speaker() {
  const speakers = [
    {
      id: 1,
      name: "Anitha K.R",
      title: "Robotics & Medical Device Innovator",
      description:
        "Founder & COO of PhiScape Robotics Pvt. Ltd., Anitha K.R is a trailblazer in healthcare innovation, advancing medical technologies through robotics and engineering excellence.",
      imageUrl: "/images/anitha.jpeg",
    },
    {
      id: 2,
      name: "Dr. Lajish V.L",
      title: "Associate Professor, University of Calicut",
      description:
        "Dr. Lajish is renowned for his expertise in Computational Intelligence and Indian Language Technology. His accolades include Tata Innovista and Dr. APJ Abdul Kalam Lifetime Achievement Award.",
      imageUrl: "/images/lajish.jpeg",
    },
    {
      id: 3,
      name: "Dr P Sarin IAAS",
      title: "Strategic Advisor Vijnana Keralam",
      description:
        "Dr. P Sarin IAAS is a seasoned bureaucrat with a strong focus on innovation and governance. He currently serves as the Strategic Advisor to Vijnana Keralam, Kerala's flagship science initiative. His work bridges public policy and technology to foster a knowledge-driven future.",
      imageUrl: "/images/sarin.jpeg",
    },
  ];

  return (
    <section id="speakers" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain insights from pioneers driving change in artificial intelligence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 max-w-sm w-full text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover rounded-full"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden text-white font-semibold text-xl items-center justify-center">
                    {speaker.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
              <p className="text-indigo-600 mt-1 mb-3">{speaker.title}</p>
              <p className="text-gray-600 text-sm">{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
