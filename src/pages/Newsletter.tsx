
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import NewsletterHeader from '../components/newsletter/NewsletterHeader';
import NewsletterTabs from '../components/newsletter/NewsletterTabs';
import NewsletterFooter from '../components/newsletter/NewsletterFooter';
import { middleSchoolNewsletters, seniorMUNNewsletters } from '../components/newsletter/newsletterData';

const Newsletter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <StripeBackground />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <NewsletterHeader />
        </div>
      </section>
      
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <NewsletterTabs 
            seniorMUNNewsletters={seniorMUNNewsletters}
            middleSchoolNewsletters={middleSchoolNewsletters}
          />
          
          <NewsletterFooter />
        </div>
      </section>
    </PageTransition>
  );
};

export default Newsletter;
