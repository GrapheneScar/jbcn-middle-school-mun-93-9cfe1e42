
import { motion } from 'framer-motion';

const GalleryHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative inline-block">
          <span className="relative z-10">Gallery</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-mun-purple/30 -z-10 rounded-full"></span>
        </span>
      </motion.h1>
      <motion.p 
        className="text-lg text-white/80 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the visual journey of JBCN PAREL MUN through our curated collection of images.
      </motion.p>
    </div>
  );
};

export default GalleryHeader;
