
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import { motion } from 'framer-motion';
import { ComingSoonOverlay } from '../components/ui/coming-soon-overlay';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36 relative min-h-screen">
        <GalleryHeader />
        
        {/* Placeholder grid that will show behind the overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-black/30"
            ></div>
          ))}
        </motion.div>
        
        {/* Coming soon overlay */}
        <ComingSoonOverlay type="page" message="Gallery Coming Soon" />
      </div>
    </PageTransition>
  );
};

export default Gallery;
