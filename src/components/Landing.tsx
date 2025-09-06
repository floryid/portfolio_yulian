import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Landing: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCta, setShowCta] = useState(false);
  
  const heroText = "ENGINEER OF THE ALL PROJECTS";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < heroText.length) {
        setDisplayText(heroText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCta(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6">
            <span className="text-soft-white">YULIAN</span>
            <br />
            <span className="text-neon-cyan glow-text">PADENG</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-mono text-terminal-gray typewriter">
              {displayText}
              <span className="animate-pulse text-neon-cyan">|</span>
            </p>
          </div>
        </div>

        {showCta && (
          <div className="animate-fade-in">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-neon-cyan to-neon-cyan/80 text-void-black px-8 py-4 rounded-lg font-mono font-bold text-lg hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              ACCESS PORTFOLIO →
              <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </button>
            
            <div className="mt-12 animate-bounce">
              <ChevronDown className="mx-auto text-neon-cyan" size={32} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;