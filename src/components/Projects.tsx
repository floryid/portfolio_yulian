import React from 'react';
import { ExternalLink, Shield, Zap, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "MISSION: BLANKET & NAGOTE 3 — MINUS 30% RECOVERY",
      description: "Led mechanical recovery in remote Papua terrain. Coordinated with HQ despite comms delay (Pak Gunawan, wes ta bilangi 2 minggu lalu 😅). Result: Progress rebound +45% in 3 weeks.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["#OilField", "#RecoveryMode", "#RobotAssist"],
      icon: Shield,
      status: "MISSION_COMPLETE"
    },
    {
      id: 2,
      title: "OPERATION: GENTING AUTOMATION UPGRADE",
      description: "Integrated robotic systems for oil extraction optimization. Debugged mechanical failures in 90% humidity while being attacked by 37 agas. System restored in 2 hours. No robots were harmed (except my dignity).",
      image: "https://images.pexels.com/photos/162568/pexels-photo-162568.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["#Automation", "#FieldWork", "#SurvivalMode"],
      icon: Zap,
      status: "OPERATIONAL"
    },
    {
      id: 3,
      title: "PROJECT: REMOTE DIAGNOSTIC SYSTEM",
      description: "Built telemetry system for real-time equipment monitoring across Bintuni region. Features: Agas-resistant sensors, flood-proof housing, and emergency communication protocols for when Pak Gunawan's phone is unreachable.",
      image: "https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["#IoT", "#RemoteMonitoring", "#JungleTech"],
      icon: Wrench,
      status: "ACTIVE"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-neon-cyan glow-text mb-4">
            MISSION LOGS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-electric-pink mx-auto mb-6"></div>
          <p className="text-terminal-gray font-mono text-lg">CLASSIFIED: ACCESS_LEVEL_ENGINEER</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-dark-metal/50 border border-neon-cyan/30 rounded-lg overflow-hidden hover:border-neon-cyan hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-neon-cyan text-void-black px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {project.status}
                </div>

                {/* Scan Effect */}
                <div className="absolute inset-0 thermal-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Classified Stamp */}
                <div className="absolute top-4 left-4 text-electric-pink font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  [CLASSIFIED]
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <project.icon className="text-neon-cyan mt-1 flex-shrink-0" size={24} />
                  <div className="ml-3 flex-grow">
                    <h3 className="text-lg font-orbitron font-bold text-soft-white group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-terminal-gray text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-neon-cyan/20 to-electric-pink/20 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/30 hover:text-void-black px-4 py-2 rounded-lg font-mono font-bold text-sm transition-all duration-300 flex items-center justify-center group">
                  VIEW TECH SPECS
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-16">
          <p className="text-terminal-gray font-mono text-sm italic">
            "When the impossible becomes routine, you know you're dealing with an engineer."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;