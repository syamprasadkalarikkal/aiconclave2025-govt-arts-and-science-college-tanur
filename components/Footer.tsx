export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Grid: 2 columns on mobile, 3 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Conclave </h3>
                <p className="text-gray-400 text-sm">2025</p>
              </div>
            </div>
            <p className="text-gray-400">
              Empowering the future with artificial intelligence through
              education, innovation, and collaboration.
            </p>
          </div>

          {/* Event Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Event Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>July 22-23, 2025</li>
              <li>CHMKM Govt Arts and Science College, Tanur</li>
              <li>Malappuram, Kerala</li>
              <li>1000+ Participants</li>
              <li>2 Days of Innovation</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>aiconclave25@gmail.com</li>
              <li>+91 8089852217</li>
              <li>CHMKM Govt Arts and Science College, Tanur</li>
              <li>Malappuram, Kerala</li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AI Conclave Kerala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
