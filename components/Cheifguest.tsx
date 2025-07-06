import Image from 'next/image';

const chiefGuests = [
  {
    name: 'Dr. R Bindu',
    image: '/images/bindhu.jpg',
    description: 'Minister for Higher Education and Social Justice',
  },
  {
    name: 'Shri V. Abdurahiman',
    image: '/images/minister.jpg',
    description: 'Minister for Sports, Wakf and Haj',
  },
  {
    name: 'Dilip K Kainikkara IAS',
    image: '/images/dileep.jpeg',
    description: 'Sub Collector, Tirur',
  }
];

export default function ChiefGuests() {
  return (
    <section id="chief-guests" className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Chief Guests
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12"></div>

        {/* Show in row even on mobile */}
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {chiefGuests.map((guest, index) => (
            <div key={index} className="flex flex-col items-center max-w-[200px] text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl mb-4">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{guest.name}</p>
              <p className="text-gray-600 text-sm mt-1">{guest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
