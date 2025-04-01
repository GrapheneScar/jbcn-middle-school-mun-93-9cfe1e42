
import { CalendarDays, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleActionsProps {
  downloadSchedule: () => void;
}

const ScheduleActions = ({ downloadSchedule }: ScheduleActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <CalendarDays className="text-mun-purple-light h-6 w-6" />
        <h2 className="text-white font-semibold">Conference Days: June 18-19, 2025</h2>
      </div>
      
      <div className="flex gap-3 flex-wrap justify-center">
        <a href="mailto:secretariat.msm2025@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-mun-purple/50 hover:bg-mun-purple/20">
            <Mail className="mr-2 h-4 w-4" />
            Contact Secretariat
          </Button>
        </a>
        
        <Button onClick={downloadSchedule} className="bg-mun-purple hover:bg-mun-purple-light">
          <Download className="mr-2 h-4 w-4" />
          Download Schedule
        </Button>
      </div>
    </div>
  );
};

export default ScheduleActions;
