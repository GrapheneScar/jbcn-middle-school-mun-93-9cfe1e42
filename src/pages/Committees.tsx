
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import CommitteeHeader from '../components/committees/CommitteeHeader';
import CommitteeList from '../components/committees/CommitteeList';
import CommitteeStructure from '../components/committees/CommitteeStructure';
import { committeesData } from '../components/committees/committees-data';

const Committees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      
      <div className="pt-28 sm:pt-32 md:pt-36 text-center container mx-auto px-4">
        <CommitteeHeader 
          title="COMMITTEES"
          description="Explore our five diverse committees designed to provide middle school students with an enriching simulation of international diplomacy and historical events."
        />
        
        <div className="max-w-6xl mx-auto">
          <CommitteeList committees={committeesData} />
        </div>
        
        <CommitteeStructure />
      </div>
    </PageTransition>
  );
};

export default Committees;
