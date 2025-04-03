
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryImageCard from './GalleryImageCard';
import { GalleryImage } from './types';
import GalleryLightbox from './GalleryLightbox';

interface GalleryTabsProps {
  images: GalleryImage[];
  categories: string[];
  onSpotlight?: (image: GalleryImage) => void;
}

const GalleryTabs = ({ images, categories, onSpotlight }: GalleryTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  
  // Filter images based on selected category
  const filteredImages = selectedTab === 'all' 
    ? images 
    : images.filter(img => img.category === selectedTab);
  
  const openLightbox = (imageId: string) => {
    setSelectedImageId(imageId);
    const image = images.find(img => img.id === imageId);
    if (image && onSpotlight) {
      onSpotlight(image);
    }
  };
  
  const closeLightbox = () => {
    setSelectedImageId(null);
  };
  
  return (
    <div className="w-full">
      <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-black/20 border border-mun-purple/20 backdrop-blur-md mb-8 flex flex-wrap justify-center">
          <TabsTrigger 
            key="all" 
            value="all"
            className="data-[state=active]:bg-mun-purple data-[state=active]:text-white"
          >
            All
          </TabsTrigger>
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
                  onClick={() => openLightbox(image.id)}
                />
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
      
      <GalleryLightbox 
        selectedImageId={selectedImageId} 
        images={images} 
        onClose={closeLightbox} 
      />
    </div>
  );
};

export default GalleryTabs;
