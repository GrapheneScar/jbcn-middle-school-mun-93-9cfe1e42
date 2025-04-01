
import { useState } from 'react';
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { FileText, FileSpreadsheet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

interface ResourceCardProps {
  title: string;
  description: string;
  images: {
    default: string;
    hover: string;
  };
  url?: string;
  type: 'study-guide' | 'country-matrix';
  note?: string;
}

const ResourceCard = ({
  title,
  description,
  images,
  url,
  type,
  note
}: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card className="bg-[#121218] rounded-xl border border-[#2a2a3a] overflow-hidden">
      <div className="relative h-64 w-full overflow-hidden bg-black">
        <motion.img 
          src={isHovered ? images.hover : images.default}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-white/70 mb-6">
          {description}
        </p>
        
        {url && (
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-mun-purple rounded-full text-white font-medium hover:bg-mun-purple-light transition-colors"
          >
            {type === 'study-guide' ? (
              <FileText className="h-4 w-4 mr-2" />
            ) : (
              <FileSpreadsheet className="h-4 w-4 mr-2" />
            )}
            Download {type === 'study-guide' ? 'Study Guide' : 'Country Matrix'}
          </a>
        )}
        
        {note && (
          <p className="text-white/50 text-sm mt-4 italic">
            NOTE: {note}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
