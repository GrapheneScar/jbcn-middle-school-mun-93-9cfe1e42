
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewsletterGrid from './NewsletterGrid';

interface NewsletterTabsProps {
  seniorMUNNewsletters: any[];
  middleSchoolNewsletters: any[];
}

const NewsletterTabs = ({ seniorMUNNewsletters, middleSchoolNewsletters }: NewsletterTabsProps) => {
  const [activeTab, setActiveTab] = useState('middle-school');
  
  return (
    <div className="mb-20">
      <Tabs 
        defaultValue={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md bg-black/40 backdrop-blur-md border border-mun-purple/30 p-1 rounded-full overflow-hidden">
            <TabsTrigger 
              value="middle-school" 
              className="rounded-full py-2.5 px-4 data-[state=active]:bg-mun-purple data-[state=active]:shadow-[0_0_15px_rgba(155,135,245,0.5)] data-[state=active]:text-white"
            >
              Middle School
            </TabsTrigger>
            <TabsTrigger 
              value="senior" 
              className="rounded-full py-2.5 px-4 data-[state=active]:bg-mun-purple data-[state=active]:shadow-[0_0_15px_rgba(155,135,245,0.5)] data-[state=active]:text-white"
            >
              Senior MUN
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="middle-school" className="animate-fade-in">
          <NewsletterGrid 
            newsletters={middleSchoolNewsletters} 
            title="Middle School Newsletters" 
          />
        </TabsContent>
        <TabsContent value="senior" className="animate-fade-in">
          <NewsletterGrid 
            newsletters={seniorMUNNewsletters}
            title="Senior MUN Newsletters" 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsletterTabs;
