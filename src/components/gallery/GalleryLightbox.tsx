
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryImage } from './types';
import { useEffect } from 'react';

interface GalleryLightboxProps {
  selectedImageId: string | null;
  images: GalleryImage[];
  onClose: () => void;
}

const GalleryLightbox = ({ selectedImageId, images, onClose }: GalleryLightboxProps) => {
  if (!selectedImageId) return null;
  
  const selectedImage = images.find(img => img.id === selectedImageId);
  if (!selectedImage) return null;
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  // Direct click handler for the overlay
  const handleOverlayClick = () => {
    onClose();
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 p-4 md:p-10 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <button 
        className="absolute top-4 right-4 text-white bg-mun-purple/70 rounded-full p-2 hover:bg-mun-purple z-[60]" 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X size={24} />
      </button>
      
      <motion.div 
        className="max-w-5xl max-h-[85vh] relative z-[55]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={selectedImage.src} 
          alt={selectedImage.title} 
          className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
        />
      </motion.div>
    </div>
  );
};

export default GalleryLightbox;
