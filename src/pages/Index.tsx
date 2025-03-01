
import { useEffect } from 'react';
import StripeBackground from '../components/StripeBackground';
import HeroSection from '../components/homepage/HeroSection';
import NavigationPanels from '../components/homepage/NavigationPanels';
import CallToAction from '../components/homepage/CallToAction';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <StripeBackground />
      <HeroSection />
      <NavigationPanels />
      <CallToAction />
    </div>
  );
};

export default Index;
