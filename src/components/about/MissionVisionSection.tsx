
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MissionVisionSection = () => {
  const skillItems = [
    "Research and Analysis Skills",
    "Public Speaking and Debate",
    "Consensus Building",
    "Global Awareness"
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        {/* Main headline and description */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">ABOUT US</h2>
          <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Founded with a vision to nurture young diplomatic minds, JBCN Parel MUN creates a platform 
            for middle school students to engage with global issues and develop crucial skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Mission */}
          <div className="relative px-8 py-10">
            <div className="absolute -inset-2 bg-black/30 rounded-xl -z-10"></div>
            
            <div className="inline-block px-5 py-2 bg-mun-purple rounded-full text-white text-sm font-medium mb-4">
              Our Mission
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Cultivating Tomorrow's Leaders
            </h3>
            
            <div className="space-y-4 text-white/80">
              <p>
                JBCN Parel MUN is dedicated to creating an educational environment where young students can experience 
                the dynamics of international relations and diplomacy through simulation.
              </p>
              
              <p>
                Our conference aims to foster critical thinking, public speaking, leadership, and problem-solving skills 
                in middle school students, preparing them to be informed global citizens.
              </p>
              
              <ul className="space-y-3 mt-6">
                {skillItems.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center mr-2">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column: What is Model UN? */}
          <div className="relative px-8 py-10">
            <div className="absolute -inset-2 bg-[#121218] rounded-xl -z-10"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              What is Model UN?
            </h3>
            
            <div className="space-y-5 text-white/80">
              <p>
                Model United Nations (MUN) is an educational simulation where students learn about 
                diplomacy, international relations, and the United Nations.
              </p>
              
              <p>
                Participants assume the role of delegates representing different countries and debate 
                real-world issues, following parliamentary procedures similar to those used in actual 
                UN committees.
              </p>
              
              <p>
                Through research, drafting, public speaking, and negotiation, students develop a deeper 
                understanding of global challenges and the complexities of solving them through 
                international cooperation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
