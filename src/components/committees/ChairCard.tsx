
import { useState } from "react";
import { DepartmentChair } from "./types";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ChairCardProps {
  chair: DepartmentChair;
}

const ChairCard = ({ chair }: ChairCardProps) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const { toast } = useToast();
  
  // Simulated delegate photos - these would be replaced with actual photos
  const delegatePhotos = [
    "/lovable-uploads/riaan.jpg",
    "/lovable-uploads/ruhika.jpg",
    "/lovable-uploads/areehah.jpg"
  ];
  
  const triggerEasterEgg = () => {
    const easterEggs = [
      {
        title: "Surprise!",
        description: "This chair was once a delegate just like you!",
      },
      {
        title: "Fun Fact!",
        description: `${chair.name} started their MUN journey in 6th grade!`,
      },
      {
        title: "Did You Know?",
        description: "Committee chairs spend over 50 hours preparing for each conference!",
      }
    ];
    
    const randomEasterEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    
    toast({
      title: randomEasterEgg.title,
      description: randomEasterEgg.description,
      duration: 3000,
    });
    
    // Show the carousel
    setShowCarousel(true);
  };
  
  return (
    <>
      <Card className="w-full max-w-sm overflow-hidden bg-black/20 border-mun-purple/20 hover:border-mun-purple/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(121,83,169,0.2)] transform hover:-translate-y-1">
        <div 
          className="relative aspect-square overflow-hidden flex items-center justify-center cursor-pointer"
          onClick={triggerEasterEgg}
        >
          <img 
            src={chair.photo} 
            alt={chair.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-bold text-white">{chair.name}</h3>
          <p className="text-sm text-mun-purple-light italic mb-1">~ {chair.title} ~</p>
        </CardContent>
      </Card>
      
      {/* Photo Carousel Modal */}
      <AnimatePresence>
        {showCarousel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowCarousel(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-black/50 p-8 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-mun-purple/80 transition-colors z-10"
                onClick={() => setShowCarousel(false)}
              >
                <X />
              </button>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {chair.name}'s Journey as a Delegate
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {delegatePhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={photo}
                      alt={`${chair.name} as delegate - photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-white/80 mt-4 text-center italic">
                From delegate to chair - a journey of growth and leadership
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChairCard;
