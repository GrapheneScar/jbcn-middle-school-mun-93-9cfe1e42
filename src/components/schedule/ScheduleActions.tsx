
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CalendarIcon } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto border-mun-purple text-white hover:bg-mun-purple/20 hover:text-mun-purple-light rounded-full py-6 px-6"
          onClick={downloadSchedule}
        >
          <Download className="w-5 h-5 mr-2" />
          Download Schedule
        </Button>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto border-mun-purple text-white hover:bg-mun-purple/20 hover:text-mun-purple-light rounded-full py-6 px-6"
        >
          <CalendarIcon className="w-5 h-5 mr-2" />
          Add to Calendar
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 sm:mt-0">
        <span className="text-white/70 mr-1">Event Type:</span>
        <Badge className="bg-mun-purple-light/20 text-mun-purple-light border border-mun-purple-light hover:bg-mun-purple-light/30 rounded-full px-3 py-1">Ceremony</Badge>
        <Badge className="bg-blue-500/20 text-blue-400 border border-blue-400 hover:bg-blue-500/30 rounded-full px-3 py-1">Session</Badge>
        <Badge className="bg-green-500/20 text-green-400 border border-green-400 hover:bg-green-500/30 rounded-full px-3 py-1">Break</Badge>
        <Badge className="bg-amber-500/20 text-amber-400 border border-amber-400 hover:bg-amber-500/30 rounded-full px-3 py-1">Meeting</Badge>
      </div>
    </motion.div>
  );
};

export default ScheduleActions;
