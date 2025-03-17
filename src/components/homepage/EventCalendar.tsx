
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarCheck } from 'lucide-react';

const EventCalendar = () => {
  // Set the conference date (adjust this to your actual event date)
  const conferenceStartDate = new Date(2024, 6, 15); // July 15, 2024
  const conferenceEndDate = new Date(2024, 6, 17); // July 17, 2024
  
  const [date, setDate] = useState<Date | undefined>(conferenceStartDate);
  
  const importantDates = [
    { date: new Date(2024, 6, 15), label: "Conference Day 1" },
    { date: new Date(2024, 6, 16), label: "Conference Day 2" },
    { date: new Date(2024, 6, 17), label: "Conference Day 3" }
  ];

  return (
    <motion.div 
      className="glass-panel p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-mun-purple/20 rounded-full blur-2xl" />
      
      <div className="flex items-center justify-center mb-4">
        <CalendarCheck className="mr-2 text-mun-purple-light" />
        <h3 className="text-xl font-bold text-white">Conference Dates</h3>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 bg-black/40 rounded-xl p-4 border border-mun-purple/20">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-3 pointer-events-auto"
            modifiers={{
              booked: importantDates.map(d => d.date)
            }}
            modifiersStyles={{
              booked: { background: "rgba(155, 135, 245, 0.5)", color: "white", fontWeight: "bold" }
            }}
            defaultMonth={conferenceStartDate}
          />
        </div>
        
        <div className="text-left flex-grow">
          <h4 className="text-lg font-bold text-white mb-3">Event Schedule</h4>
          <div className="space-y-3">
            {importantDates.map((item, index) => (
              <div 
                key={index}
                className="flex items-start"
              >
                <div className={`w-3 h-3 mt-1.5 rounded-full ${
                  format(item.date, 'yyyy-MM-dd') === format(date || conferenceStartDate, 'yyyy-MM-dd') 
                    ? 'bg-mun-purple-light' 
                    : 'bg-white/30'
                }`} />
                <div className="ml-3">
                  <p className="font-semibold text-white">
                    {format(item.date, 'MMMM d, yyyy')}
                  </p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-white/80 text-sm">
              Mark your calendar for JBCN Parel MUN! Join us for three days of debate, diplomacy, and global solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCalendar;
