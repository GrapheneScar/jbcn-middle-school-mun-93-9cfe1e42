
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Paintbrush, Hash, Terminal, Newspaper, Sparkles } from 'lucide-react';

interface EasterEggAnimationProps {
  activeEasterEgg: string | null;
}

const EasterEggAnimation = ({ activeEasterEgg }: EasterEggAnimationProps) => {
  if (!activeEasterEgg) return null;
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        {activeEasterEgg === "Head of Social Media" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Flying hashtags */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.random() * window.innerWidth, 
                  y: -100,
                  opacity: [0, 1, 0.8, 0],
                  rotate: Math.random() * 360
                }}
                transition={{ 
                  duration: 3 + Math.random() * 4,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="absolute text-purple-400 font-bold"
                style={{ fontSize: `${Math.random() * 20 + 20}px` }}
              >
                #{["JBCNMUN", "Diplomacy", "GlobalLeaders", "DebateMasters", "FutureDiplomats"][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotateZ: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: 1 }}
              className="p-10 rounded-full bg-purple-600/30 backdrop-blur-md"
            >
              <Hash className="text-white h-20 w-20" />
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Website Design" && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.1, 0.5, 0.2, 0.7, 0.3, 1, 0] }}
              transition={{ duration: 3, times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1] }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px]"
            />
            
            {/* Matrix-like code rain effect */}
            <div className="fixed inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -200, x: Math.random() * window.innerWidth }}
                  animate={{ y: window.innerHeight + 200 }}
                  transition={{ 
                    duration: 4 + Math.random() * 3,
                    repeat: 1,
                    repeatType: "reverse",
                    ease: "linear",
                    delay: i * 0.2
                  }}
                  className="absolute text-green-400 font-mono text-opacity-80"
                  style={{ fontSize: `${Math.random() * 10 + 14}px` }}
                >
                  {[...Array(Math.floor(Math.random() * 15) + 5)].map((_, j) => (
                    <div key={j} className="my-1">
                      {Math.random().toString(36).substring(2, 2 + Math.random() * 10)}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, times: [0, 0.6, 0.8, 1] }}
              className="z-10 bg-black/80 p-8 rounded-xl border border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.5)]"
            >
              <Terminal className="text-green-400 h-16 w-16 mb-4 mx-auto" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-green-400 font-mono text-lg">&gt; 404 Error - Just Kidding!</p>
                <p className="text-green-400 font-mono text-lg">&gt; Website functioning perfectly.</p>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: 3, duration: 0.8 }}
                  className="h-4 w-3 bg-green-400 inline-block ml-1"
                />
              </motion.div>
            </motion.div>
          </>
        )}
        
        {activeEasterEgg === "Head of Press" && (
          <>
            {/* Breaking news banner */}
            <motion.div 
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-x-0 top-0 h-16 bg-red-600 flex items-center justify-center z-10"
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
            </motion.div>
            
            {/* Newspaper headlines */}
            <div className="fixed inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="bg-white p-8 rounded-md max-w-2xl shadow-2xl transform rotate-1"
              >
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
                
                <div className="text-xs text-gray-500 mt-4 border-t pt-2">
                  Published April 26, 2024 | Definitely Not Fake News
                </div>
              </motion.div>
            </div>
          </>
        )}
        
        {activeEasterEgg === "Head of Photography" && (
          <>
            {/* Camera flash effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]
              }}
              transition={{ duration: 0.5, times: [0, 0.1, 1] }}
              className="fixed inset-0"
            />
            
            {/* Camera shutter animation */}
            <motion.div className="fixed inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                className="relative h-screen w-screen overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 1, 0] }}
                  transition={{ 
                    duration: 1, 
                    times: [0, 0.2, 0.8, 1],
                    delay: 0.5
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.div>
            </motion.div>
            
            {/* Camera icon and sound visualization */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.7 }}
              className="relative"
            >
              <motion.div
                className="bg-black/70 p-8 rounded-full"
              >
                <Camera className="text-white h-20 w-20" />
              </motion.div>
              
              {/* Sound wave visualization around camera */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5 + i * 0.3] }}
                  transition={{ 
                    repeat: 1,
                    duration: 1,
                    delay: 0.8 + i * 0.2
                  }}
                  className="absolute inset-0 border-2 border-white/20 rounded-full z-0"
                />
              ))}
            </motion.div>
          </>
        )}
        
        {activeEasterEgg === "Head of Illustration" && (
          <>
            {/* Drawing canvas effect */}
            <div className="fixed inset-0 pointer-events-none z-10">
              <svg 
                viewBox="0 0 100 100" 
                width="100%" 
                height="100%" 
                preserveAspectRatio="none"
                className="absolute inset-0"
              >
                {/* Multiple decorative paths being drawn */}
                {[...Array(5)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={[
                      "M10,30 Q20,10 30,30 T50,30 T70,30 T90,30",
                      "M20,40 Q30,20 40,40 T60,40 T80,40",
                      "M10,50 Q20,30 30,50 T50,50 T70,50 T90,50",
                      "M20,60 Q30,40 40,60 T60,60 T80,60",
                      "M10,70 Q20,50 30,70 T50,70 T70,70 T90,70"
                    ][i]}
                    stroke={[
                      "#7953a9", "#9c6ade", "#b080ff", "#c09aff", "#d5bcff"
                    ][i]}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 2.5, 
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
                
                {/* Colorful paint splatter effect */}
                {[...Array(15)].map((_, i) => (
                  <motion.circle
                    key={`splatter-${i}`}
                    cx={10 + Math.random() * 80}
                    cy={10 + Math.random() * 80}
                    r={1 + Math.random() * 3}
                    fill={[
                      "#7953a9", "#9c6ade", "#b080ff", "#c09aff", "#d5bcff"
                    ][Math.floor(Math.random() * 5)]}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 1 + Math.random() * 1.5
                    }}
                  />
                ))}
              </svg>
              
              {/* Animated paintbrush */}
              <motion.div 
                className="absolute bottom-20 right-20 z-20"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  x: [-50, 0, 20, -20, 0],
                  y: [50, 20, 0, 10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.5,
                  times: [0, 0.3, 0.5, 0.7, 1]
                }}
              >
                <div className="relative">
                  <Paintbrush className="text-purple-400 h-16 w-16" />
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: 2, duration: 1, delay: 1 }}
                    className="absolute -top-4 -right-4"
                  >
                    <Sparkles className="text-yellow-300 h-5 w-5" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default EasterEggAnimation;
