
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { motion } from 'framer-motion';

// Update the import paths to match your project structure
const DelegatePreparation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      <div className="pt-32 pb-20 px-4 container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Delegate Preparation</h1>
            <p className="text-white/80 mb-8">
              Preparing for a Model United Nations conference requires thorough research, 
              practice, and understanding of the committee procedures. Here are some 
              resources to help you prepare for JBCN Middle School MUN 2025.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Preparation Timeline</h2>
            
            <div className="glass-panel p-6 text-left">
              <div className="relative border-l-2 border-mun-purple ml-6 pb-6">
                {/* Timeline items */}
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">4 Weeks Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Research your assigned country's position on the committee topic</li>
                    <li>Read the study guide thoroughly</li>
                    <li>Research the committee's history and mandate</li>
                    <li>Begin forming your country's stance on the issue</li>
                  </ul>
                </div>
                
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">2-3 Weeks Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Write your position paper</li>
                    <li>Research potential allies in the committee</li>
                    <li>Practice parliamentary procedure</li>
                    <li>Prepare your opening speech</li>
                  </ul>
                </div>
                
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">1 Week Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Refine your opening speech</li>
                    <li>Practice delivering speeches within time limits</li>
                    <li>Review the Rules of Procedure</li>
                    <li>Research potential solutions to propose during the conference</li>
                  </ul>
                </div>
                
                <div className="ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">4</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Day Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Prepare your materials and clothing</li>
                    <li>Review your research one more time</li>
                    <li>Get a good night's sleep</li>
                    <li>Check that you have printed all necessary documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Tips for First-Time Delegates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Research Thoroughly</h3>
                <p className="text-white/80">
                  Make sure you understand your country's position, the committee topic, and the 
                  UN's previous actions on the issue. The more you know, the more confident you'll feel.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Speak Up</h3>
                <p className="text-white/80">
                  Even if you're nervous, challenge yourself to speak at least once per session. 
                  The more you participate, the more comfortable you'll become.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Procedure</h3>
                <p className="text-white/80">
                  Pay attention to the flow of debate. Understanding when to make motions or 
                  when to speak is crucial to effective participation.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Collaborate</h3>
                <p className="text-white/80">
                  MUN is about diplomacy. Work with other delegates during unmoderated caucuses 
                  to form alliances and draft resolutions together.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Essential Resources</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a 
                href="#" 
                className="px-6 py-3 bg-mun-purple text-white rounded-full hover:bg-mun-purple-light transition-colors"
              >
                Rules of Procedure
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-mun-purple text-white rounded-full hover:bg-mun-purple-light transition-colors"
              >
                Position Paper Template
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-mun-purple text-white rounded-full hover:bg-mun-purple-light transition-colors"
              >
                Resolution Format Guide
              </a>
            </div>
            
            <p className="text-white/70 italic">
              All delegates will receive detailed study guides for their specific committees after registration.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DelegatePreparation;
