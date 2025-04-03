import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import CommitteeHeader from '../components/committees/CommitteeHeader';
import CommitteeList from '../components/committees/CommitteeList';
import CommitteeStructure from '../components/committees/CommitteeStructure';
import { committeesData } from '../components/committees/committees-data';
import { motion } from 'framer-motion';
const Committees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageTransition>
      <StripeBackground />
      
      <div className="pt-28 sm:pt-32 md:pt-36 container mx-auto px-4">
        <CommitteeHeader title="COMMITTEES" description="Explore our five diverse committees designed to provide middle school students with an enriching simulation of international diplomacy and historical events." />
        
        {/* Enhanced Committee Overview Section */}
        <motion.div className="max-w-4xl mx-auto mb-16 overflow-hidden" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2,
        type: "tween"
      }}>
          <div className="glass-panel p-8 border border-mun-purple/20 relative">
            {/* Purple gradient accents */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
            
            <h3 className="font-bold text-white mb-4 relative z-10 text-center text-2xl">Committees Overview</h3>
            
            <div className="relative z-10 space-y-4 text-white/90 leading-relaxed">
              <p className="text-center text-sm">
                Our committees this year offer a diverse array of challenges and perspectives. Delegates will engage in diplomatic simulation that spans history, crisis management, and future-oriented policy making.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-black/30 p-4 rounded-lg border border-mun-purple/20">
                  <h4 className="font-bold text-mun-purple-light mb-2 text-base text-center">Historical Perspectives</h4>
                  <p className="text-xs">
                    From the tense deliberations of the <strong>Historic Korean War Summit</strong>, delegates will find themselves at pivotal moments in history where their decisions shape the future. The <strong>Cabinet of India</strong> will transport participants to a historical era, demanding sharp problem-solving skills.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border border-mun-purple/20">
                  <h4 className="font-bold text-mun-purple-light mb-2 text-base text-center">Crisis Management</h4>
                  <p className="text-xs">
                    The rapid decision-making required in the <strong>Russian Federative Assembly</strong> will test delegates' ability to respond to constant crisis scenarios, challenging their diplomacy and conflict resolution abilities.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border border-mun-purple/20">
                  <h4 className="font-bold text-mun-purple-light mb-2 text-base text-center">Future Exploration</h4>
                  <p className="text-xs">
                    The future of international cooperation will be explored in <strong>COPUOS</strong>, where space governance and interstellar exploration take center stage, encouraging delegates to think beyond traditional boundaries.
                  </p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg border border-mun-purple/20">
                  <h4 className="font-bold text-mun-purple-light mb-2 text-base text-center">Global Security</h4>
                  <p className="text-xs">
                    In the General Assembly's <strong>DISEC committee</strong>, delegates will grapple with contemporary threats to global security, seeking creative solutions to ensure lasting peace through international cooperation.
                  </p>
                </div>
              </div>
              
              <p className="italic text-white/70 text-sm mt-4">
                Each committee has been carefully designed to provide an educational and engaging experience, encouraging critical thinking, public speaking, and collaborative problem-solving.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <CommitteeList committees={committeesData} />
        </div>
        
        <CommitteeStructure />
      </div>
    </PageTransition>;
};
export default Committees;