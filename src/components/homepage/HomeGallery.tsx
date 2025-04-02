
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeGallery = () => {
  // Showcase just 5 images with better organization
  const galleryImages = [
    {
      src: "/lovable-uploads/dfc3a29f-1a33-4772-b672-9c86967073d2.png",
      alt: "MUN Conference Image 1",
    },
    {
      src: "/lovable-uploads/fb90c03d-d4a5-4394-8250-6fa259a9253d.png",
      alt: "MUN Conference Image 2",
    },
    {
      src: "/lovable-uploads/a288ae58-b038-4b97-a2db-d64d63ca1d65.png",
      alt: "MUN Conference Image 3",
    },
    {
      src: "/lovable-uploads/d40cb1bd-6eef-4b7d-b927-5c8bd19bc3fd.png",
      alt: "MUN Conference Image 4",
    },
    {
      src: "/lovable-uploads/b0505600-5e16-4571-9ede-4209e1c71e69.png",
      alt: "MUN Conference Image 5",
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery Highlights</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore moments from previous MUN conferences through our curated photo collection.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {galleryImages.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg relative aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
          
          <motion.div
            className="overflow-hidden rounded-lg relative aspect-[4/3] md:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img 
              src={galleryImages[3].src} 
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
