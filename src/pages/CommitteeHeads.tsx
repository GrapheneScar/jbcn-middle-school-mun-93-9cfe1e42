
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Separator } from '@/components/ui/separator';
import CommitteeHeadsHeader from '../components/committee-heads/CommitteeHeadsHeader';
import TeamPhoto from '../components/committee-heads/TeamPhoto';
import CommitteeHeadsTable from '../components/committee-heads/CommitteeHeadsTable';
import CommitteeHeadsProfiles from '../components/committee-heads/CommitteeHeadsProfiles';

const CommitteeHeads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-12 px-4 relative">
        <div className="container mx-auto">
          <CommitteeHeadsHeader />
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-20">
        <TeamPhoto />
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 my-16" />
        
        <CommitteeHeadsProfiles />
        
        <Separator className="max-w-md mx-auto bg-mun-purple/30 my-16" />
        
        <CommitteeHeadsTable />
      </div>
    </PageTransition>
  );
};

export default CommitteeHeads;
