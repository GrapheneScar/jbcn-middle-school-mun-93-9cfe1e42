
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface ComingSoonOverlayProps {
  type?: "button" | "section" | "page";
  message?: string;
}

export const ComingSoonOverlay = ({ 
  type = "section",
  message = "Coming Soon"
}: ComingSoonOverlayProps) => {
  // Different styles based on overlay type
  const getStyles = () => {
    switch(type) {
      case "button":
        return "absolute inset-0 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm z-10";
      case "page":
        return "fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50";
      default: // section
        return "absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={getStyles()}
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="glass-panel px-8 py-6 rounded-xl border border-mun-purple/30 flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, -3, 0, 3, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <AlertTriangle className="w-12 h-12 text-mun-purple mb-4" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{message}</h3>
        <p className="text-white/70 text-center max-w-sm">
          We're working hard to make this available. Please check back soon!
        </p>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-32 h-32 bg-mun-purple/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-mun-purple/20 rounded-full blur-xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
