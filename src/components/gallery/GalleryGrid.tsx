
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { GalleryImage } from './types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: string) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.3, type: "tween" }} 
      className="grid gap-4 mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {images.map(image => (
        <motion.div 
          key={image.id} 
          className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer" 
          whileHover={{ scale: 1.03 }} 
          transition={{ duration: 0.2, type: "tween" }} 
          onClick={() => onImageClick(image.id)}
        >
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-full object-cover" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileHover={{ opacity: 1 }} 
              className="flex items-center gap-2 text-white bg-black/50 px-3 py-1.5 rounded-full"
            >
              <Eye size={18} />
              <span className="text-sm">View</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
