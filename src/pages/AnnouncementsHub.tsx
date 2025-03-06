
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import Announcements from '../components/announcements/Announcements';
import Newsletter from '../components/announcements/Newsletter';

const AnnouncementsHub = () => {
  const [activeTab, setActiveTab] = useState("announcements");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a tab parameter in the URL
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'newsletter' || tab === 'announcements') {
      setActiveTab(tab);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/announcements?tab=${value}`, { replace: true });
  };

  return (
    <PageTransition>
      <StripeBackground />
      
      {/* Header Banner */}
      <section className="pt-32 pb-10 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              UPDATES & NEWS
            </h1>
            
            <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Stay informed with the latest announcements, news, and updates regarding the JBCN Parel Model United Nations conference.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section with Tabs */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs 
            defaultValue="announcements" 
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-10 rounded-full bg-black/30 border border-mun-purple/30 p-1 max-w-md mx-auto">
              <TabsTrigger 
                value="announcements" 
                className="rounded-full text-sm px-4 py-2"
              >
                Announcements
              </TabsTrigger>
              <TabsTrigger 
                value="newsletter" 
                className="rounded-full text-sm px-4 py-2"
              >
                Newsletter
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="announcements">
              <Announcements />
            </TabsContent>
            
            <TabsContent value="newsletter">
              <Newsletter />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageTransition>
  );
};

export default AnnouncementsHub;
