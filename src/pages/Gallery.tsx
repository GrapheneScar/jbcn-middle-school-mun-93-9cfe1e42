
import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import GalleryTabs from '../components/gallery/GalleryTabs';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { GalleryImage } from '../components/gallery/types';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image click handler
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Placeholder conference images
  const placeholderImages = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "MUN Conference Discussion Panel"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Conference Technology Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Conference Planning Session"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Conference Documentation"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "MUN Session"
    },
    {
      src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Conference Opening Ceremony"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36">
        <GalleryHeader />
        
        {/* Enhanced placeholder images grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {placeholderImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl aspect-video group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-sm md:text-base font-semibold">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <GalleryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onImageClick={handleImageClick}
        />
      </div>

      <GalleryLightbox 
        selectedImage={selectedImage}
        onClose={handleCloseModal}
      />
    </PageTransition>
  );
};

export default Gallery;
