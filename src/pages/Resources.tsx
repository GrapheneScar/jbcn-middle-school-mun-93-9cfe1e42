
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { 
  BookOpen, 
  FileText, 
  List, 
  Globe, 
  ScrollText, 
  FileCode, 
  FilePenLine,
  FileQuestion,
  History,
  Vote,
  MessageSquare,
  FilePlus2,
  Newspaper,
  Users,
  ListChecks
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guideResources = [
    {
      title: "Rules of Procedure (RoP)",
      description: "Official rules of procedure for the JBCN Parel MUN 2025 conference",
      icon: ListChecks,
      link: "https://drive.google.com/file/d/19K56bVlyhd2piUwUKueHynqf4tN7zAei/view?usp=sharing",
      image: "/lovable-uploads/ruhika.jpg",
      highlight: true
    },
    {
      title: "Operating Procedure",
      description: "Comprehensive guide to parliamentary procedure in Model UN debates",
      icon: ListChecks,
      link: "https://drive.google.com/file/d/19K56bVlyhd2piUwUKueHynqf4tN7zAei/view?usp=sharing",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
    {
      title: "MUN Lingo",
      description: "Essential terminology used in Model United Nations conferences",
      icon: MessageSquare,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/0b07c565-b971-4ccd-baf6-45fd2fe2751c.png",
    },
    {
      title: "Voting",
      description: "Guide to voting procedures and mechanisms in Model UN sessions",
      icon: Vote,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
    {
      title: "Common Articles",
      description: "Overview of frequently referenced articles in international law",
      icon: ScrollText,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
    {
      title: "Geneva Convention",
      description: "Summary of the Geneva Conventions and their protocols",
      icon: Globe,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
    {
      title: "Loopholes",
      description: "Understanding legal loopholes in international agreements",
      icon: FileQuestion,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
    {
      title: "Historical Precedence",
      description: "Key historical cases and decisions in international relations",
      icon: History,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    },
  ];

  const templateResources = [
    {
      title: "Directives",
      description: "Templates for writing effective committee directives",
      icon: FilePenLine,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
      highlight: true
    },
    {
      title: "Draft Resolution",
      description: "Formatting guidelines and templates for draft resolutions",
      icon: FileText,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
    {
      title: "Position Paper",
      description: "Templates and examples for crafting effective position papers",
      icon: FileCode,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
    {
      title: "Working Paper",
      description: "Format and structure for collaborative working papers",
      icon: FilePlus2,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
    {
      title: "Press Release",
      description: "Templates for drafting committee press releases",
      icon: Newspaper,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
    {
      title: "Chits",
      description: "Guidelines for writing effective communication chits",
      icon: MessageSquare,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
    {
      title: "Joint Statements and Resolutions",
      description: "Templates for drafting multi-committee communications",
      icon: Users,
      link: "https://drive.google.com/file/d/123/view",
      image: "/lovable-uploads/bb66d3f8-6628-4d67-b2b4-b9c9ea1686fe.png",
    },
  ];

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Delegate Resources</h1>
            <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Access our comprehensive collection of MUN guides, templates, and resources designed to help delegates prepare effectively for JBCN Parel MUN.
            </p>
          </motion.div>

          <Tabs defaultValue="guides" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-black/30 p-1 rounded-lg border border-mun-purple/30">
              <TabsTrigger value="guides" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white">
                <FileText className="mr-2 h-4 w-4" />
                Templates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center mb-8">
                    <BookOpen className="h-8 w-8 text-mun-purple-light mr-3" />
                    <h2 className="text-3xl font-bold text-white">MUN Guides</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guideResources.map((resource, index) => (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`${resource.highlight ? 'ring-2 ring-mun-purple' : ''} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-mun-purple/20 transition-all duration-300`}
                      >
                        <Card className="h-full bg-black/60 border-mun-purple/30 text-white">
                          <div className="h-40 relative overflow-hidden">
                            <img 
                              src={resource.image} 
                              alt={resource.title} 
                              className="w-full h-full object-cover opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <resource.icon className="h-16 w-16 text-mun-purple-light opacity-80" />
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl text-white flex items-center">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="text-white/70">
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
                              <BookOpen className="mr-2 h-4 w-4" /> View Resource
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Reference: MUN Terms</h3>
                  
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="border-mun-purple/20">
                          <TableHead className="text-mun-purple-light">Term</TableHead>
                          <TableHead className="text-mun-purple-light">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { term: "Point of Order", desc: "Raises an issue with rules or procedure" },
                          { term: "Motion to Caucus", desc: "Request for moderated or unmoderated discussion" },
                          { term: "Yielding", desc: "Giving remaining speaker's time to another delegate" },
                          { term: "Division of the Question", desc: "Vote on operative clauses separately" },
                          { term: "Roll Call Vote", desc: "Each country votes individually in alphabetical order" }
                        ].map((item, i) => (
                          <TableRow key={i} className="border-mun-purple/10 hover:bg-mun-purple/5">
                            <TableCell className="font-medium text-white">{item.term}</TableCell>
                            <TableCell className="text-white/80">{item.desc}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="templates">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center mb-8">
                    <FileText className="h-8 w-8 text-mun-purple-light mr-3" />
                    <h2 className="text-3xl font-bold text-white">Document Templates</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templateResources.map((resource, index) => (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`${resource.highlight ? 'ring-2 ring-mun-purple' : ''} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-mun-purple/20 transition-all duration-300`}
                      >
                        <Card className="h-full bg-black/60 border-mun-purple/30 text-white">
                          <div className="h-40 relative overflow-hidden">
                            <img 
                              src={resource.image} 
                              alt={resource.title} 
                              className="w-full h-full object-cover opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <resource.icon className="h-16 w-16 text-mun-purple-light opacity-80" />
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl text-white flex items-center">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="text-white/70">
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
                              <FileText className="mr-2 h-4 w-4" /> Download Template
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Clauses Reference Guide</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div>
                      <h4 className="text-xl font-semibold text-mun-purple-light mb-3">Preambulatory Phrases</h4>
                      <ul className="space-y-2 text-white/80">
                        <li className="pl-4 border-l border-mun-purple/30">Acknowledging</li>
                        <li className="pl-4 border-l border-mun-purple/30">Affirming</li>
                        <li className="pl-4 border-l border-mun-purple/30">Alarmed by</li>
                        <li className="pl-4 border-l border-mun-purple/30">Cognizant</li>
                        <li className="pl-4 border-l border-mun-purple/30">Deeply concerned</li>
                        <li className="pl-4 border-l border-mun-purple/30">Fully believing</li>
                        <li className="pl-4 border-l border-mun-purple/30">Recalling</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-mun-purple-light mb-3">Operative Phrases</h4>
                      <ul className="space-y-2 text-white/80">
                        <li className="pl-4 border-l border-mun-purple/30">Accepts</li>
                        <li className="pl-4 border-l border-mun-purple/30">Calls upon</li>
                        <li className="pl-4 border-l border-mun-purple/30">Condemns</li>
                        <li className="pl-4 border-l border-mun-purple/30">Encourages</li>
                        <li className="pl-4 border-l border-mun-purple/30">Requests</li>
                        <li className="pl-4 border-l border-mun-purple/30">Strongly affirms</li>
                        <li className="pl-4 border-l border-mun-purple/30">Urges</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 mb-4">Need personalized assistance with your preparation?</p>
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
