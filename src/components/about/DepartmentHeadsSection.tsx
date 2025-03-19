
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { DepartmentHead } from './types';

interface DepartmentHeadsSectionProps {
  departmentHeads: DepartmentHead[];
  activeEasterEgg: string | null;
  setActiveEasterEgg: (role: string | null) => void;
}

const DepartmentHeadsSection = ({ 
  departmentHeads, 
  activeEasterEgg, 
  setActiveEasterEgg 
}: DepartmentHeadsSectionProps) => {
  const { toast } = useToast();

  const handleEasterEgg = (role: string, easterEgg: any) => {
    setActiveEasterEgg(role);
    
    setTimeout(() => {
      setActiveEasterEgg(null);
    }, 3000);
    
    // Show different toast based on role
    if (role === "Head of Social Media") {
      const randomHashtag = easterEgg.content[Math.floor(Math.random() * easterEgg.content.length)];
      toast({
        title: "Trending Now!",
        description: randomHashtag,
        duration: 3000,
      });
    } else if (role === "Head of Website Design") {
      toast({
        title: "Website Glitch Detected",
        description: easterEgg.content,
        duration: 3000,
      });
    } else if (role === "Head of Press") {
      const randomNews = easterEgg.content[Math.floor(Math.random() * easterEgg.content.length)];
      toast({
        title: "BREAKING NEWS",
        description: randomNews,
        duration: 3000,
      });
    } else if (role === "Head of Photography") {
      toast({
        title: "Photo Captured!",
        description: "A moment preserved for MUN history.",
        duration: 3000,
      });
    } else if (role === "Head of Illustration") {
      toast({
        title: "Artistic Inspiration!",
        description: "A masterpiece in the making.",
        duration: 3000,
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-black/30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">MUN Support</span>
          <h2 className="text-3xl font-bold text-white">Department Heads</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            These talented individuals lead specialized teams that support all aspects of our conference.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {departmentHeads.map((person, index) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div 
                className="glass-panel p-6 text-center hover:shadow-[0_0_15px_rgba(121,83,169,0.3)] transition-all duration-300 flex-grow cursor-pointer relative overflow-hidden"
                onClick={() => handleEasterEgg(person.role, person.easterEgg)}
              >
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                <p className="text-mun-purple-light text-sm mb-4">{person.role}</p>
                <p className="text-white/80 text-sm">{person.bio}</p>
                
                <div className="absolute bottom-2 right-2">
                  <div className="text-xs text-white/40 italic">Click for surprise</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentHeadsSection;
