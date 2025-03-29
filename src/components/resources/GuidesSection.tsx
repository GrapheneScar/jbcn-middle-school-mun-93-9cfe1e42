
import { motion } from 'framer-motion';
import { BookOpen, ListChecks, MessageSquare, ScrollText, Globe } from 'lucide-react';
import ResourceCard from './ResourceCard';

const guideResources = [{
  title: "Rules of Procedure (RoP)",
  description: "Official rules of procedure for the JBCN Parel MUN 2025 conference",
  icon: ListChecks,
  link: "https://drive.google.com/file/d/19K56bVlyhd2piUwUKueHynqf4tN7zAei/view?usp=sharing",
  image: "/lovable-uploads/rop.png",
  highlight: false
}, {
  title: "Preambulatory and Operative Clauses",
  description: " A small list of Preambulatory and Operative clauses for Resolutions/Directives.",
  icon: ListChecks,
  link: "https://drive.google.com/file/d/1CFI4_ZMuY_ALIK6hnhwwlO0izuvYpUGs/view?usp=sharing",
  image: "/lovable-uploads/clauses.png"
}, {
  title: "MUN Lingo",
  description: "Essential terminology used in Model United Nations conferences",
  icon: MessageSquare,
  link: "https://drive.google.com/file/d/1vOxtInhKgnryTo7XTj3IYc9tCwWubrDx/view?usp=sharing",
  image: "/lovable-uploads/mun lingo.png"
},
{
  title: "Study Guides",
  description: "Study Guides of the commitees.",
  icon: ScrollText,
  link: "https://drive.google.com/drive/folders/1d8iPqYye3Gr-n0hpDNAKHdJevklLMzcM",
  image: "/lovable-uploads/study guide.png"
}, {
  title: "UN charter",
  description: " The foundational treaty of the United Nations, outlining its purpose, principles, and structure.",
  icon: Globe,
  link: "https://www.un.org/en/about-us/un-charter/full-text",
  image: "/lovable-uploads/un charter.png"
}];

const GuidesSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-center mb-8">
        <BookOpen className="h-8 w-8 text-mun-purple-light mr-3" />
        <h2 className="text-3xl font-bold text-white">MUN Guides</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guideResources.map((resource, index) => (
          <ResourceCard
            key={resource.title}
            {...resource}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GuidesSection;
