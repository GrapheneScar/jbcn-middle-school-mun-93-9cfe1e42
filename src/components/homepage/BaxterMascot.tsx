
import { motion } from 'framer-motion';
const BaxterMascot = () => {
  return <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          type: "tween"
        }} className="lg:w-1/2 text-center">
            <span className="inline-block px-4 py-1 text-sm bg-mun-purple rounded-full mb-3">Meet Our Mascot</span>
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Baxter <span className="text-mun-purple-light">The Bear</span></h2>
            <p className="text-white/90 mb-4 text-center">Embodying the ideal delegate</p>
            
            <p className="text-white/80 mb-4 text-center">
              Courage, perseverance, determination, and power are only some of the characteristics that Baxter shares with our delegates.
            </p>
            
            <p className="text-white/80 mb-4 text-center">
              One of the more remarkable characteristics of the bear is the ability to adapt to circumstances with an open mind — a crucial skill for all delegates, especially first-timers.
            </p>
            
            <p className="text-white/80 text-center">
              There is so much more we can learn from the bear, making Baxter the perfect mascot for the JBCN MUN.
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2,
          type: "tween"
        }} className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Purple glow effect behind image */}
              <div className="absolute -inset-4 bg-mun-purple/30 rounded-full blur-3xl"></div>
              
              <img alt="Baxter - JBCN MUN Mascot" className="w-full max-w-md relative z-10 drop-shadow-[0_15px_35px_rgba(121,83,169,0.8)]" src="/lovable-uploads/baxter.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default BaxterMascot;
