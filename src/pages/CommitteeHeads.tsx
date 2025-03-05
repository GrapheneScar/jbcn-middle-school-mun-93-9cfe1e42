import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Committee Heads data based on the image
const committeeHeads = [
  {
    role: "Head of Social Media", 
    names: "Riddhi Bavadiya and Yana Mehta"
  },
  {
    role: "Head of Website Design",
    names: "Samay Shah, Naham Shah"
  },
  {
    role: "Head of Press",
    names: "Aarna Amberkar"
  },
  {
    role: "Head of Photography",
    names: "Keerthana Reddy, Rayhan Parikh"
  },
  {
    role: "Head of Illustration",
    names: "Radhika Dutt"
  }
];

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
      {/* Placeholder for team photo */}
    </div>
  </motion.div>
);

const CommitteeHeadsTable = () => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="overflow-hidden bg-black/20 border-mun-purple/20">
        <Table>
          <TableHeader className="bg-mun-purple/30">
            <TableRow>
              <TableHead className="w-1/3 font-bold text-white">Role</TableHead>
              <TableHead className="w-2/3 font-bold text-white">Name(s)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {committeeHeads.map((head, index) => (
              <TableRow 
                key={index} 
                className={`border-b border-mun-purple/20 hover:bg-mun-purple/10 transition-colors ${index % 2 === 0 ? 'bg-black/10' : ''}`}
              >
                <TableCell className="font-semibold text-white">{head.role}</TableCell>
                <TableCell className="text-white/90">{head.names}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </motion.div>
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
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 mb-16" />
        
        <CommitteeHeadsTable />
      </div>
    </PageTransition>
  );
};

export default CommitteeHeads;
