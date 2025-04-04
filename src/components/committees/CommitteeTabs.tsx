
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Committee, Chair } from './types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChairCard from './ChairCard';
import ChairGalleryModal from './ChairGalleryModal';

interface CommitteeTabsProps {
  committee: Committee;
}

const CommitteeTabs = ({ committee }: CommitteeTabsProps) => {
  const [selectedChair, setSelectedChair] = useState<Chair | null>(null);
  
  const openModal = (chair: Chair) => {
    setSelectedChair(chair);
  };
  
  const closeModal = () => {
    setSelectedChair(null);
  };

  return (
    <div className="mb-16">
      <Tabs defaultValue="background" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-auto whitespace-nowrap rounded-none border-b border-white/20 bg-transparent p-0">
          <TabsTrigger
            value="background"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-mun-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Background
          </TabsTrigger>
          <TabsTrigger
            value="chairs"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-mun-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Chair Information
          </TabsTrigger>
          <TabsTrigger
            value="topics"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-mun-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Topics
          </TabsTrigger>
          <TabsTrigger
            value="style"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-mun-purple data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Committee Style
          </TabsTrigger>
        </TabsList>

        <TabsContent 
          value="background" 
          className="mt-0 bg-black/30 rounded-md p-6 glass-panel"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Background and Setting</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 whitespace-pre-line">{committee.background}</p>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent 
          value="chairs" 
          className="mt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Meet Your Directors</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {committee.chairs.map((chair, index) => {
                // Convert CommitteeChair to Chair type
                const chairProps: Chair = {
                  id: chair.id || chair.name, // Generate a unique ID based on the name if id is not present
                  name: chair.name,
                  title: chair.title,
                  image: chair.image || chair.photo,
                  bio: chair.bio,
                  department: chair.department || committee.name,
                  easterEgg: chair.easterEgg
                };
                
                return (
                  <ChairCard 
                    key={index} 
                    chair={chairProps}
                    openModal={openModal}
                  />
                );
              })}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent 
          value="topics" 
          className="mt-0 bg-black/30 rounded-md p-6 glass-panel"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Committee Topics</h3>
            
            <ul className="space-y-4 text-white/80">
              {committee.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-mun-purple rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </TabsContent>

        <TabsContent 
          value="style" 
          className="mt-0 bg-black/30 rounded-md p-6 glass-panel"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Committee Style</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80">{committee.style}</p>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
      
      {/* Add modal for chair details */}
      {selectedChair && (
        <ChairGalleryModal 
          chair={selectedChair}
          isOpen={!!selectedChair}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CommitteeTabs;
