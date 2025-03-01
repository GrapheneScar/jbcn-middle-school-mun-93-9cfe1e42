
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTransition from '../components/PageTransition';

// Gallery image data structure
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery image data
  const galleryImages: GalleryImage[] = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Technology - Laptop",
      category: "technology",
      title: "Digital Innovation"
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Technology - MacBook Pro",
      category: "technology",
      title: "Modern Workspace"
    },
    {
      id: "img3",
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Code on Monitor",
      category: "code",
      title: "Programming Excellence"
    },
    {
      id: "img4",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Matrix Code",
      category: "code",
      title: "Digital Matrix"
    },
    {
      id: "img5",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Developer Workspace",
      category: "workspace",
      title: "Productive Environment"
    },
    {
      id: "img6",
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      alt: "Clean Workspace",
      category: "workspace",
      title: "Minimalist Setup"
    },
    {
      id: "img7",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Team Collaboration",
      category: "events",
      title: "Collaborative Session"
    },
    {
      id: "img8",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      alt: "Conference Room",
      category: "events",
      title: "Strategic Planning"
    },
    {
      id: "img9",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      alt: "MUN Session",
      category: "events",
      title: "Diplomatic Discussions"
    },
  ];

  // Get unique categories for filtering
  const categories = ["all", ...new Set(galleryImages.map(img => img.category))];
  
  // Filter images based on active tab
  const filteredImages = activeTab === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  // Image click handler
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Image container variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Individual image variants for animation
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Gallery</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-mun-purple/30 -z-10 rounded-full"></span>
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the visual journey of JBCN PAREL MUN through our curated collection of images.
          </motion.p>
        </div>
        
        {/* Filter tabs */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl mx-auto bg-mun-purple/20">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-mun-purple"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category} value={category} className="pt-6">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredImages.map(image => (
                    <motion.div 
                      key={image.id}
                      variants={imageVariants}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      onClick={() => handleImageClick(image)}
                      className="cursor-pointer"
                    >
                      <Card className="overflow-hidden glass-panel border-white/10 h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <h3 className="text-xl font-bold text-white">{image.title}</h3>
                              <p className="text-white/70 text-sm">{image.category}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div 
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-mun-purple-light"
              onClick={handleCloseModal}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Gallery;
