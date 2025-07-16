import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchText, setGlitchText] = useState('404');

  useEffect(() => {
    setIsVisible(true);
    
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['4', '0', '4', '█', '▓', '▒', '░'];
      const randomText = Array.from({ length: 3 }, () => 
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      
      setGlitchText(randomText);
      
      setTimeout(() => setGlitchText('404'), 100);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const suggestions = [
    { text: 'Home', path: '/', icon: Home },
    { text: 'Portfolio', path: '/portfolio', icon: Search },
    { text: 'Blog', path: '/blog', icon: RefreshCw },
    { text: 'Contact', path: '/contact', icon: ArrowLeft }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className={`text-center max-w-2xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        
        {/* 404 Text with glitch effect */}
        <div className="mb-8">
          <h1 
            className="text-8xl md:text-9xl font-bold mb-4 font-mono tracking-wider"
            style={{ 
              color: "var(--color-accent)",
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
            }}
          >
            {glitchText}
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Error message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-heading)" }}>
            Oops! Page Not Found
          </h2>
          <p className="text-lg opacity-80 mb-6">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers get lost sometimes!
          </p>
          <div className="text-sm opacity-60">
            <p>Error Code: <span className="font-mono text-accent">PAGE_NOT_FOUND</span></p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/"
            className="group flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white"
            }}
          >
            <Home size={20} />
            Take Me Home
            <div className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">
              <ArrowLeft size={16} className="rotate-180" />
            </div>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "var(--color-text)"
            }}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Quick navigation */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 opacity-80">Or explore these pages:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {suggestions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="group p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <IconComponent 
                    size={24} 
                    className="mx-auto mb-2 group-hover:text-accent transition-colors duration-300" 
                  />
                  <p className="text-sm font-medium">{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Fun fact */}
        <div 
          className="p-4 rounded-lg text-sm opacity-70"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <p className="mb-2">💡 <strong>Fun Fact:</strong></p>
          <p>
            The HTTP 404 error was named after room 404 at CERN, where the original web servers were located. 
            When a file couldn't be found, it was "404" - not found in room 404!
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce animation-delay-1000">
        <div className="w-8 h-8 border-2 border-accent rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-bounce animation-delay-3000">
        <div className="w-6 h-6 bg-accent rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-5 opacity-20 animate-pulse">
        <div className="w-4 h-4 border border-accent transform rotate-45"></div>
      </div>
    </div>
  );
}