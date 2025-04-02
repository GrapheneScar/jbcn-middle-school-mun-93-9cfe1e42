
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const PressEasterEgg = () => {
  const isMobile = useIsMobile();
  
  // Newspaper article content (simplified for mobile)
  const articleContent = isMobile ? [
    "BREAKING NEWS",
    "MUN DELEGATE WINS AWARD",
    "JBCN HOSTS CONFERENCE",
    "RESOLUTION PASSES"
  ] : [
    "BREAKING NEWS: JBCN MUN 2025",
    "DELEGATE IMPRESSES WITH SPEECH",
    "COMMITTEES REACH CONSENSUS",
    "RESOLUTION PASSES UNANIMOUSLY",
    "CRISIS AVERTED BY QUICK THINKING",
    "JBCN HOSTS SUCCESSFUL MUN"
  ];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background newspaper effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-32 bg-white/90 p-4 shadow-lg text-black overflow-hidden rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 40 - 20}deg) scale(${0.5 + Math.random() * 0.5})`,
              opacity: 0.7 + Math.random() * 0.3,
              zIndex: Math.floor(Math.random() * 10)
            }}
            initial={{ 
              y: 1000,
              opacity: 0
            }}
            animate={{ 
              y: -1000,
              opacity: [0, 0.7, 0.9, 0.7, 0],
              rotate: [`${Math.random() * 40 - 20}deg`, `${Math.random() * 40 - 20}deg`]
            }}
            transition={{ 
              duration: 10 + Math.random() * 8,
              delay: i * 0.3,
              ease: "linear"
            }}
          >
            <div className="text-center font-bold uppercase text-xs md:text-sm border-b border-black pb-1 mb-2">
              {["THE DAILY MUN", "MUN TRIBUNE", "DIPLOMAT TIMES", "GLOBAL VOICE"][Math.floor(Math.random() * 4)]}
            </div>
            <h3 className="text-xs md:text-sm font-bold mb-1">
              {articleContent[Math.floor(Math.random() * articleContent.length)]}
            </h3>
            <div className="text-[8px] md:text-[10px] leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices justo vitae magna...
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Main newspaper that appears */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: [0, 1.2, 1], rotate: [-10, 5, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-black p-6 shadow-2xl rounded-sm relative w-full max-w-xl z-20"
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <div className="text-center border-b-4 border-black pb-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">THE MUN HERALD</h1>
          <div className="text-sm mb-1">Vol. MMXXV - No. 1</div>
          <div className="text-xs">JBCN Middle School MUN 2025 - Official Press Release</div>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">BREAKTHROUGH RESOLUTION PASSES</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2">
            <p className="text-sm mb-2 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1">
              In a historic moment at the JBCN Middle School Model United Nations conference, delegates reached a unanimous consensus on the pressing global issue of climate change, showcasing exceptional diplomacy and cooperation.
            </p>
            <p className="text-sm">
              The resolution, which addresses sustainable development goals and international cooperation, was praised by all committee members as "groundbreaking" and "visionary."
            </p>
          </div>
          <div className="col-span-1 bg-gray-200 h-24 flex items-center justify-center">
            <Newspaper className="w-12 h-12 text-gray-700" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-sm mb-1 uppercase border-b border-black">INSIDE COMMITTEE ROOMS</h3>
            <p className="text-xs">
              Delegates demonstrated exceptional research and speaking skills throughout the conference. The Chair remarked that the level of debate was "impressive for delegates of this age group."
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1 uppercase border-b border-black">SECRETARY GENERAL'S SPEECH</h3>
            <p className="text-xs">
              "This conference has showcased the incredible potential of our young delegates," said the Secretary General in the closing ceremony. "The future of diplomacy is in good hands."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Press tooltip popups */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm backdrop-blur-md"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [-10, -30],
            scale: [0.9, 1, 1, 0.9]
          }}
          transition={{ 
            duration: 3,
            delay: 1.5 + i * 0.7,
            ease: "easeInOut"
          }}
          style={{
            bottom: `${30 + (i * 15)}%`,
            left: `${10 + (i * 20)}%`,
          }}
        >
          {[
            "Extra! Extra! Read all about it!",
            "Breaking news coverage!",
            "Press pass granted!",
            "Journalist skills activated!"
          ][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default PressEasterEgg;
