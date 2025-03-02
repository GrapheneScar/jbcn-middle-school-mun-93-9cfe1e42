
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import CommitteeDetail from '../components/committees/CommitteeDetail';

const CommitteeDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      <CommitteeDetail />
    </PageTransition>
  );
};

export default CommitteeDetailPage;
