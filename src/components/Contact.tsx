import React, { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Easter Egg
    if (value.toLowerCase().includes('wes ta bilangi')) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-neon-cyan glow-text mb-4">
            ESTABLISH CONNECTION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-electric-pink mx-auto mb-6"></div>
          <p className="text-terminal-gray font-mono text-lg">INITIATE_COMMUNICATION_PROTOCOL</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <div className="space-y-8">
            <div className="bg-dark-metal/50 border border-neon-cyan/30 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-electric-pink mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-neon-cyan mr-2"></div>
                <span className="text-terminal-gray font-mono text-sm">CONNECT_WITH_ROBOT_CORE: YULIAN</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-neon-cyan font-mono text-sm mb-2">
                    &gt; ENTER NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-void-black border border-neon-cyan/30 rounded px-4 py-3 text-soft-white font-mono focus:border-neon-cyan focus:shadow-neon outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-neon-cyan font-mono text-sm mb-2">
                    &gt; ENTER EMAIL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-void-black border border-neon-cyan/30 rounded px-4 py-3 text-soft-white font-mono focus:border-neon-cyan focus:shadow-neon outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-neon-cyan font-mono text-sm mb-2">
                    &gt; ENTER MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-void-black border border-neon-cyan/30 rounded px-4 py-3 text-soft-white font-mono focus:border-neon-cyan focus:shadow-neon outline-none transition-all duration-300 resize-none"
                    placeholder="Pak Gunawan wes ta bilangi..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-cyan/80 text-void-black px-6 py-3 rounded-lg font-mono font-bold hover:shadow-neon transition-all duration-300 flex items-center justify-center group"
                >
                  [SEND_MESSAGE]
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </form>
            </div>

            {/* Easter Egg */}
            {showEasterEgg && (
              <div className="bg-electric-pink/10 border border-electric-pink/50 rounded-lg p-4 animate-pulse">
                <div className="text-electric-pink font-mono text-sm">
                  <strong>SYSTEM ALERT:</strong> Message delivered to HQ. Pak Gunawan will respond... eventually. 😄
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-dark-metal/30 border border-neon-cyan/20 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4">DIRECT_ACCESS</h3>
              
              <div className="space-y-3">
                <a href="mailto:yulian.padeng@intraco.co.id" className="flex items-center text-soft-white hover:text-neon-cyan transition-colors duration-300 font-mono">
                  <Mail className="mr-3 text-neon-cyan" size={20} />
                  yulian.padeng@intraco.co.id
                </a>
                
                <a href="tel:+6281234567890" className="flex items-center text-soft-white hover:text-neon-cyan transition-colors duration-300 font-mono">
                  <Phone className="mr-3 text-neon-cyan" size={20} />
                  +62 812-3456-7890
                </a>
                
                <a href="https://linkedin.com/in/yulianpadeng" className="flex items-center text-soft-white hover:text-neon-cyan transition-colors duration-300 font-mono">
                  <Linkedin className="mr-3 text-neon-cyan" size={20} />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Location Status */}
            <div className="bg-dark-metal/30 border border-neon-cyan/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4">CURRENT_LOCATION</h3>
              <div className="font-mono text-soft-white space-y-2">
                <div><span className="text-terminal-gray">BASE:</span> Genting Oil-Nagote</div>
                <div><span className="text-terminal-gray">REGION:</span> Teluk Bintuni, Papua Barat</div>
                <div><span className="text-terminal-gray">STATUS:</span> <span className="text-electric-pink">ACTIVE_DEPLOYMENT</span></div>
                <div><span className="text-terminal-gray">RESPONSE_TIME:</span> Variable (agas attacks pending)</div>
              </div>
            </div>

            {/* Download CV */}
            <button className="w-full bg-gradient-to-r from-electric-pink/20 to-neon-cyan/20 border border-electric-pink/30 text-electric-pink hover:bg-electric-pink/30 hover:text-void-black px-6 py-4 rounded-lg font-mono font-bold transition-all duration-300 flex items-center justify-center group">
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              DOWNLOAD ROBOT PATCH (CV/RESUME)
            </button>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg md:text-xl font-exo text-neon-cyan italic leading-relaxed">
              "In the depths of Papua's jungle, where communication signals die and agas rule the night, 
              engineering solutions emerge from the darkness. This is where robots and humans unite."
            </blockquote>
            <div className="text-terminal-gray font-mono text-sm mt-4">
              — YULIAN PADENG, Engineer of the Dark Robot Era
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;