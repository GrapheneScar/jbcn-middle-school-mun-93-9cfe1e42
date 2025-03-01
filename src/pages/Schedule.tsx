
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const scheduleData = {
    day1: [
      { 
        time: "08:00 - 09:30", 
        title: "Registration & Opening Ceremony", 
        location: "Main Auditorium",
        description: "Delegate registration followed by the formal opening ceremony with keynote speakers and introduction to the conference.",
        type: "ceremony"
      },
      { 
        time: "09:45 - 12:30", 
        title: "Committee Session I", 
        location: "Committee Rooms",
        description: "First formal debate session in respective committees. Introduction of topics and agenda setting.",
        type: "session"
      },
      { 
        time: "12:30 - 13:30", 
        title: "Lunch Break", 
        location: "Dining Hall",
        description: "Networking lunch for all delegates and advisors.",
        type: "break"
      },
      { 
        time: "13:45 - 16:30", 
        title: "Committee Session II", 
        location: "Committee Rooms",
        description: "Continuation of debate, working paper development, and moderated caucuses.",
        type: "session"
      },
      { 
        time: "16:45 - 17:30", 
        title: "Advisor Meeting", 
        location: "Conference Room A",
        description: "Meeting for faculty advisors with the Secretariat team to discuss day one proceedings.",
        type: "meeting"
      }
    ],
    day2: [
      { 
        time: "08:30 - 09:00", 
        title: "Delegate Briefing", 
        location: "Main Auditorium",
        description: "Quick briefing for all delegates about the day's agenda and expectations.",
        type: "meeting"
      },
      { 
        time: "09:15 - 12:00", 
        title: "Committee Session III", 
        location: "Committee Rooms",
        description: "Working paper finalization, resolution drafting, and formal debates.",
        type: "session"
      },
      { 
        time: "12:00 - 13:00", 
        title: "Lunch Break", 
        location: "Dining Hall",
        description: "Lunch for all participants.",
        type: "break"
      },
      { 
        time: "13:15 - 16:00", 
        title: "Committee Session IV", 
        location: "Committee Rooms",
        description: "Resolution presentations, voting procedures, and committee conclusions.",
        type: "session"
      },
      { 
        time: "16:30 - 18:00", 
        title: "Closing Ceremony & Awards", 
        location: "Main Auditorium",
        description: "Official closing ceremony with presentation of awards and certificates to delegates.",
        type: "ceremony"
      }
    ]
  };

  const getEventTypeStyles = (type: string) => {
    switch(type) {
      case 'ceremony':
        return 'bg-mun-purple-light/20 border-mun-purple-light text-mun-purple-light';
      case 'session':
        return 'bg-blue-500/20 border-blue-400 text-blue-400';
      case 'break':
        return 'bg-green-500/20 border-green-400 text-green-400';
      case 'meeting':
        return 'bg-amber-500/20 border-amber-400 text-amber-400';
      default:
        return 'bg-gray-500/20 border-gray-400 text-gray-400';
    }
  };

  const downloadSchedule = () => {
    // In a real app, this would generate and download a PDF or calendar file
    alert('Schedule download functionality would be implemented here');
  };

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
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Conference Schedule</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Plan your Model UN experience with our detailed event schedule
            </p>
          </motion.div>

          <motion.div 
            className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
            variants={itemVariants}
          >
            <div className="space-x-2">
              <Button 
                variant="outline" 
                className="border-mun-purple text-white hover:bg-mun-purple/20"
                onClick={downloadSchedule}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Schedule
              </Button>
              <Button 
                variant="outline" 
                className="border-mun-purple text-white hover:bg-mun-purple/20"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Calendar
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/70">Event Type:</span>
              <Badge className="bg-mun-purple-light/20 text-mun-purple-light border border-mun-purple-light hover:bg-mun-purple-light/30">Ceremony</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border border-blue-400 hover:bg-blue-500/30">Session</Badge>
              <Badge className="bg-green-500/20 text-green-400 border border-green-400 hover:bg-green-500/30">Break</Badge>
              <Badge className="bg-amber-500/20 text-amber-400 border border-amber-400 hover:bg-amber-500/30">Meeting</Badge>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-mun-purple/10 to-transparent rounded-lg -z-10" />
              <CardHeader>
                <CardTitle className="text-white text-2xl">Conference Days</CardTitle>
                <CardDescription className="text-white/70">
                  Navigate through the schedule for each day of the conference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-white/10">
                    <TabsTrigger 
                      value="day1" 
                      className="data-[state=active]:bg-mun-purple data-[state=active]:text-white"
                    >
                      Day 1 - Friday
                    </TabsTrigger>
                    <TabsTrigger 
                      value="day2"
                      className="data-[state=active]:bg-mun-purple data-[state=active]:text-white"
                    >
                      Day 2 - Saturday
                    </TabsTrigger>
                  </TabsList>
                  
                  {["day1", "day2"].map((day) => (
                    <TabsContent key={day} value={day} className="mt-6">
                      <div className="space-y-6">
                        {scheduleData[day as keyof typeof scheduleData].map((event, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative"
                          >
                            {index > 0 && (
                              <div className="absolute left-[79px] -top-6 h-6 w-0.5 bg-white/20" />
                            )}
                            <div className="flex gap-6">
                              <div className="flex flex-col items-center">
                                <div className="text-sm font-medium text-white/70 w-40 text-right">
                                  {event.time}
                                </div>
                                <div className="mt-2 w-4 h-4 rounded-full bg-mun-purple border-4 border-black relative z-10" />
                              </div>
                              <div className="flex-1">
                                <div className={`rounded-lg border p-4 ${getEventTypeStyles(event.type)}`}>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                    <h3 className="font-bold text-lg text-white">{event.title}</h3>
                                    <Badge variant="outline" className="sm:ml-auto whitespace-nowrap">
                                      {event.location}
                                    </Badge>
                                  </div>
                                  <p className="text-white/70">{event.description}</p>
                                </div>
                              </div>
                            </div>
                            {index < scheduleData[day as keyof typeof scheduleData].length - 1 && (
                              <div className="absolute left-[79px] top-full h-6 w-0.5 bg-white/20" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Important Schedule Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">For Delegates</h4>
                    <ul className="space-y-2">
                      {[
                        "Please arrive 15 minutes before each session starts",
                        "Formal dress code is required for all sessions",
                        "Bring your placard and conference materials to all sessions",
                        "Lunch and refreshments will be provided"
                      ].map((note, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1) }}
                          className="flex items-start gap-2 text-white/80"
                        >
                          <svg className="w-5 h-5 text-mun-purple-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{note}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">For Advisors</h4>
                    <ul className="space-y-2">
                      {[
                        "Advisor lounge will be available throughout the conference",
                        "Daily advisor meetings will provide updates on proceedings",
                        "Please ensure all delegates are accounted for during breaks",
                        "Contact the secretariat for any special arrangements"
                      ].map((note, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1) }}
                          className="flex items-start gap-2 text-white/80"
                        >
                          <svg className="w-5 h-5 text-mun-purple-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{note}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 mt-4 pt-6">
                <p className="text-white/60 text-sm">
                  Schedule subject to minor changes. Updates will be announced during the conference.
                </p>
                <Button className="bg-mun-purple hover:bg-mun-purple-dark text-white">
                  Contact Secretariat
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Schedule;
