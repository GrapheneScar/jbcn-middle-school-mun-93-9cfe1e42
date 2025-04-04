
import { motion } from 'framer-motion';

interface PhotographyTooltipsProps {
  hasCamera: boolean | null;
}

const PhotographyTooltips = ({ hasCamera }: PhotographyTooltipsProps) => {
  return (
    <>
      {/* Photography tooltip popups */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [-10, -30],
            scale: [0.9, 1, 1, 0.9],
            x: [-20 + i * 10, -10 + i * 5]
          }}
          transition={{ 
            duration: 3,
            delay: 2 + i * 0.7,
            ease: "easeInOut"
          }}
          style={{
            bottom: `${30 + Math.random() * 20}%`,
            left: `${10 + (i * 20)}%`,
          }}
        >
          {[
            hasCamera ? "Perfect shot captured!" : "Gallery image loaded!",
            "ISO 100 • f/2.8 • 1/125s",
            hasCamera ? "Great lighting conditions!" : "Photo mode activated!",
            "MUN moments preserved forever!"
          ][i]}
        </motion.div>
      ))}
    </>
  );
};

export default PhotographyTooltips;
