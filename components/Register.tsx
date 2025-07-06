

export default function Register() {
  const handleRegisterClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdCdAfFXdFEfBCZibZZM29Rrb79zWqYIV4QoVQD6aooEXFPmQ/viewform',
      '_blank'
    );
  };

  return (
    <section
      id="register"
      className="py-24 px-4 text-white relative overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: "url('/images/IMG-20250620-WA0110.jpg')",
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
            Join Kerala’s premier AI conference and connect with industry leaders, researchers, and innovators.
          </p>
          <p className="text-lg text-indigo-200 font-medium">
             Early bird pricing ends soon
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Student */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Student Offer
            </div>
            <div className="text-5xl font-bold text-green-300 mb-2">₹200</div>
            <div className="text-black text-lg mb-6">Students & Academics</div>
            <div className="text-left text-gray-200 space-y-3">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-black">Full conference access</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-black">Networking sessions</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-black">Certificate of participation</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-black">Student ID required</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-black"> Food and Accommodation Provided</span>
              </div>
            </div>
          </div>

          {/* Professional */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Others
            </div>
            <div className="text-5xl font-bold text-purple-300 mb-2">₹300</div>
            <div className="text-black text-lg mb-6">All Others</div>
            <div className="text-left text-black space-y-3">
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-black">Full conference access</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-black">Networking sessions</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-black">Certificate of Participation</span>
              </div>
               <div className="flex items-center">
                <span className="text-purple-400 mr-3">✓</span>
                <span className="text-black">Food will be Provided</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-red-400">Ready to Join?</h3>
          <p className="text-black mb-8 text-lg">
            Click below to access our registration form and secure your spot at Kerala’s most anticipated AI conference.
          </p>

          <button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
          >
            Register Now
          </button>

          <p className="text-sm text-black mt-6">
            Registration closes 24 hours before the event • Payment details will be provided in the form
          </p>
        </div>

        {/* Info icons */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Student Friendly</h4>
            <p className="text-gray-300">Special pricing for students and academic community</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Networking</h4>
            <p>Connect with industry leaders and researchers</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📜</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Certification</h4>
            <p className="text-gray-300">Receive official certificate of participation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
