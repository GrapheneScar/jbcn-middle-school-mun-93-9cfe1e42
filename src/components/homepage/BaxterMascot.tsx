
import { motion } from 'framer-motion';

const BaxterMascot = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Center-aligned content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Mascot</span>
            <h2 className="text-3xl font-bold text-white">Meet Our Mascot</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-mun-purple/40 shadow-2xl mx-auto">
              <img
                src="/lovable-uploads/baxter.png"
                alt="Baxter - JBCN MUN Mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-mun-purple px-4 py-1 rounded-full">
              <span className="text-white font-bold">Baxter</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/80 max-w-2xl text-center mx-auto"
          >
            Meet Baxter, our friendly diplomat bear who represents the spirit of JBCN MUN! 
            Baxter embodies diplomacy, thoughtful debate, and international cooperation. 
            As you navigate through your MUN journey, Baxter will be there to encourage 
            collaboration and remind us all that even the most complex global challenges 
            can be addressed with patience, respect, and teamwork.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BaxterMascot;
