
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">Cultivating Tomorrow's Leaders</h2>
            </div>
            
            <div className="glass-panel p-8 rounded-xl border border-mun-purple/30 text-white/90">
              <p className="mb-6">
                JBCN Parel MUN is dedicated to creating an educational environment where young students can experience the dynamics of international relations and diplomacy through simulation.
              </p>
              
              <p className="mb-8">
                Our conference aims to foster critical thinking, public speaking, leadership, and problem-solving skills in middle school students, preparing them to be informed global citizens.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-mun-purple/30 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-mun-purple-light" />
                  </div>
                  <span>Research and Analysis Skills</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-mun-purple/30 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-mun-purple-light" />
                  </div>
                  <span>Public Speaking and Debate</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-mun-purple/30 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-mun-purple-light" />
                  </div>
                  <span>Consensus Building</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-mun-purple/30 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-mun-purple-light" />
                  </div>
                  <span>Global Awareness</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">What is Model UN?</h2>
            </div>
            
            <div className="glass-panel p-8 rounded-xl border border-mun-purple/30 text-white/90">
              <p className="mb-6">
                Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international relations, and the United Nations.
              </p>
              
              <p className="mb-6">
                Participants assume the role of delegates representing different countries and debate real-world issues, following parliamentary procedures similar to those used in actual UN committees.
              </p>
              
              <p>
                Through research, drafting, public speaking, and negotiation, students develop a deeper understanding of global challenges and the complexities of solving them through international cooperation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
