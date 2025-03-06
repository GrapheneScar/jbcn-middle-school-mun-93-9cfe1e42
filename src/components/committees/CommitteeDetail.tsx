import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { committeesData } from './committees-data';
import { ArrowLeft, FileClock, Globe, Users, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const CommitteeDetail = () => {
  const {
    abbr
  } = useParams<{
    abbr: string;
  }>();
  const navigate = useNavigate();

  // Find the committee by its abbreviation (case insensitive)
  const committee = committeesData.find(c => c.abbr.toLowerCase() === abbr?.toLowerCase());
  if (!committee) {
    return <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Committee not found</h2>
        <Button onClick={() => navigate('/committees')}>
          <ArrowLeft className="mr-2" /> Back to Committees
        </Button>
      </div>;
  }
  return <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mb-8">
          <Button variant="outline" className="mb-6" onClick={() => navigate('/committees')}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Committees
          </Button>

          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-mun-purple/20 flex items-center justify-center overflow-hidden mb-4">
              {committee.logo ? <img src={committee.logo} alt={`${committee.abbr} logo`} className="w-full h-full object-cover" /> : <Users className="w-10 h-10 text-mun-purple-light" />}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                {committee.name} ({committee.abbr})
              </h1>
              {committee.style && <div className="mt-2">
                  <span className="inline-block px-3 py-1 text-sm bg-mun-purple-light/30 rounded-full">
                    {committee.style}
                  </span>
                </div>}
            </div>
          </div>
          
          {committee.studyGuideUrl && <div className="text-center mt-4 mb-6">
              <a href={committee.studyGuideUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <FileText className="mr-2 w-4 h-4" />
                  Access Study Guide
                </Button>
              </a>
              <p className="text-white/70 text-sm italic mt-2">
                Note: Password will be sent with your allocation
              </p>
            </div>}
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full bg-black/30 border border-mun-purple/30 p-1 max-w-md mx-auto py-0">
            <TabsTrigger value="overview" className="rounded-full text-sm px-4 py-2">Overview</TabsTrigger>
            <TabsTrigger value="agenda" className="rounded-full text-sm px-4 py-2">Agenda</TabsTrigger>
            <TabsTrigger value="chairs" className="rounded-full text-sm px-4 py-2">Chairs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Globe className="mr-3 text-mun-purple-light" /> About the Committee
              </h2>
              <p className="text-white/80 mb-4 text-center">{committee.description}</p>
              {committee.background && <p className="text-white/80 text-center">{committee.background}</p>}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="agenda" className="space-y-6">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <FileClock className="mr-3 text-mun-purple-light" /> Agenda Topics
              </h2>
              <div className="space-y-8 max-w-3xl mx-auto">
                {committee.topics.map((topic, index) => <div key={index} className="border-l-4 border-mun-purple pl-6 py-2">
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">Topic {index + 1}: {topic}</h3>
                    <p className="text-white/80 text-center">
                      Delegates will discuss key issues related to this topic, propose solutions,
                      and work together to draft a comprehensive resolution that addresses the challenges 
                      faced by the international community.
                    </p>
                  </div>)}
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="chairs" className="space-y-6">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Users className="mr-3 text-mun-purple-light" /> Committee Leadership
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                {committee.chairs.map((chair, index) => <motion.div key={chair.name} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <div className="glass-panel h-full">
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                          <img src={chair.photo} alt={chair.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{chair.name}</h3>
                          <p className="text-mun-purple-light italic mb-4">{chair.title}</p>
                          <p className="text-white/80">{chair.bio}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default CommitteeDetail;