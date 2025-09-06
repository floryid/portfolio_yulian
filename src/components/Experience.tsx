import React from 'react';
import { Calendar, MapPin, Cpu, Wrench, Shield, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2023–Present",
      role: "Senior Field Engineer",
      company: "PT. Intraco",
      location: "Genting Oil-Nagote, Teluk Bintuni",
      icon: Cpu,
      missions: [
        "Deploy & maintain oil field robotics system",
        "Debug mechanical failures in high-humidity jungle",
        "Survive agas attacks while maintaining 99% uptime",
        "Coordinate with HQ despite communication blackouts",
        "Lead recovery operations for underperforming assets"
      ],
      status: "ACTIVE"
    },
    {
      period: "2021–2023",
      role: "Mechanical Systems Engineer",
      company: "PT. Intraco",
      location: "Jakarta & Remote Sites",
      icon: Wrench,
      missions: [
        "Design and implement automated maintenance protocols",
        "Remote diagnostics and troubleshooting systems",
        "Field equipment optimization and upgrades",
        "Emergency response and rapid deployment specialist"
      ],
      status: "UPGRADE_COMPLETE"
    },
    {
      period: "2019–2021",
      role: "Junior Field Technician",
      company: "Energy Solutions Ltd",
      location: "Various Remote Sites",
      icon: Shield,
      missions: [
        "Equipment installation and commissioning",
        "Preventive maintenance scheduling and execution",
        "Training local teams on system operations",
        "Documentation and compliance reporting"
      ],
      status: "FOUNDATION_ESTABLISHED"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-neon-cyan glow-text mb-4">
            SYSTEM UPGRADE HISTORY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-electric-pink mx-auto mb-6"></div>
          <p className="text-terminal-gray font-mono text-lg">CHRONOLOGICAL_LOG: CAREER_EVOLUTION</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-electric-pink to-neon-cyan"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-neon-cyan rounded-full border-4 border-void-black group-hover:shadow-neon transition-all duration-300 z-10"></div>
                
                {/* Content Card */}
                <div className="ml-16 w-full">
                  <div className="bg-dark-metal/50 border border-neon-cyan/30 rounded-lg p-6 group-hover:border-neon-cyan group-hover:shadow-neon transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <exp.icon className="text-neon-cyan" size={24} />
                        <div>
                          <h3 className="text-xl font-orbitron font-bold text-soft-white group-hover:text-neon-cyan transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-electric-pink font-mono font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="bg-neon-cyan/10 text-neon-cyan px-3 py-1 rounded-full text-xs font-mono font-bold mb-2">
                          {exp.status}
                        </div>
                        <div className="text-terminal-gray font-mono text-sm flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="text-terminal-gray font-mono text-sm flex items-center mt-1">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Mission List */}
                    <div className="space-y-2">
                      <h4 className="text-neon-cyan font-mono font-semibold text-sm flex items-center mb-3">
                        <Zap size={16} className="mr-2" />
                        MISSION OBJECTIVES:
                      </h4>
                      <ul className="space-y-2">
                        {exp.missions.map((mission, missionIndex) => (
                          <li key={missionIndex} className="text-soft-white font-mono text-sm flex items-start">
                            <span className="text-neon-cyan mr-2 mt-1">▶</span>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-dark-metal/30 border border-neon-cyan/20 rounded-lg p-6 text-center group hover:border-neon-cyan transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-electric-pink mb-2">99%</div>
            <div className="text-terminal-gray font-mono text-sm">SYSTEM_UPTIME</div>
          </div>
          
          <div className="bg-dark-metal/30 border border-neon-cyan/20 rounded-lg p-6 text-center group hover:border-neon-cyan transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-neon-cyan mb-2">5+</div>
            <div className="text-terminal-gray font-mono text-sm">YEARS_DEPLOYED</div>
          </div>
          
          <div className="bg-dark-metal/30 border border-neon-cyan/20 rounded-lg p-6 text-center group hover:border-neon-cyan transition-all duration-300">
            <div className="text-3xl font-orbitron font-black text-electric-pink mb-2">∞</div>
            <div className="text-terminal-gray font-mono text-sm">AGAS_SURVIVED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;