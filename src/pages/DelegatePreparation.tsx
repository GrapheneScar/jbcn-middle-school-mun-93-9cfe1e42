
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { FileText, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            
            <div className="glass-panel p-8 mt-6 bg-gradient-to-br from-mun-purple/20 to-transparent border border-mun-purple/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <BookOpen className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Rules of Procedure</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Master the rules that govern debate in all committees</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <FileText className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Document Templates</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Examples of position papers, resolutions, and more</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <Users className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Committee Guides</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Detailed guides for each committee topic</p>
                </div>
              </div>
              
              <Link to="/resources">
                <Button className="bg-mun-purple hover:bg-mun-purple-light transition-colors">
                  <span>Access All Delegate Resources</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <p className="text-white/70 italic mt-4">
                All delegates will receive detailed study guides for their specific committees after registration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DelegatePreparation;
