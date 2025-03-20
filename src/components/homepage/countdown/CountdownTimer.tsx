
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
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
  }, [targetDate]);

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
    <div className="mb-12 max-w-3xl mx-auto">
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
    </div>
  );
};

export default CountdownTimer;
