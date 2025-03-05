
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScheduleDay from './ScheduleDay';
import { scheduleData } from './schedule-data';

const ScheduleTabs = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden mb-10 rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-mun-purple/10 to-transparent rounded-xl -z-10" />
      <CardHeader>
        <CardTitle className="text-white text-2xl">Conference Days</CardTitle>
        <CardDescription className="text-white/70">
          Navigate through the schedule for each day of the conference
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-white/10 rounded-full p-1">
            <TabsTrigger 
              value="day1" 
              className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full py-2.5 data-[state=active]:shadow-[0_0_10px_rgba(155,135,245,0.5)]"
            >
              Day 1 - Friday
            </TabsTrigger>
            <TabsTrigger 
              value="day2"
              className="data-[state=active]:bg-mun-purple data-[state=active]:text-white rounded-full py-2.5 data-[state=active]:shadow-[0_0_10px_rgba(155,135,245,0.5)]"
            >
              Day 2 - Saturday
            </TabsTrigger>
          </TabsList>
          
          {Object.keys(scheduleData).map((day) => (
            <ScheduleDay 
              key={day} 
              day={day} 
              events={scheduleData[day as keyof typeof scheduleData]} 
            />
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScheduleTabs;
