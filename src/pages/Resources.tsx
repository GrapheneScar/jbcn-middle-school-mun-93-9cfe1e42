
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import ResourcesHeader from '../components/resources/ResourcesHeader';
import ResourceTabs from '../components/resources/ResourceTabs';
import ContactSection from '../components/resources/ContactSection';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <ResourcesHeader />
          <ResourceTabs />
          <ContactSection />
        </div>
      </section>
    </PageTransition>
  );
};

export default Resources;
