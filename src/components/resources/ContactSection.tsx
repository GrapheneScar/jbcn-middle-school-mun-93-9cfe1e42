
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const ContactSection = () => {
  return (
    <motion.div 
      className="mt-20 text-center" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white/80 mb-4">Need personalized assistance with your preparation?</p>
      <a href="/contact">
        <Button variant="outline" className="border-mun-purple text-mun-purple-light hover:bg-mun-purple/10">
          Contact Us
        </Button>
      </a>
    </motion.div>
  );
};

export default ContactSection;
