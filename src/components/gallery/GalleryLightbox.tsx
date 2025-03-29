
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryImage } from './types';

interface GalleryLightboxProps {
  selectedImageId: string | null;
  images: GalleryImage[];
  onClose: () => void;
}

const GalleryLightbox = ({ selectedImageId, images, onClose }: GalleryLightboxProps) => {
  if (!selectedImageId) return null;
  
  const selectedImage = images.find(img => img.id === selectedImageId);
  if (!selectedImage) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 p-4 md:p-10 flex items-center justify-center lightbox-overlay" 
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white bg-mun-purple/70 rounded-full p-2 hover:bg-mun-purple" 
        onClick={onClose}
      >
        <X size={24} />
      </button>
      
      <div 
        className="max-w-5xl max-h-[85vh] relative" 
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={selectedImage.src} 
          alt={selectedImage.title} 
          className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
        />
      </div>
    </div>
  );
};

export default GalleryLightbox;
