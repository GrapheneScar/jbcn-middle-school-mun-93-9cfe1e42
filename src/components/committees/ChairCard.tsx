import { CommitteeChair } from "./types";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
interface ChairCardProps {
  chair: CommitteeChair;
}
const ChairCard = ({
  chair
}: ChairCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="glass-panel h-full">
      <Collapsible open={isExpanded} onOpenChange={() => setIsExpanded(!isExpanded)}>
        <div className="p-6 flex flex-col items-center text-center relative">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
            <img src={chair.photo} alt={chair.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{chair.name}</h3>
            <p className="text-mun-purple-light italic mb-4">{chair.title}</p>
            
            <CollapsibleTrigger asChild>
              
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="mt-4">
            <div className="text-white/80 whitespace-pre-line">
              {chair.bio}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </motion.div>;
};
export default ChairCard;