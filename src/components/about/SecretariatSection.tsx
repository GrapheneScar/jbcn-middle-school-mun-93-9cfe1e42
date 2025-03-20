import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SecretariatMember } from './types';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface SecretariatSectionProps {
  secretariat: SecretariatMember[];
}
const SecretariatSection = ({
  secretariat
}: SecretariatSectionProps) => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const toggleExpanded = (name: string) => {
    setExpandedMember(prev => prev === name ? null : name);
  };
  return <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Our Team</span>
          <h2 className="text-3xl font-bold text-white">Secretariat</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            Meet our dedicated team of student leaders who organize and coordinate all aspects of JBCN Middle School MUN.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {secretariat.map(person => <motion.div key={person.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="flex flex-col">
              <div className="relative group overflow-hidden rounded-xl">
                <motion.div className="aspect-[3/4] cursor-pointer" whileHover={{
              scale: 1.05
            }} onClick={() => toggleExpanded(person.name)}>
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-300" />
                  
                  {/* Overlay that's always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                  
                  {/* Role and name - always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{person.name}</h3>
                    <p className="text-mun-purple-light">{person.role}</p>
                  </div>
                </motion.div>
                
                {/* Expand/Collapse button */}
                <motion.button onClick={() => toggleExpanded(person.name)} className="absolute bottom-2 right-2 w-8 h-8 bg-mun-purple/80 rounded-full flex items-center justify-center text-white" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                  {expandedMember === person.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </motion.button>
              </div>
              
              {/* Expandable bio section */}
              <AnimatePresence>
                {expandedMember === person.name && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }} className="glass-panel mt-2 p-4 overflow-hidden">
                    <p className="text-white/90 text-xs">{person.bio}</p>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default SecretariatSection;