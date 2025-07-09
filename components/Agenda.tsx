import { Calendar } from "lucide-react";

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-indigo-600" />
              Day 1 - July 22, 2025
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="text-indigo-600 font-bold min-w-0 flex-shrink-0">09:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Registration & Welcome</h4>
                  <p className="text-gray-600 text-sm">Coffee to start the day</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-bold min-w-0 flex-shrink-0">10:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Opening Ceremony</h4>
                  <p className="text-gray-600 text-sm">	Inspiring speeches to kick off the event</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-600 font-bold min-w-0 flex-shrink-0">11:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Debugging</h4>
                  <p className="text-gray-600 text-sm">	C Language challenge for sharp minds</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-600 font-bold min-w-0 flex-shrink-0">11:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Idea Pitching</h4>
                  <p className="text-gray-600 text-sm">	Showcase your creative tech concepts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold min-w-0 flex-shrink-0">12:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Panel Discussion</h4>
                  <p className="text-gray-600 text-sm">Role of AI in combating fake news and deepfakes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-bold min-w-0 flex-shrink-0">12:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">PUBG</h4>
                  <p className="text-gray-600 text-sm">Mobile gaming showdown begins</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                <div className="text-gray-600 font-bold min-w-0 flex-shrink-0">01:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lunch Break</h4>
                  <p className="text-gray-600 text-sm">Networking lunch with fellow attendees</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="text-indigo-600 font-bold min-w-0 flex-shrink-0">02:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Workshop</h4>
                  <p className="text-gray-600 text-sm">Introduction to Machine Learning</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-600 font-bold min-w-0 flex-shrink-0">02:30 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Panel Discussion</h4>
                  <p className="text-gray-600 text-sm">Chalkboard to Chatbot</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold min-w-0 flex-shrink-0">05:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cultural Program</h4>
                  <p className="text-gray-600 text-sm">Entertainment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                <div className="text-gray-600 font-bold min-w-0 flex-shrink-0">07:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dinner</h4>
                  <p className="text-gray-600 text-sm">Biriyani</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-purple-600" />
              Day 2 - July 23, 2025
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-600 font-bold min-w-0 flex-shrink-0">08:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Breakfast</h4>
                  <p className="text-gray-600 text-sm">tea time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-bold min-w-0 flex-shrink-0">09:00 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Treasure Hunt</h4>
                  <p className="text-gray-600 text-sm">	Solve clues & race to the finish</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-600 font-bold min-w-0 flex-shrink-0">10:30 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Panel Discussion</h4>
                  <p className="text-gray-600 text-sm">	Future and Ethics of AI</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold min-w-0 flex-shrink-0">10:30 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Workshop</h4>
                  <p className="text-gray-600 text-sm">Exploritary Data Analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                <div className="text-red-600 font-bold min-w-0 flex-shrink-0">11:30 AM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Speed Typing</h4>
                  <p className="text-gray-600 text-sm">Showcase your lighting fast typing skill</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-600 font-bold min-w-0 flex-shrink-0">12:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">E Football</h4>
                  <p className="text-gray-600 text-sm">Competitive matches on console</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="text-indigo-600 font-bold min-w-0 flex-shrink-0">12:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Project Expo</h4>
                  <p className="text-gray-600 text-sm">Interactive demonstrations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-600 font-bold min-w-0 flex-shrink-0">01:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lunch </h4>
                  <p className="text-gray-600 text-sm">Final networking opportunity</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-50 rounded-lg">
                <div className="text-green-600 font-bold min-w-0 flex-shrink-0">02:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Closing Ceremony</h4>
                  <p className="text-gray-600 text-sm">Awards & next steps</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-600 font-bold min-w-0 flex-shrink-0">04:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mystical Celebration</h4>
                  <p className="text-gray-600 text-sm">let&rsquo;s have a fun</p>

                </div>
              </div>
               <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-bold min-w-0 flex-shrink-0">06:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Flag Off</h4>
                  <p className="text-gray-600 text-sm">👋</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}