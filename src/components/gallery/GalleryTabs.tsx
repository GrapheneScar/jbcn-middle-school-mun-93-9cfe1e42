
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryImage } from "./types";
import GalleryImageCard from "./GalleryImageCard";
import { getCategories, filterImages } from "./gallery-data";

interface GalleryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onImageClick: (image: GalleryImage) => void;
}

const GalleryTabs = ({
  activeTab,
  setActiveTab,
  onImageClick
}: GalleryTabsProps) => {
  const categories = getCategories();

  // Image container variants for animation
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="mb-12" 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        duration: 0.5,
        delay: 0.3
      }}
    >
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="grid grid-flow-col auto-cols-max sm:grid-cols-3 md:grid-cols-5 max-w-2xl mx-auto bg-mun-purple/20 p-1 rounded-full">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="data-[state=active]:bg-mun-purple rounded-full whitespace-nowrap px-4 py-2"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="pt-6">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              variants={containerVariants} 
              initial="hidden" 
              animate="visible"
            >
              {filterImages(category).map(image => (
                <GalleryImageCard key={image.id} image={image} onClick={onImageClick} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
};

export default GalleryTabs;
