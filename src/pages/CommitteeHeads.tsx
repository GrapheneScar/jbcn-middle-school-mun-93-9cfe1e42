
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import DepartmentSection from '../components/committees/DepartmentSection';
import { committeeHeads } from '../components/committees/committee-heads-data';
import { motion } from 'framer-motion';
import EasterEggAnimation from '../components/committees/EasterEggAnimation';

const DepartmentHeads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeEasterEgg, setActiveEasterEgg] = useState<string | null>(null);

  // Listen for easter egg events
  useEffect(() => {
    const handleEasterEgg = (e: any) => {
      const { title } = e.detail;
      setActiveEasterEgg(title);

      // Automatically hide easter egg after 8 seconds
      setTimeout(() => {
        setActiveEasterEgg(null);
      }, 8000);
    };
    window.addEventListener('easterEggTriggered', handleEasterEgg);
    return () => {
      window.removeEventListener('easterEggTriggered', handleEasterEgg);
    };
  }, []);
  
  return (
    <PageTransition>
      <StripeBackground />
      
      <div className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Team</span>
            <h1 className="text-5xl font-bold text-white mb-6">Department Heads</h1>
            <p className="text-white/80 max-w-3xl mx-auto">
              Meet the talented individuals who lead our specialized departments and help make JBCN Middle School MUN a success.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {committeeHeads.map((department, index) => (
              <DepartmentSection key={department.name} department={department} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Add the easter egg animation component */}
      <EasterEggAnimation activeEasterEgg={activeEasterEgg} />
    </PageTransition>
  );
};

export default DepartmentHeads;
