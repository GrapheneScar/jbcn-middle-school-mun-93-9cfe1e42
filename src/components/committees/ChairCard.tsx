
import { DepartmentChair } from "./types";
import { Card, CardContent } from "@/components/ui/card";

interface ChairCardProps {
  chair: DepartmentChair;
}

const ChairCard = ({ chair }: ChairCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-black/20 border-mun-purple/20 hover:border-mun-purple/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(121,83,169,0.2)] transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden flex items-center justify-center">
        <img 
          src={chair.photo} 
          alt={chair.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-bold text-white">{chair.name}</h3>
        <p className="text-sm text-mun-purple-light italic mb-1">~ {chair.title} ~</p>
      </CardContent>
    </Card>
  );
};

export default ChairCard;
