
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Paintbrush, Hash, Terminal, Newspaper, Sparkles } from 'lucide-react';

interface EasterEggAnimationProps {
  activeEasterEgg: string | null;
}

const EasterEggAnimation = ({ activeEasterEgg }: EasterEggAnimationProps) => {
  // Different animations based on the type of easter egg
  
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
            {/* Flying hashtags with improved visuals */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100,
                  opacity: 0,
                  rotate: Math.random() * 20 - 10
                }}
                animate={{ 
                  x: Math.random() * window.innerWidth, 
                  y: -100,
                  opacity: [0, 1, 0.8, 0],
                  rotate: Math.random() * 360,
                  scale: [0.7, 1.2, 0.9]
                }}
                transition={{ 
                  duration: 4 + Math.random() * 5,
                  delay: i * 0.15,
                  ease: "easeOut"
                }}
                className="absolute text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(121,83,169,0.8)]"
                style={{ 
                  fontSize: `${Math.random() * 20 + 20}px`,
                  filter: `hue-rotate(${Math.random() * 40 - 20}deg)`
                }}
              >
                #{["JBCNMUN", "Diplomacy", "GlobalLeaders", "DebateMasters", "FutureDiplomats", "ModelUN", "Youth", "Leadership"][Math.floor(Math.random() * 8)]}
              </motion.div>
            ))}
            
            {/* Background pulse effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0.15, 0.1, 0], 
                scale: [1, 5, 8, 12, 15] 
              }}
              transition={{ 
                duration: 6, 
                repeat: 1, 
                repeatType: "reverse" 
              }}
              className="fixed inset-0 bg-purple-600 rounded-full z-[-1]"
              style={{ transformOrigin: "center" }}
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotateZ: [0, 10, -10, 0],
                filter: ["drop-shadow(0 0 8px rgba(121,83,169,0.3))", "drop-shadow(0 0 20px rgba(121,83,169,0.8))", "drop-shadow(0 0 8px rgba(121,83,169,0.3))"]
              }}
              transition={{ duration: 3, repeat: 1 }}
              className="p-10 rounded-full bg-purple-600/30 backdrop-blur-md"
            >
              <Hash className="text-white h-20 w-20" />
              <motion.div
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: 2, 
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="text-purple-200 h-24 w-24" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Website Design" && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.1, 0.5, 0.2, 0.7, 0.3, 1, 0] }}
              transition={{ duration: 5, times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1] }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[4px]"
            />
            
            {/* Digital distortion overlays */}
            <motion.div 
              className="fixed inset-0 opacity-20 mix-blend-overlay pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.05, 0.2, 0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: 1, repeatType: "reverse" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
              
              {/* Scan lines effect */}
              {[...Array(40)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-full h-[2px] bg-white/10"
                  style={{ top: `${i * 2.5}%` }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    x: [0, Math.random() * 10 - 5, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              ))}
            </motion.div>
            
            {/* Matrix-like code rain effect with improved visuals */}
            <div className="fixed inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -300, x: Math.random() * window.innerWidth }}
                  animate={{ y: window.innerHeight + 300 }}
                  transition={{ 
                    duration: 4 + Math.random() * 4,
                    repeat: 1,
                    repeatType: "loop",
                    ease: "linear",
                    delay: i * 0.15
                  }}
                  className="absolute text-green-400 font-mono text-opacity-80 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                  style={{ fontSize: `${Math.random() * 10 + 12}px` }}
                >
                  {[...Array(Math.floor(Math.random() * 20) + 8)].map((_, j) => (
                    <motion.div 
                      key={j} 
                      className="my-1"
                      animate={{ 
                        opacity: [0.7, 1, 0.7], 
                        color: [
                          'rgb(74, 222, 128)', 
                          'rgb(134, 239, 172)', 
                          'rgb(74, 222, 128)'
                        ]
                      }}
                      transition={{ 
                        duration: 1.5 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: j * 0.05
                      }}
                    >
                      {Math.random().toString(36).substring(2, 2 + Math.random() * 10)}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, times: [0, 0.6, 0.8, 1] }}
              className="z-10 bg-black/80 p-8 rounded-xl border border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.5)]"
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 0.95, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Terminal className="text-green-400 h-16 w-16 mb-4 mx-auto drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-green-400 font-mono text-lg mb-2">&gt; 404 Error - Just Kidding!</p>
                <p className="text-green-400 font-mono text-lg">&gt; Website functioning perfectly.</p>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="h-4 w-3 bg-green-400 inline-block ml-1"
                />
              </motion.div>
              
              {/* Glowing background for terminal */}
              <motion.div 
                className="absolute inset-0 -z-10 rounded-xl bg-green-500/5"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(74,222,128,0.3) inset", 
                    "0 0 20px rgba(74,222,128,0.5) inset", 
                    "0 0 10px rgba(74,222,128,0.3) inset"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </>
        )}
        
        {activeEasterEgg === "Head of Press" && (
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
                  <span>Published April 26, 2024</span>
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
            
            {/* Camera shutter animation with improved visuals */}
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
                    duration: 1.2, 
                    times: [0, 0.2, 0.8, 1],
                    delay: 0.5
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.div>
              
              {/* Photo frame snapshot effects */}
              <div className="fixed inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-full max-w-3xl aspect-video border-[20px] border-white shadow-2xl relative overflow-hidden"
                  initial={{ scale: 0, rotate: -5 }}
                  animate={{ scale: [0, 1.2, 1], rotate: [-5, 5, 0] }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.5,
                    type: "spring"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gray-200"
                    animate={{ opacity: [1, 0] }}
                    transition={{ delay: 2, duration: 0.5 }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 mix-blend-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  />
                  
                  <img 
                    src="/lovable-uploads/gallery-1.jpg" 
                    alt="MUN Conference" 
                    className="w-full h-full object-cover opacity-0"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2.2, duration: 1.5 }}
                  >
                    <span className="bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                      JBCN MUN 2025
                    </span>
                  </motion.div>
                </motion.div>
              </div>
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
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0.5)", 
                    "0 0 30px rgba(255,255,255,0.3)", 
                    "0 0 0 rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: 1,
                  repeatType: "reverse"
                }}
              >
                <Camera className="text-white h-20 w-20" />
              </motion.div>
              
              {/* Sound wave visualization around camera */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5 + i * 0.3] }}
                  transition={{ 
                    repeat: 2,
                    duration: 1.5,
                    delay: 0.8 + i * 0.2
                  }}
                  className="absolute inset-0 border-2 border-white/20 rounded-full z-0"
                  style={{
                    boxShadow: "0 0 10px rgba(255,255,255,0.1)"
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
        
        {activeEasterEgg === "Head of Illustration" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 pointer-events-none"
          >
            <svg 
              viewBox="0 0 100 100" 
              width="100%" 
              height="100%" 
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <motion.path
                d="M10,30 Q20,10 30,30 T50,30 T70,30 T90,30"
                stroke="#7953a9"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M10,50 Q20,30 30,50 T50,50 T70,50 T90,50"
                stroke="#9c6ade"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.path
                d="M10,70 Q20,50 30,70 T50,70 T70,70 T90,70"
                stroke="#b080ff"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
            
            <motion.div 
              className="absolute bottom-20 right-20"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Paintbrush className="text-purple-400 h-20 w-20" />
            </motion.div>
            
            {/* Colorful paint splatter effects */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.6,
                  filter: 'blur(1px)',
                  mixBlendMode: 'screen'
                }}
                initial={{ 
                  width: 0, 
                  height: 0,
                  backgroundColor: [
                    '#7953a9', '#9c6ade', '#b080ff', '#c09aff'
                  ][Math.floor(Math.random() * 4)]
                }}
                animate={{ 
                  width: `${Math.random() * 50 + 20}px`, 
                  height: `${Math.random() * 50 + 20}px`,
                  opacity: [0, 0.7, 0.5]
                }}
                transition={{ 
                  delay: 1 + Math.random() * 2,
                  duration: 0.5 + Math.random() * 1
                }}
              />
            ))}
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Organizing Committee" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {/* Confetti explosion */}
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-sm bg-white"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: [
                    '#ff4136', '#0074d9', '#2ecc40', '#ffdc00', '#ff851b', '#f012be', '#7fdbff', '#001f3f'
                  ][Math.floor(Math.random() * 8)]
                }}
                initial={{ 
                  x: 0, 
                  y: 0,
                  scale: 0,
                  rotate: 0
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * window.innerWidth * 0.8, 
                  y: (Math.random() - 0.5) * window.innerHeight * 0.8,
                  scale: Math.random() * 2 + 1,
                  rotate: Math.random() * 360,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3,
                  ease: ["circOut"],
                  delay: Math.random() * 0.5
                }}
              />
            ))}
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ type: "spring", damping: 12, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-4xl font-bold text-white mb-2"
              >
                Event Organized!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-white/80"
              >
                Successfully planned and coordinated!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default EasterEggAnimation;
