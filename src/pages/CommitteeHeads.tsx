
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Separator } from '@/components/ui/separator';
import TeamPhoto from '../components/committees/TeamPhoto';
import DepartmentSection from '../components/committees/DepartmentSection';
import { committeeHeads } from '../components/committees/committee-heads-data';

const CommitteeHeads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-12 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center" 
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              Committee Heads
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-mun-purple mx-auto mb-8" 
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: 80,
                  transition: { duration: 0.8, delay: 0.3 }
                }
              }} 
            />
            
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-12" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              Meet our dedicated team of committee heads who work tirelessly to make JBCN Parel MUN an enriching experience for all delegates.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-20">
        <TeamPhoto />
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 mb-20" />
        
        {committeeHeads.map((department, index) => (
          <div key={department.name}>
            <DepartmentSection department={department} index={index} />
            {index < committeeHeads.length - 1 && (
              <Separator className="max-w-xs mx-auto bg-mun-purple/30 mb-20" />
            )}
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default CommitteeHeads;
