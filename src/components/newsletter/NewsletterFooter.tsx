
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const NewsletterFooter = () => {
  return (
    <>
      <Separator className="max-w-md mx-auto my-16 bg-mun-purple/30" />
      
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
        <p className="text-white/80 mb-8">
          Our newsletter is more than just updates—it's a real-time chronicle of diplomatic history in the making. Each issue captures the essence of debate, negotiation, and resolution-drafting as they unfold.
        </p>
        <p className="text-white/80 italic">
          The newsletter is published by our dedicated Press team, who work diligently to document the conference proceedings.
        </p>
      </div>
    </>
  );
};

export default NewsletterFooter;
