
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Department, DepartmentChair } from '@/components/committees/types';

// Mock data for committee heads
const committeeHeads: Department[] = [{
  name: "Organizing Committee",
  description: "The team responsible for coordinating all aspects of the MUN conference.",
  chairs: [{
    name: "Aarushi Sharma",
    title: "Head of Organizing Committee",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Organizing Committee"
  }, {
    name: "Rohan Mehta",
    title: "Deputy Head of Organizing Committee",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Organizing Committee"
  }, {
    name: "Ananya Patel",
    title: "Deputy Head of Organizing Committee",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Organizing Committee"
  }]
}, {
  name: "Social Media",
  description: "Manages the online presence and social media communications for the MUN.",
  chairs: [{
    name: "Nisha Kapoor",
    title: "Head of Social Media",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Social Media"
  }, {
    name: "Shanaya Shah",
    title: "Deputy Head of Social Media",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Social Media"
  }]
}, {
  name: "Press",
  description: "Responsible for documenting and reporting on conference proceedings.",
  chairs: [{
    name: "Vikram Joshi",
    title: "Head of Press",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Press"
  }, {
    name: "Priya Malhotra",
    title: "Deputy Head of Press",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Press"
  }]
}, {
  name: "Training",
  description: "Provides guidance and training to delegates before and during the conference.",
  chairs: [{
    name: "Rahul Kumar",
    title: "Head of Training",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Training"
  }, {
    name: "Isha Patil",
    title: "Head of Training",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Training"
  }, {
    name: "Aryan Singh",
    title: "Head of Outreach",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Training"
  }]
}, {
  name: "I.T.",
  description: "Handles all technical aspects and digital infrastructure of the conference.",
  chairs: [{
    name: "Varun Iyer",
    title: "Head of I.T.",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "I.T."
  }, {
    name: "Dhruv Sachdeva",
    title: "Head of I.T.",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "I.T."
  }, {
    name: "Alisha Ali",
    title: "Deputy Head of I.T.",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "I.T."
  }]
}, {
  name: "Photography",
  description: "Captures the moments and experiences throughout the conference.",
  chairs: [{
    name: "Arnav Dhankar",
    title: "Head of Photography",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Photography"
  }, {
    name: "Risha Mitra",
    title: "Deputy Head of Photography",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Photography"
  }]
}, {
  name: "Illustrations",
  description: "Creates visual content and designs for conference materials.",
  chairs: [{
    name: "Nehal Kumar",
    title: "Head of Illustrations",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Illustrations"
  }, {
    name: "Roshni Jain",
    title: "Deputy Head of Illustrations",
    photo: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
    department: "Illustrations"
  }]
}];

const TeamPhoto = () => (
  <motion.div 
    className="w-full max-w-3xl mx-auto mb-16 overflow-hidden glass-panel p-4" 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-white">The Team</h2>
    <div className="relative w-full aspect-video bg-black/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white/50">
        <Users size={64} />
        <span className="ml-2 text-lg">Team Photo</span>
      </div>
    </div>
  </motion.div>
);

const DepartmentSection = ({ department, index }: { department: Department; index: number }) => {
  return (
    <motion.section 
      className="mb-20" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        {department.name}
      </h2>
      
      {department.description && (
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
          {department.description}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {department.chairs.map(chair => <ChairCard key={chair.name} chair={chair} />)}
      </div>
    </motion.section>
  );
};

const ChairCard = ({ chair }: { chair: DepartmentChair }) => {
  return (
    <Card className="overflow-hidden bg-black/20 border-mun-purple/20 hover:border-mun-purple/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(121,83,169,0.2)] transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
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

const CommitteeHeads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-12 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center" 
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              Committee Heads
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-mun-purple mx-auto mb-8" 
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: 80,
                  transition: { duration: 0.8, delay: 0.3 }
                }
              }} 
            />
            
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-12" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              Meet our dedicated team of committee heads who work tirelessly to make JBCN Parel MUN an enriching experience for all delegates.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-20">
        <TeamPhoto />
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 mb-20" />
        
        {committeeHeads.map((department, index) => (
          <div key={department.name}>
            <DepartmentSection department={department} index={index} />
            {index < committeeHeads.length - 1 && (
              <Separator className="max-w-xs mx-auto bg-mun-purple/30 mb-20" />
            )}
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default CommitteeHeads;
