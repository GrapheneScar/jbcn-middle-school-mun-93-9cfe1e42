
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column - Our Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-mun-purple mb-6 text-white text-sm">Our Mission</div>
            <h2 className="text-3xl font-bold text-white mb-4">Cultivating Tomorrow's Leaders</h2>
            
            <p className="text-white/80 mb-6">
              JBCN Parel MUN is dedicated to creating an educational environment where young students can experience the dynamics of international relations and diplomacy through simulation.
            </p>
            
            <p className="text-white/80 mb-6">
              Our conference aims to foster critical thinking, public speaking, leadership, and problem-solving skills in middle school students, preparing them to be informed global citizens.
            </p>
            
            <div className="space-y-3 mt-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-white/90">Research and Analysis Skills</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-white/90">Public Speaking and Debate</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-white/90">Consensus Building</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-white/90">Global Awareness</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - What is Model UN */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">What is Model UN?</h2>
            
            <p className="text-white/80 mb-6">
              Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international relations, and the United Nations.
            </p>
            
            <p className="text-white/80 mb-6">
              Participants assume the role of delegates representing different countries and debate real-world issues, following parliamentary procedures similar to those used in actual UN committees.
            </p>
            
            <p className="text-white/80">
              Through research, drafting, public speaking, and negotiation, students develop a deeper understanding of global challenges and the complexities of solving them through international cooperation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
