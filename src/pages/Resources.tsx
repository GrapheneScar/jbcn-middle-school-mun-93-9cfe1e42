import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { BookOpen, FileText, Globe, ScrollText, FileCode, FilePenLine, FilePlus2, Newspaper, Users, ListChecks, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const guideResources = [{
    title: "Rules of Procedure (RoP)",
    description: "Official rules of procedure for the JBCN Parel MUN 2025 conference",
    icon: ListChecks,
    link: "https://drive.google.com/file/d/19K56bVlyhd2piUwUKueHynqf4tN7zAei/view?usp=sharing",
    image: "/lovable-uploads/rop.png",
    highlight: false
  }, {
    title: "Preambulatory and Operative Clauses",
    description: " A small list of Preambulatory and Operative clauses for Resolutions/Directives.",
    icon: ListChecks,
    link: "https://drive.google.com/file/d/1tyvIkOmvbsYUewBxbE-59Kqgis77BSPP/view?usp=sharing",
    image: "/lovable-uploads/clauses.png"
  }, {
    title: "MUN Lingo",
    description: "Essential terminology used in Model United Nations conferences",
    icon: MessageSquare,
    link: "https://drive.google.com/file/d/1vOxtInhKgnryTo7XTj3IYc9tCwWubrDx/view?usp=sharing",
    image: "/lovable-uploads/mun lingo.png"
  },
  // Removed Voting card
  {
    title: "Study Guides",
    description: "Study Guides of the commitees.",
    icon: ScrollText,
    link: "https://drive.google.com/drive/folders/1d8iPqYye3Gr-n0hpDNAKHdJevklLMzcM",
    image: "/lovable-uploads/study guide.png"
  }, {
    title: "UN charter",
    description: " The foundational treaty of the United Nations, outlining its purpose, principles, and structure.",
    icon: Globe,
    link: "https://www.un.org/en/about-us/un-charter/full-text",
    image: "/lovable-uploads/un charter.png"
  }];
  const templateResources = [{
    title: "Directives",
    description: "Example for writing effective directives.",
    icon: FilePenLine,
    link: "https://docs.google.com/document/d/17fUQgZ_lIoubRNQcwFo6YD-LKUnHjt2cNWuUxFYw8vg/edit?usp=sharing",
    image: "/lovable-uploads/",
    highlight: false
  }, {
    title: "Draft Resolution",
    description: "Example for writng a excellent Draft Resolution.",
    icon: FileText,
    link: "https://docs.google.com/document/d/11PPDUUnyy1VT29eCLhsvEicsIZ3PtjEg/edit?usp=sharing&ouid=100119734129423747207&rtpof=true&sd=true",
    image: "/lovable-uploads/"
  }, {
    title: "Position Paper",
    description: "Example for crafting effective position papers",
    icon: FileCode,
    link: "https://docs.google.com/document/d/138mRyGFn9Tr2231kekwqnWqmm7ahtQvkjsPuSdEWoRM/edit?usp=sharing",
    image: "/lovable-uploads/"
  }, {
    title: "communiqué",
    description: "Example for format and structure for working communiqué.",
    icon: FilePlus2,
    link: "https://drive.google.com/file/d/1MSwe-OaZGGLMpw2fde5Q9pIiZM2c9mGv/view?usp=sharing",
    image: "/lovable-uploads/"
  }, {
    title: "Press Release (communiqué)",
    description: "Example for drafting press releases (communiqué)",
    icon: Newspaper,
    link: "https://drive.google.com/file/d/19lOGxXn5B3ouaYN3mrNeBXBTY-oUTGsO/view?usp=sharing",
    image: "/lovable-uploads/"
  }, {
    title: "Chits",
    description: "Example for writing effective communication chits",
    icon: MessageSquare,
    link: "https://drive.google.com/file/d/1gp1suebS-P0O4Fo2pXNWS6k9TFbTOrBB/view?usp=sharing",
    image: "/lovable-uploads/"
  }
  // Removed Joint Statements and Resolutions card
  ];
  const yieldsData = [{
    type: "Yield to the Chair",
    description: "When you quote \"The delegate of would like to yield to the chair\", this means that the chair will get to choose what to do with the speaker's remaining time (it is usually dissolved)."
  }, {
    type: "Yield to Questions",
    description: "When you quote \"The delegate would like to yield to questions\", this states that other delegates are allowed to question you on your speech."
  }, {
    type: "Yield to Comments",
    description: "When you quote, \"The delegate would like to yield to comments\", this particularly states that you, as a delegate, are allowing other delegates in the committee to comment on your speeches. Note: When you comment on a delegate's speech, make sure the comments are made in a very formal tone. Also, constructively criticising a delegate is okay validated by the Executive Board; you mustn't make any comments which attack the delegate's personal integrity or strike their persona."
  }];
  const pointsData = [{
    type: "Point of Order",
    description: "This point is used in committee once a delegate has found a mistake or factual inaccuracy in the rules of procedure, made by a delegate or an EB member."
  }, {
    type: "Point of Information",
    description: "This point is used in committee once a delegate catches a factual inaccuracy, or wishes to question a delegate in one of their GSLs or SSL speeches."
  }, {
    type: "Point of Parliamentary Inquiry",
    description: "This is used if you have a doubt or question on anything that's going on in the committee, specifically regarding parliamentary procedure. Note: A point of parliamentary inquiry must not be asked or said when questioning a delegate on one of their speeches."
  }, {
    type: "Point of Personal Privilege",
    description: "This point is used if you have a personal inconvenience. Note: Use this point if you have an emergency or an important affair to commit to (utilising the washroom, decreasing or increasing the temperature of the Air conditioner)."
  }];
  return <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="text-5xl font-bold text-white mb-6">Delegate Resources</h1>
            <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Access our comprehensive collection of MUN guides, examples, and resources designed to help delegates prepare effectively for JBCN Parel MUN.
            </p>
          </motion.div>

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
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} className="space-y-16">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="mb-8">
                  <div className="flex items-center justify-center mb-8">
                    <BookOpen className="h-8 w-8 text-mun-purple-light mr-3" />
                    <h2 className="text-3xl font-bold text-white">MUN Guides</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guideResources.map((resource, index) => <motion.div key={resource.title} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.3,
                    delay: index * 0.1
                  }} whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.2
                    }
                  }} className={`${resource.highlight ? 'ring-2 ring-mun-purple' : ''} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-mun-purple/20 transition-all duration-300`}>
                        <Card className="h-full bg-black/60 border-mun-purple/30 text-white">
                          <div className="h-40 relative overflow-hidden">
                            <img src={resource.image} alt={resource.title} className="w-full h-full object-cover opacity-30" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <resource.icon className="h-16 w-16 text-mun-purple-light opacity-80" />
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl text-white flex items-center mx-0 text-center justify-center">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="text-white/70">
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="w-full">
                              <Button variant="outline" className="w-full border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
                                <BookOpen className="mr-2 h-4 w-4" /> View Resource
                              </Button>
                            </a>
                          </CardFooter>
                        </Card>
                      </motion.div>)}
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Yields</h3>
                  <p className="text-white/80 mb-6">Yields are something used once a delegate has left over time in their Speech(es).</p>
                  
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="border-mun-purple/20">
                          <TableHead className="text-mun-purple-light">Type</TableHead>
                          <TableHead className="text-mun-purple-light">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {yieldsData.map((item, i) => <TableRow key={i} className="border-mun-purple/10 hover:bg-mun-purple/5">
                            <TableCell className="font-medium text-white">{item.type}</TableCell>
                            <TableCell className="text-white/80">{item.description}</TableCell>
                          </TableRow>)}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>

                {/* Points Table */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="mt-12 p-6 bg-black/30 rounded-xl border border-mun-purple/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Points</h3>
                  <p className="text-white/80 mb-6">
                    A point refers to a specific type of procedural request or intervention that a delegate can make during a committee session. 
                    Points in MUN are used to seek clarification, raise issues related to the rules of procedure, or make procedural motions.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="border-mun-purple/20">
                          <TableHead className="text-mun-purple-light">Type</TableHead>
                          <TableHead className="text-mun-purple-light">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pointsData.map((item, i) => <TableRow key={i} className="border-mun-purple/10 hover:bg-mun-purple/5">
                            <TableCell className="font-medium text-white">{item.type}</TableCell>
                            <TableCell className="text-white/80">{item.description}</TableCell>
                          </TableRow>)}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="templates">
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} className="space-y-16">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="mb-8">
                  <div className="flex items-center justify-center mb-8">
                    <FileText className="h-8 w-8 text-mun-purple-light mr-3" />
                    <h2 className="text-3xl font-bold text-white">Document Examples</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templateResources.map((resource, index) => <motion.div key={resource.title} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.3,
                    delay: index * 0.1
                  }} whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.2
                    }
                  }} className={`${resource.highlight ? 'ring-2 ring-mun-purple' : ''} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-mun-purple/20 transition-all duration-300`}>
                        <Card className="h-full bg-black/60 border-mun-purple/30 text-white">
                          <div className="h-40 relative overflow-hidden">
                            <img src={resource.image} alt={resource.title} className="w-full h-full object-cover opacity-30" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <resource.icon className="h-16 w-16 text-mun-purple-light opacity-80" />
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl text-white flex items-center justify-center">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="text-white/70">
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
                              <FileText className="mr-2 h-4 w-4" /> Download Example
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>)}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <motion.div className="mt-20 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-white/80 mb-4">Need personalized assistance with your preparation?</p>
            <a href="/contact">
              <Button variant="outline" className="border-mun-purple text-mun-purple-light hover:bg-mun-purple/10">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>;
};
export default Resources;