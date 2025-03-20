
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

const PressEasterEgg = () => {
  return (
    <>
      {/* TV static effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          mixBlendMode: "multiply"
        }}
      />
    
      {/* Breaking news banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 h-16 bg-red-600 flex items-center justify-center z-10 shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <Newspaper className="text-white h-8 w-8 mr-3" />
          <h3 className="text-white font-bold text-lg uppercase tracking-wider">Breaking News</h3>
        </motion.div>
        
        {/* Scrolling news ticker */}
        <motion.div 
          className="absolute bottom-0 inset-x-0 h-4 bg-black/80 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="text-white text-xs whitespace-nowrap"
            initial={{ x: window.innerWidth }}
            animate={{ x: -2000 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            BREAKING: DELEGATES ACHIEVE WORLD PEACE IN RECORD TIME • UN SECRETARY GENERAL IMPRESSED BY MIDDLE SCHOOL STUDENTS • CLIMATE CRISIS SOLVED BY INNOVATIVE RESOLUTION • HISTORIC AGREEMENT REACHED ON GLOBAL EDUCATION • 
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Newspaper headlines with improved visuals */}
      <div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white p-8 rounded-md max-w-2xl shadow-2xl transform rotate-1 relative overflow-hidden"
        >
          {/* Aged paper texture */}
          <motion.div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
          
          <div className="text-center border-b-2 border-black pb-2 mb-4">
            <h2 className="text-3xl font-serif font-bold">THE MUN TIMES</h2>
            <p className="text-gray-600">The Official Newspaper of JBCN Middle School MUN</p>
          </div>
          
          <motion.h1 
            className="text-4xl font-bold font-serif text-center mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: 2, duration: 1 }}
          >
            DELEGATES ACHIEVE WORLD PEACE IN RECORD TIME
          </motion.h1>
          
          <div className="text-sm">
            <p className="mb-2 leading-relaxed">
              In an unprecedented turn of events, delegates at the JBCN Middle School MUN have shocked the international community by achieving world peace in just two days of intense negotiation.
            </p>
            <p className="mb-2 leading-relaxed">
              "I've never seen anything like it," said a stunned faculty advisor. "They started with climate change and somehow ended up solving every global conflict in the process."
            </p>
            <p className="mb-2 leading-relaxed">
              The UN Secretary-General is reportedly considering stepping down to let the middle school students take over.
            </p>
          </div>
          
          <div className="text-xs text-gray-500 mt-4 border-t pt-2 flex justify-between">
            <span>Published April 25, 2025</span>
            <span>Definitely Not Fake News</span>
          </div>
          
          {/* Newspaper fold effect */}
          <motion.div 
            className="absolute inset-0 bg-black/5"
            style={{
              clipPath: "polygon(0 50%, 100% 50%, 100% 50.5%, 0 50.5%)"
            }}
            animate={{ 
              clipPath: [
                "polygon(0 50%, 100% 50%, 100% 50.5%, 0 50.5%)",
                "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"
              ],
              opacity: [0, 0.08]
            }}
            transition={{ duration: 0.4, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default PressEasterEgg;
