
import { useEffect } from 'react';
import StripeBackground from '../components/StripeBackground';
import HeroSection from '../components/homepage/HeroSection';
import NavigationPanels from '../components/homepage/NavigationPanels';
import CallToAction from '../components/homepage/CallToAction';
import PageTransition from '../components/PageTransition';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="relative w-full min-h-screen overflow-hidden">
        <StripeBackground />
        <HeroSection />
        <NavigationPanels />
        <CallToAction />
      </div>
    </PageTransition>
  );
};

export default Index;
