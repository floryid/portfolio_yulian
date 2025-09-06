import React from 'react';
import { User, MapPin, Briefcase, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Mechanical Design', level: 90 },
    { name: 'Field Troubleshooting', level: 95 },
    { name: 'Automation & Robotics', level: 85 },
    { name: 'Remote System Debug', level: 88 },
    { name: 'Surviving Agas & Minus 30% Project', level: 100 }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-neon-cyan glow-text mb-4">
            ROBOT CORE: IDENTITY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-electric-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Yulian Padeng" 
                className="w-full h-96 object-cover filter contrast-125 brightness-90"
              />
              
              {/* Cyber Scan Lines */}
              <div className="absolute inset-0 scan-lines opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* HUD Overlay */}
              <div className="absolute top-4 left-4 text-neon-cyan font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>SCAN_MODE: ACTIVE</div>
                <div>STATUS: ENGINEER_IDENTIFIED</div>
                <div>THREAT_LEVEL: FRIENDLY</div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            {/* System Log */}
            <div className="bg-dark-metal/50 border border-neon-cyan/30 rounded-lg p-6 font-mono">
              <div className="text-neon-cyan mb-4 flex items-center">
                <User className="mr-2" size={20} />
                SYSTEM LOG
              </div>
              <div className="space-y-2 text-soft-white">
                <div><span className="text-terminal-gray">NAME:</span> YULIAN PADENG</div>
                <div><span className="text-terminal-gray">ROLE:</span> FIELD ENGINEER | BLANKET ENTHUSIAST | PROBLEM SOLVER</div>
                <div><span className="text-terminal-gray">BASE:</span> PT. INTRACO — GENTING OIL-NAGOTE, BINTUNI</div>
                <div><span className="text-terminal-gray">MISSION:</span> <span className="text-electric-pink">BUILD. FIX. OPTIMIZE. SURVIVE.</span></div>
              </div>
            </div>

            {/* Mission Brief */}
            <div className="bg-void-black/50 border border-electric-pink/30 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-electric-pink mb-3">CORE DIRECTIVES</h3>
              <p className="text-soft-white leading-relaxed">
                Deep in the jungles of Papua Barat, where agas attack and communication delays are measured in weeks, 
                I engineer solutions that work. When Pak Gunawan says "wes ta bilangi 2 minggu lalu," I make it happen. 
                Specializing in mechanical systems, robotics integration, and turning impossible projects into 100% success rates.
              </p>
            </div>

            {/* Skills Energy Core */}
            <div className="space-y-4">
              <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4 flex items-center">
                <Zap className="mr-2" size={20} />
                ENERGY CORE STATUS
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-soft-white">{skill.name}</span>
                    <span className="text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-metal/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-neon-cyan to-electric-pink h-2 rounded-full transition-all duration-1000 glow-cyan"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;