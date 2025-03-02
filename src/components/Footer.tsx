import { motion } from 'framer-motion';
const Footer = () => {
  return <motion.footer className="py-8 px-4 mt-16 bg-black/70 border-t border-mun-purple/30" initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: 0.2
  }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-white/70 text-sm">Copyright ©2025 JBCN | All Rights Reserved | www.jbcnschool.edu.in
        </p>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;