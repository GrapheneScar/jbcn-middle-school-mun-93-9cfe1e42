
import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { GalleryImage } from '../components/gallery/types';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Filter, Grid, Image } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [gridView, setGridView] = useState<'compact' | 'standard' | 'large'>('standard');
  
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

  // Categories for gallery
  const categories = ["all", "events", "committees", "delegates", "secretariat", "moments", "highlights"];

  // Placeholder gallery images
  const generatePlaceholderImages = (count: number) => {
    const imageTypes = [
      {
        pattern: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
        title: "MUN Conference Discussion",
        category: "events"
      },
      {
        pattern: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
        title: "Committee Session",
        category: "committees"
      },
      {
        pattern: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400",
        title: "Delegate Presentation",
        category: "delegates"
      },
      {
        pattern: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
        title: "Secretariat Meeting",
        category: "secretariat"
      },
      {
        pattern: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600&h=400",
        title: "Conference Moment",
        category: "moments"
      },
      {
        pattern: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600&h=400",
        title: "Opening Ceremony",
        category: "highlights"
      },
      {
        pattern: "/lovable-uploads/c5052cbb-2daa-49ba-ac5a-709d23e6a408.png",
        title: "MUN Preparations",
        category: "events"
      }
    ];
    
    return Array.from({ length: count }).map((_, index) => {
      const typeIndex = index % imageTypes.length;
      const imageType = imageTypes[typeIndex];
      return {
        id: `img-${index}`,
        src: imageType.pattern,
        alt: `${imageType.title} ${index + 1}`,
        title: `${imageType.title} ${Math.floor(index / imageTypes.length) + 1}`,
        category: imageType.category
      };
    });
  };

  const galleryImages = generatePlaceholderImages(100);
  
  // Filter images based on active tab and search query
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeTab === "all" || image.category === activeTab;
    const matchesSearch = searchQuery === "" || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      image.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Grid class based on selected view
  const getGridClass = () => {
    switch(gridView) {
      case 'compact':
        return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1';
      case 'standard':
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3';
      case 'large':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
      default:
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3';
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36">
        <GalleryHeader />
        
        {/* Search and filter controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between glass-panel p-4 rounded-xl"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-white/40 focus:border-mun-purple/50"
            />
          </div>
          
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-white/60 text-sm hidden md:inline">View:</span>
            <div className="bg-black/30 rounded-lg p-1 flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setGridView('compact')}
                className={cn(
                  "h-8 w-8 rounded-md", 
                  gridView === 'compact' ? "bg-mun-purple text-white" : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setGridView('standard')}
                className={cn(
                  "h-8 w-8 rounded-md", 
                  gridView === 'standard' ? "bg-mun-purple text-white" : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setGridView('large')}
                className={cn(
                  "h-8 w-8 rounded-md", 
                  gridView === 'large' ? "bg-mun-purple text-white" : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Image className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-black/30 p-1 rounded-full inline-flex">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="data-[state=active]:bg-mun-purple rounded-full capitalize px-4 py-2"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </motion.div>
        
        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`grid ${getGridClass()}`}
        >
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base line-clamp-1">{image.title}</h3>
                    <p className="text-white/70 text-xs line-clamp-1">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/70 text-lg">No images match your search criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchQuery(''); setActiveTab('all');}}
                className="mt-4 border-mun-purple text-mun-purple hover:bg-mun-purple hover:text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </motion.div>
        
        {/* Results counter */}
        <div className="mt-6 text-center text-white/60 text-sm">
          Showing {filteredImages.length} of {galleryImages.length} images
        </div>
      </div>

      <GalleryLightbox 
        selectedImage={selectedImage}
        onClose={handleCloseModal}
      />
    </PageTransition>
  );
};

export default Gallery;
