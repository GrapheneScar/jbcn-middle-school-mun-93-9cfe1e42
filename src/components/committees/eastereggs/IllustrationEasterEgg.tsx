
import { motion } from 'framer-motion';
import { Paintbrush } from 'lucide-react';

const IllustrationEasterEgg = () => {
  return (
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
          {/* Color palette in background */}
          <motion.circle
            cx="20"
            cy="80"
            r="8"
            fill="#7953a9"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.circle
            cx="40"
            cy="80"
            r="8"
            fill="#9c6ade"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.circle
            cx="60"
            cy="80"
            r="8"
            fill="#b080ff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="8"
            fill="#c09aff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Decorative paths being drawn */}
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
              strokeLinecap="round"
              strokeDasharray="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3.5, 
                ease: "easeInOut",
                delay: i * 0.3
              }}
              style={{
                filter: "drop-shadow(0 0 3px rgba(156, 106, 222, 0.4))"
              }}
            />
          ))}
          
          {/* MUN logo being drawn */}
          <motion.path
            d="M40,30 L45,40 L50,30 L55,40 L60,30"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 3 }}
          />
          <motion.circle
            cx="50"
            cy="35"
            r="12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 3.5 }}
          />
        </svg>
        
        {/* Animated paintbrush */}
        <motion.div 
          className="absolute bottom-40 right-40 z-20"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            x: [-100, 0, 50, -30, 0],
            y: [30, 0, -50, 30, 0]
          }}
          transition={{ 
            duration: 6,
            times: [0, 0.2, 0.4, 0.6, 1],
            ease: "easeInOut"
          }}
        >
          <Paintbrush className="text-purple-400 h-16 w-16 drop-shadow-[0_0_8px_rgba(156,106,222,0.5)]" />
          
          {/* Paint drip from brush */}
          <motion.div
            className="absolute -bottom-1 left-1/2 w-2 bg-purple-500 rounded-b-full -translate-x-1/2 origin-top"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [0, 30, 30, 30],
              opacity: [0, 0.8, 0.8, 0],
              y: [0, 0, 30, 60]
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.3, 0.6, 1],
              delay: 2.5,
              repeat: 1,
              repeatDelay: 2
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default IllustrationEasterEgg;
