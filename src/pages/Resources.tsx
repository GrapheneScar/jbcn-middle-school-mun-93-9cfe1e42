
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { BookOpen, FileText, BookMarked, Bookmark, Globe, UserCheck, Clock3 } from 'lucide-react';
import { Button } from '../components/ui/button';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourceCategories = [
    {
      title: "Delegate Guides",
      description: "Essential resources for new and experienced delegates",
      icon: UserCheck,
      resources: [
        {
          title: "Beginner's Guide to MUN",
          description: "A comprehensive introduction to Model United Nations for first-time delegates",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
        {
          title: "Rules of Procedure",
          description: "Detailed explanation of MUN debate format and parliamentary procedure",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
      ]
    },
    {
      title: "Position Papers",
      description: "Guidelines and examples for writing effective position papers",
      icon: FileText,
      resources: [
        {
          title: "Position Paper Template",
          description: "Standard format for JBCN Parel MUN position papers with examples",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
        {
          title: "Research Guide",
          description: "How to effectively research your country's position and committee topics",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
      ]
    },
    {
      title: "Resolution Drafting",
      description: "Tools for crafting effective MUN resolutions",
      icon: BookMarked,
      resources: [
        {
          title: "Resolution Format Guide",
          description: "Structure and formatting requirements for MUN resolutions",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
        {
          title: "Sample Resolutions",
          description: "Examples of well-crafted resolutions from previous conferences",
          link: "https://drive.google.com/file/d/123/view",
          image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
        },
      ]
    },
  ];

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Delegate Resources</h1>
            <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore our collection of guides, templates, and reference materials designed to help delegates prepare effectively for JBCN Parel MUN.
            </p>
          </motion.div>
          
          <div className="space-y-16 max-w-6xl mx-auto">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <motion.div 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-mun-purple/30 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-mun-purple-light" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">{category.title}</h2>
                  <p className="text-white/70 mb-8 max-w-2xl">{category.description}</p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div 
                      key={resource.title}
                      className="glass-panel overflow-hidden rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(121,83,169,0.3)" }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold text-white mb-1">{resource.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-white/80 mb-6">{resource.description}</p>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button className="bg-mun-purple hover:bg-mun-purple-light">
                            <BookOpen className="mr-2 w-4 h-4" />
                            View Resource
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 mb-4">Don't see what you're looking for?</p>
            <a href="/contact">
              <Button variant="outline" className="border-mun-purple text-mun-purple-light hover:bg-mun-purple/10">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resources;
