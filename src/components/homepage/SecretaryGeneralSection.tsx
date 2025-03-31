import { motion } from "framer-motion";
const SecretaryGeneralSection = () => {
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
  }} className="container mx-auto mb-10 px-4">
      <div className="glass-panel overflow-hidden p-4 md:p-8 relative mx-0 py-[32px] my-[40px]">
        {/* Purple gradient accents */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-mun-purple/30 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="inline-block px-4 py-1 bg-mun-purple/20 rounded-full text-sm mb-3">Leadership</span>
              <br />
              Message from the Secretariat
            </h2>
            <div className="w-20 h-1 bg-mun-purple mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <motion.div className="relative rounded-xl overflow-hidden shadow-xl h-80 w-full" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <img src="/lovable-uploads/Ruhika.png" alt="Ruhika Bhende - Secretary General" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-bold text-white">Ruhika Bhende</h3>
                  <p className="text-sm text-mun-purple-light font-medium">Secretary-General</p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-black/30 p-6 rounded-xl border border-mun-purple/20">
                <p className="text-white/90 italic text-lg mb-4"><strong>Greetings! Dear Delegates,</strong></p>
                <p className="text-white/80 mb-4">
                  I, Ruhika Bhende, am honoured to serve as your Secretary-General for JBCN Middle School MUN 2025. I am truly privileged to lead this platform that fosters diplomacy, critical thinking, and global awareness. My journey with MUN began in the 5th grade, and over the years, it has transformed the way I engage with international affairs, debate pressing global issues, and develop leadership skills. MUN has taught me that effective diplomacy isn't just about speaking well but also about listening, adapting, and working towards solutions that benefit all.
                </p>
                <p className="text-white/80 mb-4">
                  Beyond MUN, I am deeply passionate about international relations, politics, and youth advocacy. I believe that young voices have the power to drive meaningful change, and platforms like MUN equip us with the confidence and knowledge to do so. Being a martial arts athlete has also been a significant part of my personal growth, teaching me perseverance and resilience, which I believe are just as essential in debate and leadership. A little outside of academics, I'm big on music (I love rock bands) and literature. I enjoy watching musicals and travelling(I love exploring new places) in my free time.
                </p>
                <p className="text-white/80">
                  To all delegates, whether this is your first conference or one of many, remember that MUN is more than just awards and competition; it's a space to learn, to challenge your perspectives, and to step into the shoes of global leaders. As Nelson Mandela wisely said, "It always seems impossible until it's done." The most impactful delegates are not just those who speak the loudest but those who engage thoughtfully, collaborate effectively, and remain open to new ideas. Step out of your comfort zone, embrace every debate as an opportunity to grow, and most importantly, enjoy the process. I look forward to meeting each one of you, hearing the voices of our future, and having a truly fruitful and unforgettable conference!
                </p>
                <div className="mt-6 text-right">
                  <p className="text-mun-purple-light font-semibold">Ruhika Bhende</p>
                  <p className="text-white/70 text-sm">Secretary-General, JBCN Middle School MUN</p>
                  <p className="text-white/70 text-xs">EMAIL: secretariat.msm2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default SecretaryGeneralSection;