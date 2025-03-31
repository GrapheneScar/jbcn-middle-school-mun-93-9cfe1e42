import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Mail } from 'lucide-react';
import { useState } from 'react';
interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName: string;
  committeeEmail?: string;
}
const CommitteeResources = ({
  studyGuideUrl,
  countryMatrixUrl,
  committeeName,
  committeeEmail
}: CommitteeResourcesProps) => {
  const [isCountryMatrixHovered, setIsCountryMatrixHovered] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.2
  }} className="mt-16">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Committee Resources
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="glass-panel p-6 rounded-xl border border-mun-purple/20 relative overflow-hidden group">
          {/* Gradient background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-mun-purple/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-mun-purple/20 flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="w-8 h-8 text-mun-purple-light" />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Study Guide</h3>
            <p className="text-white/70 text-center mb-6">
              Access the official study guide for the {committeeName} committee. This document contains essential information about the agenda topics, background, and expectations.
            </p>
            
            <div className="flex justify-center">
              <a href={studyGuideUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Download Study Guide
                </Button>
              </a>
            </div>
            
            <p className="text-white/50 text-sm text-center mt-4 italic">NOTE: Your Allocation will be sent to you via your registered Email</p>
          </div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="glass-panel p-6 rounded-xl border border-mun-purple/20 relative overflow-hidden group" onMouseEnter={() => setIsCountryMatrixHovered(true)} onMouseLeave={() => setIsCountryMatrixHovered(false)}>
          {/* Gradient background */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-mun-purple/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="h-48 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg relative">
              {/* Hover effect for country matrix */}
              <img src="/lovable-uploads/fb90c03d-d4a5-4394-8250-6fa259a9253d.png" alt="Country Matrix Cover (Colored)" className={`w-full h-full object-contain transition-opacity duration-500 ${isCountryMatrixHovered ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/lovable-uploads/a288ae58-b038-4b97-a2db-d64d63ca1d65.png" alt="Country Matrix Cover (Black and White)" className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-500 ${isCountryMatrixHovered ? 'opacity-0' : 'opacity-100'}`} />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Country Matrix</h3>
            <p className="text-white/70 text-center mb-6">
              The country matrix provides details about the countries involved in this committee, their positions, and relevant policy information.
            </p>
            
            <div className="flex justify-center">
              <a href={countryMatrixUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <FileText className="mr-2 w-4 h-4" />
                  Download Country Matrix
                </Button>
              </a>
            </div>
            
            <p className="text-white/50 text-sm text-center mt-4 italic">NOTE: The Country Matrix will be open after registration closes.</p>
          </div>
        </motion.div>
      </div>
      
      {/* Email Support Card */}
      {committeeEmail && <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="mt-6 glass-panel p-6 rounded-xl border border-mun-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-white/70">
                Contact the committee directors directly at:{' '}
                <span className="text-mun-purple-light">{committeeEmail}</span>
              </p>
            </div>
            
            <a href={`mailto:${committeeEmail}`} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline" className="border-mun-purple hover:bg-mun-purple/20 text-mun-purple-light">
                <Mail className="mr-2 w-4 h-4" />
                Email Committee
              </Button>
            </a>
          </div>
        </motion.div>}
    </motion.div>;
};
export default CommitteeResources;