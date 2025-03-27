
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewsletterGrid from './NewsletterGrid';

interface Newsletter {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  pdfUrl: string;
  comingSoon?: boolean;
}

interface NewsletterTabsProps {
  seniorMUNNewsletters: Newsletter[];
  middleSchoolNewsletters: Newsletter[];
}

const NewsletterTabs = ({ seniorMUNNewsletters, middleSchoolNewsletters }: NewsletterTabsProps) => {
  const [activeTab, setActiveTab] = useState('middle');
  
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="glass-panel p-8 border border-mun-purple/20 rounded-3xl mb-8"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">JBCN MUN Newsletters Archive</h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-8">
          Our newsletters capture the essence of each conference, highlighting key moments, delegate achievements, and committee developments. Browse through our archive to relive past conferences or discover what makes JBCN MUN special.
        </p>
        
        <Tabs 
          defaultValue="middle" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-black/30 p-1 rounded-full border border-mun-purple/30">
            <TabsTrigger 
              value="middle" 
              className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full"
            >
              JBCN Middle School MUN
            </TabsTrigger>
            <TabsTrigger 
              value="senior" 
              className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full"
            >
              JBCN Senior MUN
            </TabsTrigger>
          </TabsList>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <TabsContent value="middle">
              <NewsletterGrid 
                title="JBCN Middle School MUN Newsletters" 
                newsletters={middleSchoolNewsletters} 
              />
            </TabsContent>
            
            <TabsContent value="senior">
              <NewsletterGrid 
                title="JBCN Senior MUN Newsletters" 
                newsletters={seniorMUNNewsletters} 
              />
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default NewsletterTabs;
