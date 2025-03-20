
import { useEffect } from 'react';
import AnimatedStripes from './AnimatedStripes';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated Stripes Background */}
      <AnimatedStripes />
      
      {/* Main Hero Content */}
      <HeroContent />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
