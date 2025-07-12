export default function Register() {
  const handleStudentRegisterClick = () => {
    window.open(
      'https://forms.gle/hJK46LUDqCv85NFX6',
      '_blank'
    );
  };

  const handleOthersRegisterClick = () => {
    window.open(
      'https://forms.gle/hJK46LUDqCv85NFX6',
      '_blank'
    );
  };

  const handleFreeRegisterClick = () => {
    window.open(
      'https://forms.gle/hJK46LUDqCv85NFX6',
      '_blank'
    );
  };

  return (
    <section
      id="register"
      className="py-24 px-4 text-white relative overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/events/ai.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 opacity-90"></div>

      {/* Animated BG Blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Conference Registration
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join Kerala&apos;s premier AI conference and connect with industry leaders, researchers, and innovators.
          </p>

          <p className="text-lg text-indigo-200 font-medium">
             Choose your registration tier
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Student */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Student Offer
            </div>
            <div className="text-5xl font-bold text-green-300 mb-2">₹200</div>
            <div className="text-gray-800 text-lg mb-6 font-medium">Students</div>
            <div className="text-left text-gray-200 space-y-3 mb-8 flex-grow">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-600">Full conference access</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-600">Attend any ONE workshop</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-600">Visit all other programs</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-600">Food & accommodation provided</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-600">Certificate of participation</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">📋</span>
                <span className="text-yellow-300">Student ID required</span>
              </div>
            </div>
            
            <button
              onClick={handleStudentRegisterClick}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 mt-auto"
            >
              Register as Student
            </button>
          </div>

          {/* Professional */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Others
            </div>
            <div className="text-5xl font-bold text-purple-300 mb-2">₹300</div>
            <div className="text-gray-800 text-lg mb-6 font-medium">All Others</div>
            <div className="text-left text-gray-200 space-y-3 mb-8 flex-grow">
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-600">Full conference access</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-600">Attend any ONE workshop</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-600">Visit all other programs</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-600">Food & accommodation provided</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-gray-600">Certificate of participation</span>
              </div>
            </div>
            
            <button
              onClick={handleOthersRegisterClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 mt-auto"
            >
              Register as Professional
            </button>
          </div>

          {/* Free */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-105 flex flex-col">
            <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Free Entry
            </div>
            <div className="text-5xl font-bold text-cyan-300 mb-2">FREE</div>
            <div className="text-gray-800 text-lg mb-6 font-medium">Basic Access</div>
            <div className="text-left text-gray-200 space-y-3 mb-8 flex-grow">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-gray-600">Exhibition access</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-gray-600">Cultural events access</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">✓</span>
                <span className="text-gray-600">Networking sessions</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-3">✗</span>
                <span className="text-gray-400">No food & accommodation</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-3">✗</span>
                <span className="text-gray-400">No workshop access</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-3">✗</span>
                <span className="text-gray-400">No certificate</span>
              </div>
            </div>
            
            <button
              onClick={handleFreeRegisterClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50 mt-auto"
            >
              Register for Free
            </button>
          </div>
        </div>

        {/* Info icons */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Student Friendly</h4>
            <p className="text-gray-300">Special pricing for students with full benefits</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Workshops</h4>
            <p className="text-gray-300">Hands-on learning with industry experts</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎪</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Free Programs</h4>
            <p className="text-gray-300">Exhibition and cultural events open to all</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 mb-2">
              <span className="text-yellow-400">⏰</span> Registration closes 24 hours before the event
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-green-400">💳</span> Payment details will be provided in the registration form
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}