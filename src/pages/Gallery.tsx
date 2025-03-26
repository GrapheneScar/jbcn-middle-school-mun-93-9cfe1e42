
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon, Grid3X3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Temporary placeholder for gallery images
const placeholderImages = Array.from({ length: 100 }, (_, i) => ({
  id: i.toString(),
  title: `Image ${i + 1}`,
  src: `https://picsum.photos/id/${(i % 30) + 1}/800/600`,
  category: i % 3 === 0 ? 'conference' : i % 3 === 1 ? 'delegates' : 'events',
  year: i % 4 === 0 ? '2022' : i % 4 === 1 ? '2023' : i % 4 === 2 ? '2024' : '2025'
}));

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [gridColumns, setGridColumns] = useState<number>(4);
  
  const categories = ['all', 'conference', 'delegates', 'events'];
  const years = ['all', '2022', '2023', '2024', '2025'];
  
  const [filters, setFilters] = useState({
    category: 'all',
    year: 'all'
  });
  
  const filteredImages = placeholderImages.filter(img => 
    (filters.category === 'all' || img.category === filters.category) &&
    (filters.year === 'all' || img.year === filters.year)
  );
  
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
        
        {/* Gallery Controls */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <div className="mb-4">
              <h3 className="text-white mb-2 text-sm">Categories:</h3>
              <TabsList className="bg-mun-purple/20 p-1">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category}
                    value={category}
                    onClick={() => setFilters({...filters, category})}
                    className="data-[state=active]:bg-mun-purple"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div>
              <h3 className="text-white mb-2 text-sm">Years:</h3>
              <TabsList className="bg-mun-purple/20 p-1">
                {years.map(year => (
                  <TabsTrigger 
                    key={year}
                    value={year}
                    onClick={() => setFilters({...filters, year})}
                    className="data-[state=active]:bg-mun-purple"
                  >
                    {year === 'all' ? 'All Years' : year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
          
          <div className="flex gap-2 items-center">
            <button 
              onClick={() => setGridColumns(3)} 
              className={`p-2 rounded-md ${gridColumns === 3 ? 'bg-mun-purple' : 'bg-mun-purple/20'}`}
              aria-label="3 columns"
            >
              <Grid3X3 size={18} />
            </button>
            <button 
              onClick={() => setGridColumns(4)} 
              className={`p-2 rounded-md ${gridColumns === 4 ? 'bg-mun-purple' : 'bg-mun-purple/20'}`}
              aria-label="4 columns"
            >
              <Grid3X3 size={18} />
            </button>
            <button 
              onClick={() => setGridColumns(5)} 
              className={`p-2 rounded-md ${gridColumns === 5 ? 'bg-mun-purple' : 'bg-mun-purple/20'}`}
              aria-label="5 columns"
            >
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${gridColumns} gap-3 mt-8`}
          style={{ 
            gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` 
          }}
        >
          {filteredImages.map((image) => (
            <motion.div 
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center gap-2 text-white"
                >
                  <Eye size={20} />
                  <span className="text-sm">View</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Message for empty results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-12 h-12 mx-auto text-mun-purple-light/50 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No images found</h3>
            <p className="text-white/60">No images match your current filter selection. Try different filters.</p>
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
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={placeholderImages.find(img => img.id === selectedImage)?.src} 
                alt={placeholderImages.find(img => img.id === selectedImage)?.title}
                className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
