
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon, Grid3X3, X, ArrowUpDown, Calendar, Tag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { galleryImages } from '../components/gallery/gallery-data';
import { GalleryImage } from '../components/gallery/types';

type SortOption = 'newest' | 'oldest' | 'random';

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
  
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  // Filter and sort images based on current settings
  const filteredAndSortedImages = (() => {
    let filtered = galleryImages.filter(img => 
      (filters.category === 'all' || img.category === filters.category) && 
      (filters.year === 'all' || img.year === filters.year)
    );

    // Apply sorting
    switch (sortOption) {
      case 'newest':
        return [...filtered].reverse(); // Assuming newer images are at the end of the array
      case 'oldest':
        return [...filtered];
      case 'random':
        return [...filtered].sort(() => Math.random() - 0.5);
      default:
        return filtered;
    }
  })();
  
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
          <div className="flex flex-wrap md:flex-row gap-4 items-center">
            <div>
              <h3 className="text-white mb-2 text-sm">Categories:</h3>
              <Tabs 
                defaultValue={filters.category} 
                onValueChange={value => setFilters({...filters, category: value})}
              >
                <TabsList className="bg-mun-purple/20 p-1">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category} 
                      className="data-[state=active]:bg-mun-purple rounded-full"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            <div>
              <h3 className="text-white mb-2 text-sm">Years:</h3>
              <Tabs 
                defaultValue={filters.year}
                onValueChange={value => setFilters({...filters, year: value})}
              >
                <TabsList className="bg-mun-purple/20 p-1">
                  {years.map(year => (
                    <TabsTrigger 
                      key={year} 
                      value={year} 
                      className="data-[state=active]:bg-mun-purple rounded-full"
                    >
                      {year === 'all' ? 'All Years' : year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Sort dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-mun-purple/20 border-mun-purple/30 hover:bg-mun-purple/40 text-white">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Sort by: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 border-mun-purple/30">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className={`${sortOption === 'newest' ? 'bg-mun-purple/30' : ''} cursor-pointer`} 
                  onClick={() => setSortOption('newest')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Newest First</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`${sortOption === 'oldest' ? 'bg-mun-purple/30' : ''} cursor-pointer`} 
                  onClick={() => setSortOption('oldest')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Oldest First</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`${sortOption === 'random' ? 'bg-mun-purple/30' : ''} cursor-pointer`} 
                  onClick={() => setSortOption('random')}
                >
                  <Tag className="mr-2 h-4 w-4" />
                  <span>Random</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Grid layout buttons */}
            <div className="flex gap-2 items-center bg-mun-purple/20 p-1 rounded-md">
              <button 
                onClick={() => setGridColumns(3)} 
                className={`p-2 rounded-md ${gridColumns === 3 ? 'bg-mun-purple' : 'hover:bg-mun-purple/40'}`} 
                aria-label="3 columns"
              >
                <Grid3X3 size={18} />
              </button>
              <button 
                onClick={() => setGridColumns(4)} 
                className={`p-2 rounded-md ${gridColumns === 4 ? 'bg-mun-purple' : 'hover:bg-mun-purple/40'}`} 
                aria-label="4 columns"
              >
                <Grid3X3 size={18} />
              </button>
              <button 
                onClick={() => setGridColumns(5)} 
                className={`p-2 rounded-md ${gridColumns === 5 ? 'bg-mun-purple' : 'hover:bg-mun-purple/40'}`} 
                aria-label="5 columns"
              >
                <Grid3X3 size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: "tween" }}
          className="grid gap-3 mt-8"
          style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
        >
          {filteredAndSortedImages.map(image => (
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
              
              {/* Year badge */}
              <div className="absolute top-2 right-2 bg-mun-purple/70 text-white text-xs px-2 py-1 rounded-full">
                {image.year || '2024'}
              </div>
              
              {/* Category badge */}
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full capitalize">
                {image.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Message for empty results */}
        {filteredAndSortedImages.length === 0 && (
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
            
            <div className="max-w-5xl max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.title} 
                className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
              />
              
              <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-black/40 p-2 md:p-4 rounded-lg">
                <div className="text-white mb-2 md:mb-0">
                  <h3 className="text-xl font-bold">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-white/70">
                    {galleryImages.find(img => img.id === selectedImage)?.alt}
                  </p>
                </div>
                <div className="text-white text-sm">
                  <span className="bg-mun-purple/40 px-2 py-1 rounded-full mr-2">
                    {galleryImages.find(img => img.id === selectedImage)?.year || '2024'}
                  </span>
                  <span className="bg-black/40 px-2 py-1 rounded-full capitalize">
                    {galleryImages.find(img => img.id === selectedImage)?.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
