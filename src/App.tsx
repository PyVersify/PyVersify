import React, { useState, useEffect } from 'react';
import { Code2, Users, MessageCircle, ChevronRight, Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative bg-[#4584b6] text-white overflow-hidden">
      <div className="relative">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img className="h-14 w-14 my-10" src="https://github.com/PyVersify/PyVersify/blob/main/assets/img/logo.png?raw=true" alt="Logo" />
              <div className="flex items-center space-x-0.5">
                <span className="tracking-tight text-4xl">py</span>
                <span className="tracking-tight text-4xl font-bold">versify</span>
              </div>            
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#community" className="relative group py-2">
                <span className="relative z-10 hover:text-[#ffde57] transition-colors duration-200">Community</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffde57] transition-all duration-200 group-hover:w-full"></div>
              </a>
              <a href="#resources" className="relative group py-2">
                <span className="relative z-10 hover:text-[#ffde57] transition-colors duration-200">Resources</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffde57] transition-all duration-200 group-hover:w-full"></div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn & Grow with Python
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join our supportive community of Python developers. Get help, share knowledge, and build amazing things together.
            </p>
            <button className="bg-[#4584b6] hover:bg-[#3a719b] text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transform transition hover:scale-105">
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <Users className="h-12 w-12 text-[#4584b6] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Active Community</h3>
                <p className="text-gray-600">Connect with Python enthusiasts from around the world.</p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-200 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <MessageCircle className="h-12 w-12 text-[#4584b6] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-600">Get help from experienced Python developers.</p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-400 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <Code2 className="h-12 w-12 text-[#4584b6] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Learning Resources</h3>
                <p className="text-gray-600">Access curated tutorials and learning materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4584b6] py-20">
        <div className="container mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-white/80 mb-8">Start your Python journey with us today!</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-[#ffde57] hover:bg-[#ffd633] text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transform transition hover:scale-105">
                <Github className="h-5 w-5" />
                <span>Join via GitHub</span>
              </button>
              <button className='bg-[#ffde57] hover:bg-[#ffd633] text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transform transition hover:scale-105'>
                <FaDiscord className="h-5 w-5" />
                <span>Join our Discord</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <img className="h-8 w-8" src="https://github.com/PyVersify/PyVersify/blob/main/assets/img/logo.png?raw=true" alt="Logo" />
              <div className="flex items-center space-x-0.5">
                <span className="text-xl">py</span>
                <span className="text-xl font-bold">versify</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#ffde57] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#ffde57] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#ffde57] transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PyVersify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;