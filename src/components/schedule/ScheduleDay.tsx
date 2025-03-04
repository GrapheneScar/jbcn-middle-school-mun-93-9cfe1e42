
import { TabsContent } from "@/components/ui/tabs";
import ScheduleEvent from "./ScheduleEvent";

interface ScheduleDayProps {
  day: string;
  events: Array<{
    time: string;
    title: string;
    location: string;
    description: string;
    type: string;
  }>;
}

const ScheduleDay = ({ day, events }: ScheduleDayProps) => {
  return (
    <TabsContent value={day} className="mt-6">
      <div className="space-y-6">
        {events.map((event, index) => (
          <ScheduleEvent 
            key={index} 
            event={event} 
            index={index} 
            isLastEvent={index === events.length - 1}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ScheduleDay;
