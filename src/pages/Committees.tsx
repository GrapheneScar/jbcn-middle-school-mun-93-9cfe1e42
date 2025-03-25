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
      
      <div className="pt-28 sm:pt-32 md:pt-36 text-center container mx-auto px-4">
        <CommitteeHeader title="COMMITTEES" description="Explore our five diverse committees designed to provide middle school students with an enriching simulation of international diplomacy and historical events." />
        
        {/* Committee Overview Section */}
        <motion.div className="max-w-4xl mx-auto mb-16 glass-panel p-6 border border-mun-purple/20" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <p className="text-white/90 leading-relaxed text-sm">
            Our committees this year offer a diverse array of challenges and perspectives. From the tense deliberations of the Historic Korean War Summit, where delegates will find themselves at the heart of pivotal moments in history. To the rapid decision-making required in the Russian Federative Assembly's constant crisis. The Cabinet of India will transport the participants to a historical era, demanding sharp problem-solving and negotiation skills. Meanwhile, the future of international cooperation will be explored in COPUOS, where space governance and interstellar exploration will take center stage. In the General Assembly's DISEC committee, delegates will grapple with contemporary threats to global security, seeking creative solutions to ensure lasting peace.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <CommitteeList committees={committeesData} />
        </div>
        
        <CommitteeStructure />
      </div>
    </PageTransition>;
};
export default Committees;