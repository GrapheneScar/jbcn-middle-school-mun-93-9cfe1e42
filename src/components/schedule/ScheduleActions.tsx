
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ScheduleActionsProps {
  downloadSchedule: () => void;
}

const ScheduleActions = ({ downloadSchedule }: ScheduleActionsProps) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
      variants={itemVariants}
    >
      <div className="space-x-2">
        <Button 
          variant="outline" 
          className="border-mun-purple text-white hover:bg-mun-purple/20 hover:text-mun-purple-light"
          onClick={downloadSchedule}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Schedule
        </Button>
        <Button 
          variant="outline" 
          className="border-mun-purple text-white hover:bg-mun-purple/20 hover:text-mun-purple-light"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Add to Calendar
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 sm:mt-0">
        <span className="text-white/70">Event Type:</span>
        <Badge className="bg-mun-purple-light/20 text-mun-purple-light border border-mun-purple-light hover:bg-mun-purple-light/30">Ceremony</Badge>
        <Badge className="bg-blue-500/20 text-blue-400 border border-blue-400 hover:bg-blue-500/30">Session</Badge>
        <Badge className="bg-green-500/20 text-green-400 border border-green-400 hover:bg-green-500/30">Break</Badge>
        <Badge className="bg-amber-500/20 text-amber-400 border border-amber-400 hover:bg-amber-500/30">Meeting</Badge>
      </div>
    </motion.div>
  );
};

export default ScheduleActions;
