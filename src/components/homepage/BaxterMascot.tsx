
import { motion } from 'framer-motion';

const BaxterMascot = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          >
            {/* Mascot image */}
            <div className="lg:w-1/3 flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-mun-purple/40 shadow-xl">
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
            </div>
            
            {/* Mascot description */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Mascot</span>
                <h2 className="text-3xl font-bold text-white mb-4">Meet Our Mascot</h2>
                <p className="text-white/80 max-w-2xl mx-auto lg:mx-0">
                  Meet Baxter, our friendly diplomat bear who represents the spirit of JBCN MUN! 
                  Baxter embodies diplomacy, thoughtful debate, and international cooperation. 
                  As you navigate through your MUN journey, Baxter will be there to encourage 
                  collaboration and remind us all that even the most complex global challenges 
                  can be addressed with patience, respect, and teamwork.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BaxterMascot;
