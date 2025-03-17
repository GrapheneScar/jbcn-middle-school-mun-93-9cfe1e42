
import { motion } from 'framer-motion';
import { RegisterButton } from '../ui/register-button';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-mun-purple/10 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(121,83,169,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(121,83,169,0.3) 0%, transparent 50%)"
        }}
      />
      
      <motion.div 
        className="container mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the Diplomatic Journey?</h2>
          <p className="text-xl text-white/80 mb-10">
            Become part of a transformative experience that builds leadership, public speaking, and critical thinking skills.
          </p>
          <RegisterButton />
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
