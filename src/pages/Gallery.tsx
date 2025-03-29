
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon, X } from 'lucide-react';
import { galleryImages } from '../components/gallery/gallery-data';
import { GalleryImage } from '../components/gallery/types';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36 relative min-h-screen">
        <GalleryHeader />
        
        {/* Gallery Grid - Simplified for better mobile view */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3, type: "tween" }} 
          className="grid gap-4 mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {galleryImages.map(image => (
            <motion.div 
              key={image.id} 
              className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer" 
              whileHover={{ scale: 1.03 }} 
              transition={{ duration: 0.2, type: "tween" }} 
              onClick={() => openLightbox(image.id)}
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
        
        {/* Message for empty results */}
        {galleryImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-12 h-12 mx-auto text-mun-purple-light/50 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No images available</h3>
            <p className="text-white/60">Check back later for updates to our gallery.</p>
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 p-4 md:p-10 flex items-center justify-center lightbox-overlay" 
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-mun-purple/70 rounded-full p-2 hover:bg-mun-purple" 
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div 
              className="max-w-5xl max-h-[85vh] relative" 
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.title} 
                className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
              />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
