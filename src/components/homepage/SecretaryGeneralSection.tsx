
import { motion } from "framer-motion";

const SecretaryGeneralSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto mb-20 px-4"
    >
      <div className="glass-panel overflow-hidden p-4 md:p-8 relative">
        {/* Purple gradient accents */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="inline-block px-4 py-1 bg-mun-purple/20 rounded-full text-sm mb-3">Leadership</span>
              <br />
              Message from the Secretary-General
            </h2>
            <div className="w-20 h-1 bg-mun-purple mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-xl h-80 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/ruhika.jpg"
                  alt="Aarushi Sharma - Secretary General" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-bold text-white">Aarushi Sharma</h3>
                  <p className="text-sm text-mun-purple-light font-medium">Secretary-General</p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-black/30 p-6 rounded-xl border border-mun-purple/20">
                <p className="text-white/90 italic text-lg mb-4">
                  "On behalf of the Secretariat, I extend a warm welcome to all delegates, faculty advisors, and guests to the JBCN Parel Model United Nations Conference."
                </p>
                <p className="text-white/80 mb-4">
                  As we gather to debate pressing global issues, I encourage each of you to approach your committees with diplomacy, critical thinking, and a genuine desire to create meaningful resolutions. This conference is an opportunity to develop your skills in negotiation, public speaking, and international relations.
                </p>
                <p className="text-white/80">
                  Remember that the true value of MUN lies not only in the resolutions you pass but in the perspectives you gain and the connections you forge. I look forward to witnessing your passionate debates and innovative solutions.
                </p>
                <div className="mt-6 text-right">
                  <p className="text-mun-purple-light font-semibold">Aarushi Sharma</p>
                  <p className="text-white/70 text-sm">Secretary-General, JBCN Parel MUN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecretaryGeneralSection;
