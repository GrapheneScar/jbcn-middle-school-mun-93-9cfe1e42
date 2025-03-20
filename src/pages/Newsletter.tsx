
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { File } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Separator } from '@/components/ui/separator';

const Newsletter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsletters = [
    {
      id: 1,
      title: "JBCN MIDDLE SCHOOL MUN 2022 - Issue 1",
      date: "2022",
      description: "A deep dive into the opening of JBCN MUN 2022, featuring committee introductions, key debates, and the initial resolutions taking shape.",
      coverImage: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
      pdfUrl: "https://drive.google.com/file/d/123/view"
    },
    {
      id: 2,
      title: "JBCN MIDDLE SCHOOL MUN 2022 - Issue 2",
      date: "2022",
      description: "A recap of the final moments of JBCN MUN 2022, showcasing groundbreaking resolutions, delegate reflections, and memorable moments from the conference.",
      coverImage: "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png",
      pdfUrl: "https://drive.google.com/file/d/123/view"
    },
    {
      id: 3,
      title: "JBCN MIDDLE SCHOOL MUN 2023- Issue 1",
      date: "2023",
      description: "Kickstarting JBCN MUN 2023 with exclusive insights into the opening ceremony, first committee sessions, and early diplomatic breakthroughs.",
      coverImage: "/lovable-uploads/JBCN MIDDLE SCHOOL MUN 2023 - Issue 1.jpg",
      pdfUrl: "https://drive.google.com/file/d/152I79Xv7MOinIbts2HE3hK1i3yidpvIG/view"
    },
    {
      id: 4,
      title: "JBCN MIDDLE SCHOOL MUN 2023- Issue 2",
      date: "2023",
      description: "A comprehensive wrap-up of JBCN MUN 2023, highlighting key negotiations, passed resolutions, and standout performances from delegates.",
      coverImage: "/lovable-uploads/JBCN MIDDLE SCHOOL MUN 2023 - Issue 2.jpg",
      pdfUrl: "https://drive.google.com/file/d/1fRG7wePqRNMIUHNev3DLixLj3_83vVeW/view"
    },
    {
      id: 5,
      title: "JBCN MIDDLE SCHOOL MUN 2024",
      date: "2024",
      description: "A complete overview of JBCN MUN 2024, capturing the essence of diplomacy, leadership, and collaboration throughout the conference.",
      coverImage: "/lovable-uploads/JBCN MIDDLE SCHOOL MUN 2024.jpg",
      pdfUrl: "https://drive.google.com/file/d/1vfQWceFRk_dt6fT10_cvn2FSsIVyZhQH/view"
    }
  ];
  
  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Newsletters</h1>
            <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Stay informed with the latest updates, highlights, and developments from JBCN Parel MUN 2025 through our official conference newsletter.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(121,83,169,0.3)" }}
                className="glass-panel overflow-hidden rounded-xl"
              >
                <a 
                  href={newsletter.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={newsletter.coverImage} 
                      alt={newsletter.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                    <div className="absolute top-0 right-0 p-3">
                      <span className="inline-block bg-mun-purple text-white text-xs rounded-full px-3 py-1">
                        {newsletter.date}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{newsletter.title}</h3>
                      <p className="text-white/80 text-sm">{newsletter.description}</p>
                    </div>
                  </div>
                  <div className="p-4 flex justify-center items-center text-mun-purple-light hover:text-mun-purple transition-colors">
                    <File className="mr-2 h-5 w-5" />
                    <span>View PDF</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <Separator className="max-w-md mx-auto my-16 bg-mun-purple/30" />
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
            <p className="text-white/80 mb-8">
              Our newsletter is more than just updates—it's a real-time chronicle of diplomatic history in the making. Each issue captures the essence of debate, negotiation, and resolution-drafting as they unfold.
            </p>
            <p className="text-white/80 italic">
              The newsletter is published by our dedicated Press team, who work diligently to document the conference proceedings.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Newsletter;
