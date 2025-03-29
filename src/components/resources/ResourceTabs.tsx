
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BookOpen, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import GuidesSection from './GuidesSection';
import ExamplesSection from './ExamplesSection';
import YieldsSection from './YieldsSection';
import PointsSection from './PointsSection';

const ResourceTabs = () => {
  return (
    <Tabs defaultValue="guides" className="max-w-6xl mx-auto">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-black/30 p-1 rounded-full border border-mun-purple/30">
        <TabsTrigger value="guides" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full">
          <BookOpen className="mr-2 h-4 w-4" />
          Guides
        </TabsTrigger>
        <TabsTrigger value="templates" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full">
          <FileText className="mr-2 h-4 w-4" />
          Examples
        </TabsTrigger>
      </TabsList>

      <TabsContent value="guides" className="mt-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          <GuidesSection />
          <YieldsSection />
          <PointsSection />
        </motion.div>
      </TabsContent>

      <TabsContent value="templates">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          <ExamplesSection />
        </motion.div>
      </TabsContent>
    </Tabs>
  );
};

export default ResourceTabs;
