
import { motion } from 'framer-motion';

const BaxterMascot = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-mun-purple/5 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(155,135,245,0.2) 0%, transparent 50%)"
        }}
      />
      
      <motion.div 
        className="container mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div 
            className="lg:w-2/5"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-4 rounded-full mb-6 w-fit mx-auto lg:mx-0">
              <h3 className="text-sm md:text-base text-white/80 px-4">Meet Our Mascot</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left">
              Baxter <span className="text-mun-purple-light">The Bear</span>
            </h2>
            <p className="text-xl text-white/80 mb-6 text-center lg:text-left">
              Embodying the ideal delegate
            </p>
            
            <div className="space-y-4 text-white/70">
              <p>
                Courage, perseverance, determination, and power are only some of the 
                characteristics that Baxter shares with our delegates.
              </p>
              <p>
                One of the more remarkable characteristics of the bear is the ability to adapt 
                to circumstances with an open mind — a crucial skill for all delegates, 
                especially first-timers.
              </p>
              <p>
                There is so much more we can learn from the bear, making Baxter 
                the perfect mascot for the JBCN MUN.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mun-purple/40 to-mun-purple-light/40 rounded-full blur-md animate-pulse-soft"></div>
              <img 
                src="/lovable-uploads/3cef3976-5185-4338-9914-6fd6e930d15f.png" 
                alt="Baxter the Bear - JBCN MUN Mascot" 
                className="relative w-full max-w-md lg:max-w-lg mx-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BaxterMascot;
