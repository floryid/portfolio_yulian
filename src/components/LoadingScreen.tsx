import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    '> INITIALIZING...',
    '> WELCOME, USER.',
    '> ENGINEER PROFILE LOADING: YULIAN PADENG',
    '> SPECIALTY: MECHANICAL / FIELD ENGINEERING',
    '> LOCATION: GENTING OIL-NAGOTE, BINTUNI — PAPUA BARAT',
    '> STATUS: ONLINE — READY FOR MISSION'
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    
    const typeText = () => {
      if (textIndex < loadingTexts.length) {
        const text = loadingTexts[textIndex];
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, 50);
        } else {
          setTimeout(() => {
            textIndex++;
            charIndex = 0;
            if (textIndex < loadingTexts.length) {
              setTimeout(typeText, 300);
            }
          }, 500);
        }
      }
    };

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    typeText();

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-void-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Radar Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>

        {/* Terminal Window */}
        <div className="bg-dark-metal border border-neon-cyan/30 rounded-lg p-8 max-w-2xl mx-4 relative">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 rounded-full bg-electric-pink mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-neon-cyan mr-2"></div>
            <span className="text-terminal-gray font-mono text-sm">SYSTEM_BOOT.exe</span>
          </div>

          <div className="text-left space-y-2 mb-8 h-48">
            <div className="font-mono text-neon-cyan typewriter">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-dark-metal/50 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-neon-cyan to-electric-pink h-2 rounded-full transition-all duration-300 glow-cyan"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-center font-mono text-terminal-gray">
            LOADING: {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;