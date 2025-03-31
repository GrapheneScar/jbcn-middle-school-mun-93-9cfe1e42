
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Image, ExternalLink } from 'lucide-react';

const HomeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Gallery images - updated with new URLs
  const galleryImages = [
    {
      src: "https://i.postimg.cc/zDpXrSX6/DSC02197.jpg",
      alt: "",
      title: ""
    },
    {
      src: "https://i.postimg.cc/VknRSNTy/image.jpg",
      alt: "",
      title: ""
    },
    {
      src: "https://i.postimg.cc/W3TTRhRs/DSC03134.jpg",
      alt: "",
      title: ""
    },
    {
      src: "https://i.postimg.cc/LsdmTxNY/DSC02238.jpg",
      alt: "",
      title: ""
    }
  ];

  // Auto advance the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Memories</span>
            <br />
            Conference Gallery
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Capturing the diplomatic spirit and memorable moments from our past conferences
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Main showcase image with carousel */}
          <div className="relative h-[60vh] max-h-[500px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{galleryImages[currentIndex].title}</h3>
                  <p className="text-white/80 text-center max-w-lg">{galleryImages[currentIndex].alt}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-mun-purple/80 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-mun-purple/80 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Small thumbnails below */}
          <div className="flex justify-center mt-4 gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-16 rounded-md overflow-hidden transition-all duration-200 ${
                  currentIndex === index 
                    ? 'ring-2 ring-mun-purple scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/gallery">
            <Button 
              className="gallery-button border border-mun-purple bg-transparent hover:bg-mun-purple hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300"
            >
              <Image className="mr-2 h-4 w-4" />
              View Full Gallery
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallery;
