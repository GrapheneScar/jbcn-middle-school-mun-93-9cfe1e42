
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarCheck, Clock } from 'lucide-react';

const EventCalendar = () => {
  // Set the conference date (updated to April 25-26, 2025)
  const conferenceStartDate = new Date(2025, 3, 25); // April 25, 2025
  const conferenceEndDate = new Date(2025, 3, 26); // April 26, 2025

  const [date, setDate] = useState<Date | undefined>(conferenceStartDate);
  
  const importantDates = [
    {
      date: new Date(2025, 3, 25),
      label: "Conference Day 1"
    },
    {
      date: new Date(2025, 3, 26),
      label: "Conference Day 2"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-4 relative overflow-hidden mx-auto max-w-4xl"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-mun-purple/20 rounded-full blur-2xl" />
      
      <div className="flex items-center justify-center mb-3">
        <CalendarCheck className="mr-2 text-mun-purple-light" />
        <h3 className="text-xl font-bold text-white">Conference Dates</h3>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-auto flex-shrink-0 bg-black/40 rounded-xl p-2 border border-mun-purple/20 overflow-auto">
          <div className="min-w-[280px] overflow-visible">
            <Calendar 
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-0 pointer-events-auto w-full"
              modifiers={{
                booked: importantDates.map(d => d.date)
              }}
              modifiersStyles={{
                booked: {
                  background: "rgba(155, 135, 245, 0.5)",
                  color: "white",
                  fontWeight: "bold"
                }
              }}
              defaultMonth={conferenceStartDate}
              footer={
                <div className="text-center text-xs text-white/70 mt-2">
                  April 25-26, 2025
                </div>
              }
            />
          </div>
        </div>
        
        <div className="text-left flex-grow w-full md:w-auto">
          <div className="space-y-3">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-3 h-3 mt-1.5 rounded-full ${
                  format(item.date, 'yyyy-MM-dd') === format(date || conferenceStartDate, 'yyyy-MM-dd') 
                    ? 'bg-mun-purple-light' 
                    : 'bg-white/30'
                }`} />
                <div className="ml-3">
                  <div className="flex flex-wrap items-center">
                    <p className="font-semibold text-white mr-2">
                      {format(item.date, 'MMMM d, yyyy')}
                    </p>
                    <div className="flex items-center text-mun-purple-light text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-white/80 text-sm">
              Mark your calendar for JBCN Parel MUN! Join us for two days of debate, diplomacy, and global solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCalendar;
