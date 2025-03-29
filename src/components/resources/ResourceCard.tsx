
import { motion } from 'framer-motion';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { BookOpen, FileText, LucideIcon } from 'lucide-react';

export interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  image?: string;
  highlight?: boolean;
  index: number;
  buttonText?: string;
  buttonIcon?: LucideIcon;
}

const ResourceCard = ({
  title,
  description,
  icon: Icon,
  link,
  image,
  highlight = false,
  index,
  buttonText = "View Resource",
  buttonIcon: ButtonIcon = BookOpen
}: ResourceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }} 
      className={`${highlight ? 'ring-2 ring-mun-purple' : ''} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-mun-purple/20 transition-all duration-300`}
    >
      <Card className="h-full bg-black/60 border-mun-purple/30 text-white">
        <div className="h-40 relative overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-cover opacity-30" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/placeholder.svg";
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-mun-purple-light opacity-80" />
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-white flex items-center mx-0 text-center justify-center">
            {title}
          </CardTitle>
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
              <ButtonIcon className="mr-2 h-4 w-4" /> {buttonText}
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ResourceCard;
