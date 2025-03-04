
import { motion } from 'framer-motion';
import { GalleryImage } from "./types";

interface GalleryLightboxProps {
  selectedImage: GalleryImage | null;
  onClose: () => void;
}

const GalleryLightbox = ({ selectedImage, onClose }: GalleryLightboxProps) => {
  if (!selectedImage) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-12 right-0 text-white hover:text-mun-purple-light"
          onClick={onClose}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="mt-4 text-white">
          <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
          <p className="text-white/70">{selectedImage.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryLightbox;
