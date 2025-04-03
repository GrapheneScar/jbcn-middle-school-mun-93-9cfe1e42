import { motion } from 'framer-motion';
const MissionVisionSection = () => {
  return <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Mission */}
        <motion.div className="text-center mb-12" initial={{
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
      }}>
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Our Mission</span>
          <h2 className="text-3xl font-bold text-white">Cultivating Tomorrow's Leaders</h2>
          
        </motion.div>

        {/* Vision */}
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2,
        type: "tween"
      }}>
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Our Vision</span>
          <h2 className="text-3xl font-bold text-white">What is Model UN?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            Model United Nations (MUN) is an academic simulation of the UN where students learn about diplomacy, international relations, and the UN system. Participants research and represent a country, debating global issues and seeking solutions.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default MissionVisionSection;