import { motion } from "framer-motion";
const DeputySecretaryGeneralSection = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} className="container mx-auto mb-20 px-4">
      <div className="glass-panel overflow-hidden p-4 md:p-8 relative">
        {/* Purple gradient accents */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 order-2 md:order-1">
              <div className="bg-black/30 p-6 rounded-xl border border-mun-purple/20">
                <p className="text-white/90 italic text-lg mb-4"><strong>Greetings delegates!</strong></p>
                <p className="text-white/80 mb-4 text-sm">
                  My name is Areehah Mitra and I am honored to be the Deputy Secretary General of JBCN Middle School MUN 2025. Middle School MUN for me serves as a tremendously bright learning opportunity for delegates in grades 6 through 8 as it allows for exhilarating debate as well as a pertinent stepping stone to diplomacy, The Secretariat this year aims to facilitate keen synchronization of conference proceedings and put in its best efforts to help satisfy all the delegates attending.
                </p>
                <p className="text-white/80 mb-4 text-sm">
                  If you've ever been skeptical about attending your first MUN or getting started on such a seemingly daunting journey, I'd highly encourage you to take the leap of faith; the skills you learn are endless. At Middle School MUN, the diverse committees and mix of topics discuss some of the most interesting yet pivotal disputes and serve as a brilliant base for introductory discourse. <em>Don't let the fear of failure outweigh the possibilities of learning.</em>
                </p>
                <p className="text-white/80 text-sm">
                  With thorough planning and your unwavering enthusiasm, I look forward to making JBCN Middle School MUN '25 a memorable adventure!
                </p>
                <div className="mt-6 text-left">
                  <p className="text-mun-purple-light font-semibold">Areehah Mitra</p>
                  <p className="text-white/70 text-sm">Deputy Secretary-General, JBCN Middle School MUN</p>
                  <p className="text-white/70 text-xs">EMAIL: secretariat.msm2025@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 order-1 md:order-2">
              <motion.div className="relative rounded-xl overflow-hidden shadow-xl h-80 w-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <img src="/lovable-uploads/Areehah.png" alt="Areehah Mitra - Deputy Secretary General" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-bold text-white">Areehah Mitra</h3>
                  <p className="text-sm text-mun-purple-light font-medium">Deputy Secretary-General</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default DeputySecretaryGeneralSection;