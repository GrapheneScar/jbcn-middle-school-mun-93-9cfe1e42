
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

interface ScheduleEventProps {
  event: {
    time: string;
    title: string;
    location: string;
    description: string;
    type: string;
  };
  index: number;
  isLastEvent: boolean;
}

const ScheduleEvent = ({ event, index, isLastEvent }: ScheduleEventProps) => {
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

  return (
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
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex md:flex-col items-center">
          <div className="text-sm font-medium text-white/70 w-40 text-center md:text-right">
            {event.time}
          </div>
          <div className="ml-4 md:ml-0 md:mt-2 w-4 h-4 rounded-full bg-mun-purple border-4 border-black relative z-10" />
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
      {!isLastEvent && (
        <div className="absolute left-[79px] top-full h-6 w-0.5 bg-white/20 hidden md:block" />
      )}
    </motion.div>
  );
};

export default ScheduleEvent;
