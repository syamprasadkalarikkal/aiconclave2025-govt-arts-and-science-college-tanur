import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  const handleCall = (phoneNumber: string) => {
    
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Email Us</h3>
            <a
              href="mailto:aiconclave25@gmail.com"
              className="text-gray-600 hover:text-indigo-600 block mb-2 transition-colors"
            >
              aiconclave25@gmail.com
            </a>
            <a
              href="mailto:resastudentsunion24@gmail.com"
              className="text-gray-600 hover:text-indigo-600 block transition-colors"
            >
              resastudentsunion24@gmail.com
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Call Us</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleCall('+919633655563')}
                className="text-gray-600 hover:text-indigo-600 block w-full text-center transition-colors duration-200 hover:bg-indigo-50 py-2 px-4 rounded-lg"
              >
                +91 96336 55563
              </button>
              <button
                onClick={() => handleCall('+918089852217')}
                className="text-gray-600 hover:text-indigo-600 block w-full text-center transition-colors duration-200 hover:bg-indigo-50 py-2 px-4 rounded-lg"
              >
                +91 80898 52217
              </button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <button
              onClick={() => window.open("https://maps.app.goo.gl/CQR949izgUDWp9Rc6", "_blank")}
              className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-105 transition-transform"
              aria-label="Open location in Google Maps"
            >
              <MapPin className="w-8 h-8 text-white" />
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Visit Us</h3>
            <p className="text-gray-600">CHMKM Govt Arts and Science College, Tanur</p>
            <p className="text-gray-600">Malappuram, Kerala 676302</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
               onClick={() => window.open("https://www.instagram.com/ai_conclave25?igsh=MWVmMDJkMnhtbmEwZQ==", "_blank")}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h3>
            <p className="text-gray-600 group-hover:text-pink-600 transition-colors">@ai_conclave25</p>
          </div>

        </div>
      </div>
    </section>
  );
}