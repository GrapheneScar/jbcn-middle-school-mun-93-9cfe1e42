
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Separator } from '@/components/ui/separator';
import TeamPhoto from '../components/committees/TeamPhoto';
import DepartmentSection from '../components/committees/DepartmentSection';
import { committeeHeads } from '../components/committees/committee-heads-data';
import EasterEggAnimation from '../components/committees/EasterEggAnimation';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const CommitteeHeads = () => {
  const [activeEasterEgg, setActiveEasterEgg] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set up easter egg handling
  useEffect(() => {
    const handleEasterEggTrigger = (event: CustomEvent) => {
      setActiveEasterEgg(event.detail.department);
      
      // Random messages for each department
      const easterEggMessages = {
        "Social Media": [
          "Trending Now! #JBCNMUN2025 is taking over!",
          "Going viral! Your MUN journey starts here!",
          "Social media buzz alert! #DiplomacyMatters"
        ],
        "Website Design": [
          "Code glitch detected... just kidding!",
          "Website Easter Egg unlocked! Well done!",
          "You found the hidden feature! Developer high-five!"
        ],
        "Press": [
          "BREAKING: Delegate discovers secret MUN feature!",
          "JUST IN: Press team captures perfect diplomatic moment!",
          "EXCLUSIVE: The story behind the committee leadership!"
        ],
        "Photography": [
          "Snapshot taken! Your diplomatic journey documented!",
          "Perfect shot! Conference memories preserved!",
          "Photo mode activated! Say 'diplomacy'!"
        ],
        "Illustration": [
          "Artistic inspiration unlocked!",
          "Your diplomatic portrait is being sketched!",
          "Creative vision activated! MUN in color!"
        ],
        "Organizing Committee": [
          "Behind the scenes: Conference planning revealed!",
          "Organizing magic happening!",
          "MUN logistics: Making diplomacy possible!"
        ]
      };

      // Display toast message
      if (event.detail.department in easterEggMessages) {
        const messages = easterEggMessages[event.detail.department as keyof typeof easterEggMessages];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        toast({
          title: "Easter Egg Found!",
          description: randomMessage,
          duration: 3000
        });
      }
      
      // Hide the easter egg animation after 4 seconds
      setTimeout(() => {
        setActiveEasterEgg(null);
      }, 4000);
    };

    // Listen for custom easter egg event
    window.addEventListener('easterEggTriggered' as any, handleEasterEggTrigger);
    
    return () => {
      window.removeEventListener('easterEggTriggered' as any, handleEasterEggTrigger);
    };
  }, [toast]);

  return (
    <PageTransition>
      <StripeBackground />
      <Toaster />
      
      {/* Easter Egg Animation Layer */}
      <EasterEggAnimation activeEasterEgg={activeEasterEgg} />
      
      <section className="pt-32 pb-12 px-4 relative text-center">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mx-auto" 
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
      
      <div className="container mx-auto px-4 pb-20 text-center">
        <TeamPhoto />
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 mb-20" />
        
        {committeeHeads.map((department, index) => (
          <div key={department.name} className="flex flex-col items-center">
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
