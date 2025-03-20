
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RegisterButton } from '../ui/register-button';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set conference date (April 25, 2025)
  const conferenceDate = new Date('2025-04-25T09:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +conferenceDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.7
      }
    }
  };

  const stripeVariants = {
    hidden: {
      scaleY: 0
    },
    visible: (index: number) => ({
      scaleY: 1,
      transition: {
        duration: 1,
        delay: 0.1 * index,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const countdownVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated Stripes Background */}
      <div className="absolute inset-0 flex justify-between z-0">
        {[...Array(10)].map((_, index) => (
          <motion.div 
            key={index} 
            className="h-full w-[9%] bg-mun-purple/30 origin-bottom" 
            custom={index} 
            initial="hidden" 
            animate="visible" 
            variants={stripeVariants} 
          />
        ))}
      </div>
      
      <motion.div 
        className="container mx-auto relative z-10" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <div className="text-center">
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-6 md:text-6xl mx-0 my-[38px]"
          >
            JBCN Middle School MUN
            2025
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto" 
            variants={itemVariants}
          >
            Experience the world of international diplomacy and global problem-solving at the prestigious JBCN Middle School Model United Nations.
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
            <div className="glass-panel py-6 px-4">
              <p className="text-white/80 mb-4">Conference Starts In</p>
              <div className="flex justify-center space-x-4 md:space-x-8">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <motion.div 
                    key={key} 
                    variants={countdownVariants} 
                    animate="pulse" 
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-mun-purple/50 rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                      {value}
                    </div>
                    <span className="text-white/70 text-sm mt-2 capitalize">{key}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3
              }
            }}
          >
            <RegisterButton className="mx-auto" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2" 
        initial={{
          opacity: 0
        }} 
        animate={{
          opacity: 1
        }} 
        transition={{
          delay: 1.5,
          duration: 1
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Scroll Down</span>
          
          {isMobile ?
            // Finger swipe animation for mobile
            <div className="relative h-10 w-16 my-0 mx-[7px] px-[20px] rounded-none py-0">
              <motion.div 
                className="absolute w-6 h-6 bg-white/20 rounded-full" 
                animate={{
                  y: [0, 15, 0],
                  x: [0, 0, 0],
                  scale: [1, 1.1, 1]
                }} 
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }} 
              />
              <motion.div 
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0]
                }} 
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }} 
                className="absolute top-0 left-0 w-4 h-5 border-2 border-white/60 rounded-t-full px-0 mx-[18px] py-0 my-[5px]" 
              />
            </div> :
            // Mouse scroll animation for desktop
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full" 
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.6, 1, 0.6]
                }} 
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }} 
              />
            </div>
          }
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
