
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScheduleDay from './ScheduleDay';
import { scheduleData } from './schedule-data';
import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';

const ScheduleTabs = () => {
  const [activeDay, setActiveDay] = useState('day1');
  
  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden mb-10 rounded-xl relative">
      <div className="absolute inset-0 bg-gradient-to-br from-mun-purple/10 to-transparent rounded-xl -z-10" />
      
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex flex-col items-center justify-center p-8 text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1] 
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="mb-6"
          >
            <CalendarClock className="w-20 h-20 text-mun-purple-light" />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            COMING SOON
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/70 max-w-xl"
          >
            Our detailed schedule is being finalized. Check back closer to the conference date for the complete timetable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-mun-purple/20 px-6 py-3 rounded-lg text-white/80 text-sm border border-mun-purple/30"
          >
            The schedule will include opening ceremonies, committee sessions, lunch breaks, and social events.
          </motion.div>
        </motion.div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-white text-2xl">Conference Days</CardTitle>
        <CardDescription className="text-white/70">
          Navigate through the schedule for each day of the conference
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-white/10 rounded-full p-1 py-0">
            <TabsTrigger value="day1" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full py-2.5 data-[state=active]:shadow-[0_0_10px_rgba(155,135,245,0.5)]">
              Day 1 - Friday
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full py-2.5 data-[state=active]:shadow-[0_0_10px_rgba(155,135,245,0.5)]">
              Day 2 - Saturday
            </TabsTrigger>
          </TabsList>
          
          {Object.keys(scheduleData).map(day => <ScheduleDay key={day} day={day} events={scheduleData[day as keyof typeof scheduleData]} />)}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScheduleTabs;
