import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { committeeHeads } from '../components/committees/committee-heads-data';
import DepartmentSection from '../components/committees/DepartmentSection';
import StripeBackground from '../components/StripeBackground';
import { motion } from 'framer-motion';
const DepartmentHeads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageTransition>
      <StripeBackground />
      
      <div className="pt-32 pb-12 container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        type: "tween"
      }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Meet The Team</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Department Heads
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Meet the talented individuals who lead the various departments of the JBCN Middle School MUN, ensuring a smooth and enriching experience for all delegates.
          </p>
        </motion.div>
        
        {/* Visual Separator */}
        <div className="relative flex items-center justify-center my-10">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-mun-purple/50 to-transparent"></div>
          <div className="bg-mun-purple w-8 h-8 rounded-full flex items-center justify-center z-10">
            <div className="bg-black w-4 h-4 rounded-full"></div>
          </div>
        </div>
        
        {/* Introduction Card */}
        <motion.div className="glass-panel p-8 max-w-4xl mx-auto mb-16 border border-mun-purple/20" initial={{
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-mun-purple/30">
                <img src="/lovable-uploads/logo.png" alt="JBCN MUN Logo" className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-mun-purple/10"></div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-xl font-bold text-white mb-4">Collaboration Across Departments</h2>
              <p className="text-white/80 mb-3">
                Our department heads work together to create a cohesive and immersive MUN experience. Each department plays a vital role in the overall success of the conference, from social media outreach to press coverage, photography, and technical support.
              </p>
              <p className="text-white/80">
                Through their dedication and expertise, these talented individuals ensure that JBCN Middle School MUN remains a premier educational experience for young diplomats in training.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Department Sections */}
        <div className="max-w-6xl mx-auto">
          {committeeHeads.map((department, index) => <DepartmentSection key={department.name} department={department} index={index} />)}
        </div>
      </div>
    </PageTransition>;
};
export default DepartmentHeads;