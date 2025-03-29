
import { motion } from 'framer-motion';
import { FileText, FilePenLine, FileCode, FilePlus2, Newspaper, MessageSquare } from 'lucide-react';
import ResourceCard from './ResourceCard';

const templateResources = [{
  title: "Directives",
  description: "Example for writing effective directives.",
  icon: FilePenLine,
  link: "https://docs.google.com/document/d/17fUQgZ_lIoubRNQcwFo6YD-LKUnHjt2cNWuUxFYw8vg/edit?usp=sharing",
  image: "/lovable-uploads/",
  highlight: false
}, {
  title: "Draft Resolution",
  description: "Example for writng a excellent Draft Resolution.",
  icon: FileText,
  link: "https://docs.google.com/document/d/11PPDUUnyy1VT29eCLhsvEicsIZ3PtjEg/edit?usp=sharing&ouid=100119734129423747207&rtpof=true&sd=true",
  image: "/lovable-uploads/"
}, {
  title: "Position Paper",
  description: "Example for crafting effective position papers",
  icon: FileCode,
  link: "https://docs.google.com/document/d/138mRyGFn9Tr2231kekwqnWqmm7ahtQvkjsPuSdEWoRM/edit?usp=sharing",
  image: "/lovable-uploads/"
}, {
  title: "communiqué",
  description: "Example for format and structure for working communiqué.",
  icon: FilePlus2,
  link: "https://drive.google.com/file/d/1MSwe-OaZGGLMpw2fde5Q9pIiZM2c9mGv/view?usp=sharing",
  image: "/lovable-uploads/"
}, {
  title: "Press Release (communiqué)",
  description: "Example for drafting press releases (communiqué)",
  icon: Newspaper,
  link: "https://drive.google.com/file/d/19lOGxXn5B3ouaYN3mrNeBXBTY-oUTGsO/view?usp=sharing",
  image: "/lovable-uploads/"
}, {
  title: "Chits",
  description: "Example for writing effective communication chits",
  icon: MessageSquare,
  link: "https://drive.google.com/file/d/1gp1suebS-P0O4Fo2pXNWS6k9TFbTOrBB/view?usp=sharing",
  image: "/lovable-uploads/"
}];

const ExamplesSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-center mb-8">
        <FileText className="h-8 w-8 text-mun-purple-light mr-3" />
        <h2 className="text-3xl font-bold text-white">Document Examples</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templateResources.map((resource, index) => (
          <ResourceCard
            key={resource.title}
            {...resource}
            index={index}
            buttonText="Download Example"
            buttonIcon={FileText}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ExamplesSection;
