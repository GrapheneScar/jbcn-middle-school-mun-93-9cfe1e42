import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryImageCard from './GalleryImageCard';
import { GalleryImage } from './types';
import GalleryLightbox from './GalleryLightbox';

interface GalleryTabsProps {
  images: GalleryImage[];
}

const GalleryTabs = ({ images }: GalleryTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Get unique categories from images
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  // Filter images based on selected category
  const filteredImages = selectedTab === 'all' 
    ? images 
    : images.filter(img => img.category === selectedTab);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="w-full">
      <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-black/20 border border-mun-purple/20 backdrop-blur-md mb-8 flex flex-wrap justify-center">
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="data-[state=active]:bg-mun-purple data-[state=active]:text-white"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <AnimatePresence mode="wait">
          <TabsContent 
            value={selectedTab} 
            className="mt-0"
            key={selectedTab}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, index) => (
                <GalleryImageCard 
                  key={image.id} 
                  image={image} 
                  index={index}
                  onClick={() => openLightbox(image)}
                />
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
      
      {selectedImage && (
        <GalleryLightbox 
          image={selectedImage} 
          onClose={closeLightbox} 
          images={filteredImages}
        />
      )}
    </div>
  );
};

export default GalleryTabs;
