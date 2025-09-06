import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'landing', label: 'SYSTEM BOOT' },
    { id: 'about', label: 'ROBOT CORE' },
    { id: 'projects', label: 'MISSION LOGS' },
    { id: 'experience', label: 'UPGRADES' },
    { id: 'contact', label: 'CONNECT' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-void-black/80 backdrop-blur-md border-b border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-orbitron font-bold text-xl text-neon-cyan glow-text">
              YP.exe
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-sm transition-all duration-300 hover:text-neon-cyan hover:glow-text ${
                    currentSection === item.id ? 'text-neon-cyan glow-text' : 'text-terminal-gray'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neon-cyan hover:text-electric-pink transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-metal border-t border-neon-cyan/20">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-mono text-sm transition-all duration-300 hover:text-neon-cyan ${
                    currentSection === item.id ? 'text-neon-cyan' : 'text-terminal-gray'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;