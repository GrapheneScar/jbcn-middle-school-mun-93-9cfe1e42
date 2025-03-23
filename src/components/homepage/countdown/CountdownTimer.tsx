
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
const CountdownTimer = ({
  targetDate
}: CountdownTimerProps) => {
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
  return <div className="mb-10 max-w-2xl mx-auto">
      <div className="glass-panel py-4 px-3 mx-0 my-0 rounded-lg">
        <p className="text-white/80 mb-3 text-sm">Conference Starts In...</p>
        <div className="flex justify-center space-x-3 md:space-x-5">
          {Object.entries(timeLeft).map(([key, value]) => <motion.div key={key} variants={countdownVariants} animate="pulse" className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-mun-purple/50 rounded-lg flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                {value}
              </div>
              <span className="text-white/70 text-xs mt-1 capitalize">{key}</span>
            </motion.div>)}
        </div>
      </div>
    </div>;
};
export default CountdownTimer;
