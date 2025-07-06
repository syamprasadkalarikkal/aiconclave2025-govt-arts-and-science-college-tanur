import {  Calendar, Users, MapPin } from "lucide-react";
export default function About() {
    return(<section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About the Conclave
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The premier AI conference in Kerala, bringing together visionaries, researchers, and innovators 
              to shape the future of artificial intelligence in education, healthcare, and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">1000+ Participants</h3>
              <p className="text-gray-600">
                Students, professionals, and researchers from leading institutions across Kerala and beyond.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">2 Days Event</h3>
              <p className="text-gray-600">
                Intensive program featuring keynotes, workshops, panel discussions, and networking sessions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <button
                onClick={() => window.open("https://maps.app.goo.gl/CQR949izgUDWp9Rc6", "_blank")}
                className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 hover:scale-105 transition-transform"
                aria-label="Open location in Google Maps"
              >
                <MapPin className="w-8 h-8 text-white" />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Venue</h3>
              <p className="text-gray-600">
                CHMKM Govt Arts and Science College, Tanur, Malappuram, Kerala 676302
              </p>
            </div>

          </div>
        </div>
      </section>)
}