
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileText, Download, BookOpen, FileQuestion, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Resource {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  type: string;
}

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resources: Resource[] = [
    {
      title: "MUN Procedure Guide",
      description: "A comprehensive guide to MUN procedures, rules of debate, and parliamentary process.",
      icon: <FileText className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "guide"
    },
    {
      title: "Position Paper Template",
      description: "Standard template for preparing your position papers before the conference.",
      icon: <FileCheck className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "template"
    },
    {
      title: "Resolution Format",
      description: "Learn how to correctly format resolutions with preambulatory and operative clauses.",
      icon: <FileText className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "guide"
    },
    {
      title: "Beginner's MUN Handbook",
      description: "Essential information for first-time delegates on conference procedures.",
      icon: <BookOpen className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "beginner"
    },
    {
      title: "Research Methods Guide",
      description: "Strategies for effectively researching your country's positions and policies.",
      icon: <FileQuestion className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "guide"
    },
    {
      title: "Working Paper Template",
      description: "Template for drafting and submitting working papers during committee sessions.",
      icon: <FileCheck className="h-8 w-8 text-mun-purple-light" />,
      url: "#",
      type: "template"
    },
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <PageTransition>
      <StripeBackground />
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Resources</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Access all the resources you need to prepare for JBCN Parel MUN. From guides for beginners to templates for experienced delegates.
            </p>
          </motion.div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-black/30 border border-white/10">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="beginner">For Beginners</TabsTrigger>
                <TabsTrigger value="guide">Guides</TabsTrigger>
                <TabsTrigger value="template">Templates</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="glass-panel h-full group hover:border-mun-purple/50 transition-all duration-300">
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          {resource.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                        <p className="text-white/70 mb-6 flex-grow">{resource.description}</p>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-auto"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full border-mun-purple/50 text-white hover:bg-mun-purple/20"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Resource
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resources;
