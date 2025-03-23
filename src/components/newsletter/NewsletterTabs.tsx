
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
  return (
    <Tabs defaultValue="middle" className="mb-12">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-black/30 p-1 rounded-full border border-mun-purple/30">
        <TabsTrigger value="middle" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full">
          JBCN Middle School MUN
        </TabsTrigger>
        <TabsTrigger value="senior" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full">
          JBCN Senior MUN
        </TabsTrigger>
      </TabsList>
      
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
    </Tabs>
  );
};

export default NewsletterTabs;
