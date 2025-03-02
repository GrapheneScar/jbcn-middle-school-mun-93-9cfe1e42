
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const announcements = [
    {
      id: 1,
      title: "Conference Announcement",
      date: "May 15, 2023",
      description: "Official announcement of the upcoming Middle School MUN Conference with dates and venue details."
    },
    {
      id: 2,
      title: "Committee Revelations",
      date: "June 2, 2023",
      description: "Reveal of this year's committees and agendas. Exciting debates await!"
    },
    {
      id: 3,
      title: "Keynote Speaker Announcement",
      date: "July 10, 2023",
      description: "We are excited to announce our keynote speaker for the opening ceremony."
    },
    {
      id: 4,
      title: "Delegate Preparation Guide",
      date: "August 5, 2023",
      description: "Comprehensive guide for delegates to prepare for their respective committees."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <motion.div 
          className="container mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Newsletter</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay updated with the latest announcements, resources, and recap of our Model United Nations events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <motion.div 
              className="md:col-span-2"
              variants={itemVariants}
            >
              <Card className="bg-black/40 backdrop-blur-md border-mun-purple/30 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mun-purple/20 to-transparent rounded-lg -z-10" />
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Subscribe to Our Newsletter</CardTitle>
                  <CardDescription className="text-white/70">
                    Get the latest updates directly to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="bg-mun-purple hover:bg-mun-purple-dark text-white"
                      >
                        {loading ? "Subscribing..." : "Subscribe"}
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Learn More
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="text-sm text-white/50">
                  We respect your privacy. Unsubscribe at any time.
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-black/40 backdrop-blur-md border-mun-purple/30 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-white">Newsletter Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Early access to conference details", "Exclusive resources for delegates", "Important deadlines reminders", "Conference recaps"].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <div className="w-2 h-2 rounded-full bg-mun-purple" />
                      <p className="text-white/80">{benefit}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8">Announcements</h2>
            
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="bg-black/50 border border-white/10 mb-6">
                <TabsTrigger value="all">All Announcements</TabsTrigger>
                <TabsTrigger value="announcements">Conference</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="recaps">Recaps</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {announcements.map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg hover:border-mun-purple/50 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white">{announcement.title}</CardTitle>
                            <span className="text-sm text-white/50">{announcement.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/70">{announcement.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="announcements" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {announcements.slice(0, 2).map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg hover:border-mun-purple/50 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white">{announcement.title}</CardTitle>
                            <span className="text-sm text-white/50">{announcement.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/70">{announcement.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {announcements.slice(3, 4).map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg hover:border-mun-purple/50 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white">{announcement.title}</CardTitle>
                            <span className="text-sm text-white/50">{announcement.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/70">{announcement.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recaps" className="mt-0">
                <div className="p-8 text-center text-white/70 bg-black/20 rounded-lg border border-white/10">
                  <p>No recap announcements available yet. Check back after our upcoming conference!</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Newsletter;
